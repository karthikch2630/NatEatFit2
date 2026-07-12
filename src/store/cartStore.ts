import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SelectedAddOn {
  groupName: string;
  name: string;
  price: number;
}

export interface CartItem {
  cartItemId: string;      // unique per product+customization combo
  productId: string;       // original product id, for reference
  slug: string;
  name: string;
  basePrice: number;       // numeric base price
  image: string;
  category: string;
  quantity: number;
  addOns: SelectedAddOn[]; // selected customizations (empty array if none)
  unitPrice: number;       // basePrice + sum(addOns) — price for ONE unit
}

interface CartState {
  items: CartItem[];
  
  // Core Cart Actions
  addItem: (item: Omit<CartItem, 'quantity' | 'cartItemId'>, quantity?: number) => void;
  updateItem: (oldCartItemId: string, newAddOns: SelectedAddOn[], newUnitPrice: number) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Getters
  getTotalPrice: () => number;
  getItemCount: () => number;
}

// Builds a stable id from product + chosen add-ons, so the SAME customization stacks quantity,
// but a DIFFERENT customization of the same product becomes its own line item.
const buildCartItemId = (productId: string, addOns: SelectedAddOn[]): string => {
  const addOnKey = addOns.map((a) => a.name).sort().join('|');
  return `${productId}::${addOnKey}`;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item, quantity = 1) => {
        const cartItemId = buildCartItemId(item.productId, item.addOns);
        const existing = get().items.find((i) => i.cartItemId === cartItemId);

        if (existing) {
          set({
            items: get().items.map((i) =>
              i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + quantity } : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...item, cartItemId, quantity }] });
        }
      },

      updateItem: (oldCartItemId, newAddOns, newUnitPrice) => {
        const state = get();
        const existingItem = state.items.find(i => i.cartItemId === oldCartItemId);
        
        if (!existingItem) return;

        // Generate the new ID based on the updated customizations
        const newCartItemId = buildCartItemId(existingItem.productId, newAddOns);

        // If the ID didn't change (customizations are identical), just update the price
        if (oldCartItemId === newCartItemId) {
          set({
            items: state.items.map((i) => 
              i.cartItemId === oldCartItemId 
                ? { ...i, addOns: newAddOns, unitPrice: newUnitPrice } 
                : i
            )
          });
          return;
        }

        // Check if modifying this item makes it identical to ANOTHER item already in the cart
        const mergeTarget = state.items.find(i => i.cartItemId === newCartItemId);

        if (mergeTarget) {
          // It matches another item! Merge the quantities and delete the old one.
          set({
            items: state.items
              .map((i) => 
                i.cartItemId === newCartItemId 
                  ? { ...i, quantity: i.quantity + existingItem.quantity } 
                  : i
              )
              .filter((i) => i.cartItemId !== oldCartItemId) // Remove the old entry
          });
        } else {
          // It's a completely new unique combination. Just update the current item's details.
          set({
            items: state.items.map((i) => 
              i.cartItemId === oldCartItemId 
                ? { ...i, cartItemId: newCartItemId, addOns: newAddOns, unitPrice: newUnitPrice } 
                : i
            )
          });
        }
      },

      removeItem: (cartItemId) =>
        set({ items: get().items.filter((i) => i.cartItemId !== cartItemId) }),

      updateQuantity: (cartItemId, quantity) => {
        if (quantity <= 0) {
          // If quantity hits 0, remove the item entirely
          set({ items: get().items.filter((i) => i.cartItemId !== cartItemId) });
        } else {
          set({
            items: get().items.map((i) =>
              i.cartItemId === cartItemId ? { ...i, quantity } : i
            ),
          });
        }
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => get().items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),

      getItemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'nateatfit2-cart' }
  )
);