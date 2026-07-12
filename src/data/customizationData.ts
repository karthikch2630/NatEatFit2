export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface AddOnGroup {
  groupName: string;
  selectionType: 'single' | 'multiple';
  required?: boolean;
  options: AddOn[];
}

// ===================== BOWLS CUSTOMIZATIONS =====================
export const bowlCustomizationGroups: AddOnGroup[] = [
  {
    groupName: 'Base',
    selectionType: 'single',
    required: true,
    options: [
      { id: 'brown-rice', name: 'Brown Rice', price: 0 },
      { id: 'quinoa-rice', name: 'Quinoa Rice', price: 30 },
      { id: 'millet', name: 'Millet', price: 20 },
    ],
  },
  {
    groupName: 'Extra Protein',
    selectionType: 'multiple',
    options: [
      { id: 'chicken', name: 'Grilled Chicken', price: 80 },
      { id: 'paneer', name: 'Paneer', price: 60 },
      { id: 'egg', name: 'Boiled Egg', price: 25 },
      { id: 'soya-chunks', name: 'Soya Chunks', price: 40 },
    ],
  },
  {
    groupName: 'Veggies & Extras',
    selectionType: 'multiple',
    options: [
      { id: 'broccoli', name: 'Broccoli', price: 15 },
      { id: 'salad', name: 'Side Salad', price: 20 },
      { id: 'butter', name: 'Extra Butter', price: 15 },
      { id: 'carrot', name: 'Carrot', price: 10 },
      { id: 'beetroot', name: 'Beetroot', price: 10 },
    ],
  },
];

// ===================== OATS CUSTOMIZATIONS =====================
export const oatsCustomizationGroups: AddOnGroup[] = [
  {
    groupName: 'Milk Choice',
    selectionType: 'single',
    required: true,
    options: [
      { id: 'buffalo-milk', name: 'Buffalo Milk (Standard)', price: 0 },
      { id: 'almond-milk', name: 'Almond Milk (Vegan)', price: 50 },
      { id: 'soy-milk', name: 'Soy Milk (Vegan)', price: 40 },
    ],
  },
  {
    groupName: 'Sweetener',
    selectionType: 'single',
    required: true,
    options: [
      { id: 'honey', name: 'Honey', price: 0 },
      { id: 'maple-syrup', name: 'Maple Syrup', price: 30 },
      { id: 'no-sweetener', name: 'No Sweetener', price: 0 },
    ],
  },
  {
    groupName: 'Extra Toppings',
    selectionType: 'multiple',
    options: [
      { id: 'chia-seeds', name: 'Extra Chia Seeds', price: 20 },
      { id: 'mixed-nuts', name: 'Extra Almonds & Walnuts', price: 35 },
      { id: 'peanut-butter', name: 'Peanut Butter Scoop', price: 30 },
    ],
  },
];

// ===================== SALADS CUSTOMIZATIONS =====================
export const saladCustomizationGroups: AddOnGroup[] = [
  {
    groupName: 'Dressing Choice',
    selectionType: 'single',
    required: true,
    options: [
      { id: 'lemon-herb', name: 'Lemon-Herb', price: 0 },
      { id: 'balsamic', name: 'Balsamic Glaze', price: 0 },
      { id: 'zero-sugar', name: 'Zero-Sugar Vinaigrette', price: 0 },
      { id: 'no-dressing', name: 'No Dressing', price: 0 },
    ],
  },
  {
    groupName: 'Add Protein',
    selectionType: 'multiple',
    options: [
      { id: 'chicken-shreds', name: 'Shredded Chicken', price: 70 },
      { id: 'paneer-cubes', name: 'Grilled Paneer', price: 50 },
      { id: 'boiled-egg', name: 'Boiled Egg', price: 25 },
    ],
  },
  {
    groupName: 'Extra Crunch',
    selectionType: 'multiple',
    options: [
      { id: 'roasted-peanuts', name: 'Roasted Peanuts', price: 20 },
      { id: 'sunflower-seeds', name: 'Sunflower Seeds', price: 20 },
    ],
  },
];

// ===================== JUICES CUSTOMIZATIONS =====================
export const juiceCustomizationGroups: AddOnGroup[] = [
  {
    groupName: 'Sweetness',
    selectionType: 'single',
    required: true,
    options: [
      { id: 'natural', name: 'Natural (No Added Sugar)', price: 0 },
      { id: 'add-honey', name: 'Add Honey', price: 15 },
    ],
  },
  {
    groupName: 'Healthy Boosters',
    selectionType: 'multiple',
    options: [
      { id: 'chia', name: 'Add Chia Seeds', price: 20 },
      { id: 'ginger', name: 'Dash of Ginger', price: 10 },
      { id: 'lemon', name: 'Dash of Lemon', price: 0 },
      { id: 'mint', name: 'Extra Mint Leaves', price: 0 },
    ],
  },
];

// ===================== SANDWICHES CUSTOMIZATIONS =====================
export const sandwichCustomizationGroups: AddOnGroup[] = [
  {
    groupName: 'Bread Choice',
    selectionType: 'single',
    required: true,
    options: [
      { id: 'whole-wheat', name: 'Whole Wheat', price: 0 },
      { id: 'multigrain', name: 'Multigrain', price: 0 },
      { id: 'sourdough', name: 'Sourdough', price: 30 },
    ],
  },
  {
    groupName: 'Spreads',
    selectionType: 'multiple',
    options: [
      { id: 'mint-chutney', name: 'Extra Mint Chutney', price: 0 },
      { id: 'garlic-butter', name: 'Garlic Butter', price: 20 },
      { id: 'light-mayo', name: 'Extra Light Mayo', price: 15 },
    ],
  },
  {
    groupName: 'Extras',
    selectionType: 'multiple',
    options: [
      { id: 'cheese-slice', name: 'Cheese Slice', price: 25 },
      { id: 'extra-filling', name: 'Double Filling (Chicken/Paneer)', price: 60 },
    ],
  },
];

// ===================== PER-PRODUCT OVERRIDES =====================
// Key = product slug (from productsData.slugify). Add entries here for
// items that need custom add-ons instead of the shared category groups.
// Example:
// 'strawberry-oats-bowl': [
//   { groupName: 'Milk Choice', selectionType: 'single', required: true, options: [...] },
// ],
export const productCustomizationOverrides: Record<string, AddOnGroup[]> = {};

// ===================== DYNAMIC RESOLVER =====================
// Looks up product-specific overrides first, falls back to category defaults.
export const getCustomizationsForProduct = (
  category: string,
  slug?: string
): AddOnGroup[] => {
  if (slug && productCustomizationOverrides[slug]) {
    return productCustomizationOverrides[slug];
  }

  switch (category.toLowerCase()) {
    case 'bowls':
      return bowlCustomizationGroups;
    case 'oats':
      return oatsCustomizationGroups;
    case 'salads':
      return saladCustomizationGroups;
    case 'juices':
      return juiceCustomizationGroups;
    case 'sandwiches':
      return sandwichCustomizationGroups;
    default:
      return [];
  }
};