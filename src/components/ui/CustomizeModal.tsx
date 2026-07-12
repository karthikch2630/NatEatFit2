import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Minus, Plus } from 'lucide-react';

// Notice the updated paths (../../)
import { type AddOnGroup, type AddOn, getCustomizationsForProduct } from '../../data/customizationData';
import { useCartStore, type SelectedAddOn, type CartItem } from '../../store/cartStore';
import { type MenuDetailItem } from '../../data/productsData';

interface CustomizeModalProps {
  product: MenuDetailItem;
  existingCartItem?: CartItem;
  onClose: () => void;
}

const parsePrice = (price: string | number): number => {
  if (typeof price === 'number') return price;
  return Number(price.replace(/[^\d.]/g, '')) || 0;
};

const CustomizeModal = ({ product, existingCartItem, onClose }: CustomizeModalProps) => {
  const { addItem, updateItem } = useCartStore();
  const basePrice = parsePrice(product.price);
  
  const isEditMode = !!existingCartItem;

  // FETCH DYNAMIC GROUPS BASED ON PRODUCT CATEGORY
  const groups = useMemo(
  () => getCustomizationsForProduct(product.category, product.slug),
  [product.category, product.slug]
);

  const [selections, setSelections] = useState<Record<string, AddOn[]>>(() => {
    const initial: Record<string, AddOn[]> = {};
    
    if (isEditMode && existingCartItem) {
      groups.forEach((group: AddOnGroup) => {
        const selectedInCart = existingCartItem.addOns.filter((a: SelectedAddOn) => a.groupName === group.groupName);
        initial[group.groupName] = selectedInCart.map((sa: SelectedAddOn) => {
          const match = group.options.find((o: AddOn) => o.name === sa.name);
          return match || { id: sa.name, name: sa.name, price: sa.price };
        });
      });
    } else {
      groups.forEach((group: AddOnGroup) => {
        if (group.required && group.selectionType === 'single') {
          initial[group.groupName] = [group.options[0]];
        } else {
          initial[group.groupName] = [];
        }
      });
    }
    return initial;
  });

  const [quantity, setQuantity] = useState(1);

  const toggleOption = (group: AddOnGroup, option: AddOn) => {
    setSelections((prev) => {
      const current = prev[group.groupName] || [];
      if (group.selectionType === 'single') {
        return { ...prev, [group.groupName]: [option] };
      }
      const exists = current.some((o: AddOn) => o.id === option.id);
      return {
        ...prev,
        [group.groupName]: exists
          ? current.filter((o: AddOn) => o.id !== option.id)
          : [...current, option],
      };
    });
  };

  const isSelected = (groupName: string, optionId: string) =>
    (selections[groupName] || []).some((o: AddOn) => o.id === optionId);

  const addOnsFlat: SelectedAddOn[] = useMemo(
    () =>
      Object.entries(selections).flatMap(([groupName, opts]) =>
        opts.map((o: AddOn) => ({ groupName, name: o.name, price: o.price }))
      ),
    [selections]
  );

  const unitPrice = basePrice + addOnsFlat.reduce((sum, a) => sum + a.price, 0);
  const totalDisplayPrice = isEditMode ? unitPrice : unitPrice * quantity;

  const canAdd = groups
    .filter((g: AddOnGroup) => g.required)
    .every((g: AddOnGroup) => (selections[g.groupName] || []).length > 0);

  const handleSave = () => {
    if (isEditMode && existingCartItem) {
      updateItem(existingCartItem.cartItemId, addOnsFlat, unitPrice);
    } else {
      addItem(
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,
          basePrice,
          image: product.image,
          category: product.category,
          addOns: addOnsFlat,
          unitPrice,
        },
        quantity
      );
    }
    onClose();
  };

  if (groups.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
         <div className="bg-white p-8 rounded-2xl text-center max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">No customizations available</h3>
            <p className="text-gray-500 mb-6">This item is perfect as is!</p>
            <button onClick={handleSave} className="w-full py-3 bg-[#2A5C38] text-white rounded-full font-bold">
               Add to Cart (₹{basePrice})
            </button>
         </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="bg-[#FDFBF7] w-full sm:max-w-md sm:rounded-[2rem] rounded-t-[2rem] max-h-[85vh] flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center gap-4 p-5 border-b border-[#EBE8DE] bg-white sm:rounded-t-[2rem] rounded-t-[2rem]">
          <img src={product.image} alt={product.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
          <div className="flex-1">
            <h2 className="text-lg font-black text-[#2C1810] leading-tight mb-1">{product.name}</h2>
            <p className="text-xs font-bold text-[#8C877D] uppercase tracking-wider">
              {isEditMode ? 'Edit Customization' : 'Customize your item'}
            </p>
          </div>
          <button onClick={onClose} className="p-2.5 rounded-full bg-[#F5F3EC] hover:bg-[#EBE8DE] text-[#5C5950] transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Groups */}
        <div className="flex-1 overflow-y-auto px-5 py-4 scrollbar-hide">
          {groups.map((group: AddOnGroup) => (
            <div key={group.groupName} className="mb-8 last:mb-2">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-sm font-black text-[#2C1810]">{group.groupName}</h3>
                  <p className="text-[11px] text-[#8C877D] font-semibold mt-0.5">
                    {group.selectionType === 'single' ? 'Choose 1' : 'Choose as many as you like'}
                  </p>
                </div>
                {group.required && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D94545] bg-[#FFF0F0] px-2.5 py-1 rounded-md">
                    Required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2.5">
                {group.options.map((option: AddOn) => {
                  const selected = isSelected(group.groupName, option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(group, option)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all ${
                        selected
                          ? 'bg-[#E8F3E8] border-[#2A5C38] shadow-sm'
                          : 'bg-white border-[#EBE8DE] hover:border-[#2A5C38]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 flex items-center justify-center border-2 transition-colors ${
                            group.selectionType === 'single' ? 'rounded-full' : 'rounded-md'
                          } ${selected ? 'bg-[#2A5C38] border-[#2A5C38]' : 'border-[#D9D6CC]'}`}
                        >
                          {selected && <Check size={12} strokeWidth={3} className="text-white" />}
                        </div>
                        <span className={`text-sm font-bold ${selected ? 'text-[#2A5C38]' : 'text-[#5C5950]'}`}>
                          {option.name}
                        </span>
                      </div>
                      <span className={`text-xs font-bold ${selected ? 'text-[#2A5C38]' : 'text-[#8C877D]'}`}>
                        {option.price > 0 ? `+₹${option.price}` : 'Free'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#EBE8DE] bg-white rounded-b-[2rem] sm:rounded-b-[2rem] shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-4">
            {!isEditMode ? (
              <div className="flex items-center gap-4 bg-[#F3F2EE] rounded-full px-2 py-1.5 border border-[#EBE8DE]">
                <button 
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))} 
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-[#5C5950] transition-all"
                >
                  <Minus size={16} />
                </button>
                <span className="text-base font-black w-4 text-center text-[#2C1810]">{quantity}</span>
                <button 
                  onClick={() => setQuantity((q) => q + 1)} 
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-[#2A5C38] transition-all"
                >
                  <Plus size={16} />
                </button>
              </div>
            ) : (
              <span className="text-sm font-bold text-[#8C877D]">Item Unit Price</span>
            )}
            <p className="text-2xl font-black text-[#1F452A]">₹{totalDisplayPrice}</p>
          </div>

          <button
            onClick={handleSave}
            disabled={!canAdd}
            className="w-full py-4 bg-[#2A5C38] text-white font-bold text-lg rounded-full hover:bg-[#1F452A] active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#2A5C38]/20"
          >
            {isEditMode ? 'Save Changes' : 'Add to Cart'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomizeModal;