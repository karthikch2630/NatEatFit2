import { menuItems, type ProductItem } from './productsData';

export interface SubscriptionPlan {
  id: string;
  name: string;
  tag: string;
  weight: string;
  price: number;
  desc: string;
  longDesc: string;
  image: string;
  category: 'Salads' | 'Bowls' | 'Oats';
  recommended: boolean;
  deliveryDaysPerMonth: number; // e.g. 26 (Mon-Sat)
  items: ProductItem[]; // the rotating variety cycle
  highlights: string[];
}

// ===================== BUILD ROTATION SETS FROM REAL MENU DATA =====================
// Create a safe type casting for fallbacks to avoid ESLint 'any' warnings
const menuFallback = menuItems as unknown as Record<string, ProductItem[] | undefined>;

// Use the fallback record safely
const saladItems = menuItems.Salads || menuFallback['Fresh salads'] || [];

const allBowls = menuItems.Bowls || menuFallback['Protein bowl'] || [];
const brownRiceBowlItems = allBowls.filter((item: ProductItem) =>
  item.name.includes('Brown Rice')
);

const oatsItems = menuItems.Oats || menuFallback['Overnight Oats'] || [];

// Fallback images in case the arrays are completely empty
const fallbackImage = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600";

// ===================== SUBSCRIPTION PLANS =====================
export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'lean-life-salad',
    name: 'Lean Life Salad',
    tag: 'Basic',
    weight: '300g / meal',
    price: 4999,
    desc: 'Perfect for weight management. Fresh, crunchy salads.',
    longDesc:
      'A daily rotation of 10 handcrafted salads — from protein-forward Paneer and Chicken Salads to detoxifying Veg and Beetroot-forward blends. Every meal is portioned, chilled, and delivered fresh to keep your calories in check without sacrificing flavour.',
    image: saladItems[0]?.image || fallbackImage,
    category: 'Salads',
    recommended: false,
    deliveryDaysPerMonth: 26,
    items: saladItems,
    highlights: [
      '26 Salads a month',
      'Calorie-counted meals',
      'Eco-friendly packaging',
      'Skip Sundays',
    ],
  },
  {
    id: 'protein-brown-rice',
    name: 'Protein Brown Rice',
    tag: 'Most Popular',
    weight: '450g / meal',
    price: 5499,
    desc: 'High-protein fuel for the active professional. Balanced macros.',
    longDesc:
      'A 10-day rotation of our signature Brown Rice protein bowls — Butter Chicken, Paneer, Boiled Egg, Grilled Chicken, Palak Paneer, Curd, Mudda Pappu, Rajma, Soya Chunks, and Butter Egg Bhurji. Complex carbs from brown rice plus 30-45g of protein per bowl to fuel your day.',
    image: brownRiceBowlItems[0]?.image || fallbackImage,
    category: 'Bowls',
    recommended: true,
    deliveryDaysPerMonth: 26,
    items: brownRiceBowlItems,
    highlights: [
      '26 Bowls a month',
      '30-45g Protein per bowl',
      'Priority Desk Delivery',
      'Skip Sundays',
    ],
  },
  {
    id: 'overnight-oat-bowls',
    name: 'Overnight Oat Bowls',
    tag: 'Premium',
    weight: '550g / meal',
    price: 5799,
    desc: 'Premium creamy buffalo milk oats. The ultimate healthy start.',
    longDesc:
      'A 10-day rotation of creamy overnight oats layered with seasonal fruit — Strawberry, Banana, Pomegranate, Apple, Kiwi, Green Grapes, Mulberry, Blueberry, plain Oats Meal, and Dragon Fruit. Soaked overnight in buffalo milk with honey, almonds, walnuts, and seeds — ready to eat the moment it arrives.',
    image: oatsItems[0]?.image || fallbackImage,
    category: 'Oats',
    recommended: false,
    deliveryDaysPerMonth: 26,
    items: oatsItems,
    highlights: [
      '26 Oat Bowls a month',
      'Premium exotic fruits',
      'Early morning delivery',
      'Skip Sundays',
    ],
  },
];

export const getPlanById = (id: string): SubscriptionPlan | undefined =>
  subscriptionPlans.find((plan) => plan.id === id);

// ===================== ROTATION CALENDAR BUILDER =====================
export interface CalendarDay {
  dayNumber: number; // 1..deliveryDaysPerMonth
  date: Date;
  item: ProductItem | null; // Allow null in case the items array is completely empty
  cycleDay: number; // 1..items.length, resets after items.length
  isCycleRestart: boolean; // true on cycleDay === 1 after the first cycle
}

// Skips Sundays, cycles through plan.items, wraps around when it runs out
// (so with 10 items, day 11 = item 1 again).
export const buildRotationCalendar = (
  plan: SubscriptionPlan,
  startDate: Date = new Date()
): CalendarDay[] => {
  const calendar: CalendarDay[] = [];
  const cursor = new Date(startDate);
  let deliveryCount = 0;
  let cycleIndex = 0;

  // Safety check: ensure we don't divide by zero if items array is empty
  const itemsLength = plan.items?.length || 1; 

  while (deliveryCount < plan.deliveryDaysPerMonth) {
    if (cursor.getDay() !== 0) { // skip Sundays
      const itemIndex = cycleIndex % itemsLength;
      calendar.push({
        dayNumber: deliveryCount + 1,
        date: new Date(cursor),
        item: plan.items ? plan.items[itemIndex] : null,
        cycleDay: itemIndex + 1,
        isCycleRestart: itemIndex === 0 && cycleIndex >= itemsLength,
      });
      deliveryCount++;
      cycleIndex++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return calendar;
};

// ===================== WHATSAPP SUBSCRIBE ENQUIRY =====================
export const sendSubscriptionEnquiryToWhatsApp = (plan: SubscriptionPlan) => {
  const BUSINESS_NUMBER = '919959425322'; // Updated to your actual WhatsApp number

  let message = `*🥗 SUBSCRIPTION ENQUIRY — NAT EAT FIT*\n\n`;
  message += '```\n';
  message += `Plan:      ${plan.name}\n`;
  message += `Portion:   ${plan.weight}\n`;
  message += `Meals:     ${plan.deliveryDaysPerMonth}/month (Mon-Sat)\n`;
  message += `Price:     Rs.${plan.price}/month\n`;
  message += '```\n\n';
  message += `Hi! I'd like to subscribe to the *${plan.name}* plan. Please share the next steps and payment details. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${BUSINESS_NUMBER}?text=${encodedMessage}`, '_blank');
};

// Quick local check for a diet badge — same keyword logic used in productsData
export const isNonVegItem = (item: ProductItem): boolean => {
  if (!item) return false;
  const text = (item.name + ' ' + item.desc).toLowerCase();
  return (
    text.includes('chicken') ||
    text.includes('egg') ||
    text.includes('mutton') ||
    text.includes('fish')
  );
};