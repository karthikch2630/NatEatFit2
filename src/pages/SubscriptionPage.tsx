import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, Info, X, Leaf, Flame, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

// Assuming you export subscriptionPlans from here
import { subscriptionPlans } from '../data/subscriptionData';
// Assuming you export the menu data provided in your prompt from here
import { menuItems, type ProductItem } from '../data/productsData';

// Replace this with your actual business WhatsApp number (include country code without +)
// Example for India: 919876543210
const WHATSAPP_NUMBER = "919959425322"; 

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CheckIcon = ({ recommended }: { recommended: boolean }) => (
  <svg
    className={`w-5 h-5 shrink-0 mt-0.5 ${recommended ? 'text-[#8FB373]' : 'text-[#8FB373]/80'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

// Derive the exact type from your actual subscription plans data to satisfy ESLint
type SubscriptionPlanType = typeof subscriptionPlans[0];

const SubscriptionPage: React.FC = () => {
  // Modal State - Fixed the ESLint 'any' error by using the inferred type
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanType | null>(null);
  const [activeTab, setActiveTab] = useState<'Bowls' | 'Salads' | 'Oats'>('Bowls');

  // Helper to get active menu items for the modal
  const activeMenuItems: ProductItem[] = menuItems[activeTab] || [];

  // WhatsApp Redirect Handler
  const handleWhatsAppOrder = (itemName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in trying a sample bowl of the ${itemName}. Could you help me place an order?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#354333] to-[#425440] font-montserrat pt-32 pb-24">
      <SEO 
        title="Meal Subscriptions" 
        description="Choose a healthy meal subscription plan that fits your lifestyle. Enjoy fresh, daily rotating power bowls and salads delivered in Hyderabad." 
      />
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 mb-6 bg-[#8FB373]/20 border border-[#8FB373]/50 text-[#E3F0D8] font-bold text-xs uppercase tracking-widest rounded-full">
            🌟 Flexible Plans • Free Delivery
          </div>
          <h1 className="font-bosch text-4xl md:text-6xl text-white font-extrabold mb-6 tracking-tight">
            Healthy Living, <span className="text-[#8FB373]">Delivered.</span>
          </h1>
          <p className="text-[#E3F0D8]/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Every plan rotates through handcrafted varieties — a fresh meal
            every day, then the cycle repeats. Delivered across
            Hyderabad, Monday to Saturday.
          </p>
        </motion.div>

        {/* --- TRY A SAMPLE BOWL SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bosch font-bold text-white mb-3">Not ready to commit?</h2>
            <p className="text-[#E3F0D8]/80">Try a sample bowl first to taste the magic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Salad Sample */}
            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center text-center hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-[#8FB373]/20 rounded-full flex items-center justify-center mb-4 text-[#8FB373]">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-bosch">Lean Life Salad</h3>
              <p className="text-[#E3F0D8]/70 text-sm mb-6">Crisp, fresh, low-calorie greens.</p>
              <div className="mt-auto flex flex-col items-center w-full">
                <span className="text-2xl font-black text-[#8FB373] mb-4">₹200</span>
                <button 
                  onClick={() => handleWhatsAppOrder('Lean Life Salad')}
                  className="px-6 py-2.5 bg-white text-[#354333] font-bold rounded-full text-sm hover:bg-[#E3F0D8] transition-colors w-full"
                >
                  Order Salad
                </button>
              </div>
            </div>

            {/* Meal Sample */}
            <div className="bg-[#8FB373] border border-[#a2c984] rounded-3xl p-6 shadow-2xl shadow-[#8FB373]/20 flex flex-col items-center text-center scale-105 z-10">
              <div className="absolute -top-3 bg-white text-[#354333] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                <Flame size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1f291e] mb-2 font-bosch">High Protein Meal</h3>
              <p className="text-[#1f291e]/80 text-sm mb-6">Quinoa or Brown Rice packed with protein.</p>
              <div className="mt-auto flex flex-col items-center w-full">
                <span className="text-3xl font-black text-[#1f291e] mb-4">₹250</span>
                <button 
                  onClick={() => handleWhatsAppOrder('High Protein Meal')}
                  className="px-6 py-3 bg-[#1f291e] text-white font-bold rounded-full text-sm hover:bg-black transition-colors w-full shadow-lg"
                >
                  Order Meal
                </button>
              </div>
            </div>

            {/* Oats Sample */}
            <div className="bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center text-center hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-[#8FB373]/20 rounded-full flex items-center justify-center mb-4 text-[#8FB373]">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-bosch">Overnight Oats</h3>
              <p className="text-[#E3F0D8]/70 text-sm mb-6">Creamy oats layered with premium fruits & nuts.</p>
              <div className="mt-auto flex flex-col items-center w-full">
                <span className="text-[11px] uppercase tracking-widest text-[#E3F0D8]/50 font-bold mb-1">Depends on fruit</span>
                <span className="text-xl font-black text-[#8FB373] mb-4">₹249 - ₹299</span>
                <button 
                  onClick={() => handleWhatsAppOrder('Overnight Oats')}
                  className="px-6 py-2.5 bg-white text-[#354333] font-bold rounded-full text-sm hover:bg-[#E3F0D8] transition-colors w-full"
                >
                  Order Oats
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- SUBSCRIPTION PLANS GRID --- */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bosch font-bold text-white mb-3">Ready to subscribe?</h2>
          <p className="text-[#E3F0D8]/80">Choose a plan that fits your lifestyle.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8 md:gap-10 items-center"
        >
          {subscriptionPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative p-8 rounded-[2rem] border backdrop-blur-sm transition-shadow duration-300 flex flex-col ${
                plan.recommended
                  ? 'bg-white border-[#8FB373] shadow-2xl shadow-[#8FB373]/20 scale-100 lg:scale-105 z-10'
                  : 'bg-[#4A5D48]/60 border-[#596D56]/50 shadow-xl hover:bg-[#4A5D48]/80'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7a9a61] to-[#8FB373] text-white px-6 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg z-20">
                  {plan.tag}
                </div>
              )}

              <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative group shrink-0 bg-black/10">
                {plan.image && (
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="mb-6">
                <h3 className={`font-bosch text-2xl font-bold mb-2 ${plan.recommended ? 'text-[#354333]' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.recommended ? 'text-gray-600' : 'text-[#E3F0D8]/70'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className={`text-5xl font-extrabold tracking-tight ${plan.recommended ? 'text-[#354333]' : 'text-white'}`}>
                  ₹{plan.price.toLocaleString('en-IN')}
                </span>
                <span className={`text-sm ml-2 font-medium ${plan.recommended ? 'text-gray-500' : 'text-[#E3F0D8]/60'}`}>
                  / month
                </span>
              </div>

              <div className={`text-xs font-bold uppercase tracking-widest mb-8 inline-block px-3 py-1 rounded-md w-fit ${
                plan.recommended ? 'bg-[#8FB373]/10 text-[#6f8f57]' : 'bg-black/20 text-[#8FB373]'
              }`}>
                Portion: {plan.weight}
              </div>

              <ul className="space-y-4 mb-6 grow">
                {plan.highlights.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon recommended={plan.recommended} />
                    <span className={`text-sm font-medium ${plan.recommended ? 'text-gray-700' : 'text-[#E3F0D8]/90'} ml-2`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`flex items-center gap-1.5 text-xs font-semibold mb-6 ${plan.recommended ? 'text-gray-500' : 'text-[#E3F0D8]/60'}`}>
                <Info size={14} />
                {plan.items?.length || 10}-day flavour rotation
              </div>

              {/* MODAL TRIGGER BUTTON */}
              <button
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 mt-auto flex items-center justify-center gap-2 ${
                  plan.recommended
                    ? 'bg-[#354333] text-white hover:bg-[#8FB373] hover:shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#354333]'
                }`}
              >
                View Plan Varieties <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[#E3F0D8]/50 text-sm mt-16 flex items-center justify-center gap-2">
          <Info size={16} />
          Hyderabad service area only. Deliveries scheduled Monday–Saturday.
        </p>
      </div>

      {/* --- MENU VARIETIES MODAL --- */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mt-16 md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[85vh] bg-[#FDFBF7] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden z-10 border border-[#EBE8DE]"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 md:px-8 md:py-6 border-b border-[#EBE8DE] flex items-center justify-between bg-white shrink-0">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8FB373] mb-1 block">
                    {selectedPlan.name}
                  </span>
                  <h2 className="text-2xl font-black text-[#1F452A] font-bosch">
                    Menu Varieties
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 bg-[#F3F2EE] text-[#8C877D] rounded-full hover:bg-[#EBE8DE] hover:text-[#1F452A] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Category Tabs */}
              <div className="flex px-6 md:px-8 border-b border-[#EBE8DE] bg-[#F9F8F4] overflow-x-auto hide-scrollbar shrink-0">
                {(['Bowls', 'Salads', 'Oats'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-bold tracking-wide transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? 'text-[#2A5C38] border-b-2 border-[#2A5C38]'
                        : 'text-[#8C877D] hover:text-[#5C5950]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Modal Scrollable Content (Grid of Items) */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#FDFBF7]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeMenuItems.map((item, idx) => (
                    <div key={idx} className="bg-white border border-[#EBE8DE] rounded-2xl p-4 flex flex-col hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F3F2EE] mb-4 relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image fails to load
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600';
                          }}
                        />
                      </div>
                      <h3 className="font-bosch font-bold text-[#1F452A] text-lg leading-tight mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#8C877D] line-clamp-2 mb-4 grow">
                        {item.desc}
                      </p>
                      
                      {/* Macros Mini-Pills */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-[10px] font-bold bg-[#F3F2EE] text-[#5C5950] px-2 py-1 rounded">
                          {item.protein} P
                        </span>
                        <span className="text-[10px] font-bold bg-[#F3F2EE] text-[#5C5950] px-2 py-1 rounded">
                          {item.calories} Cal
                        </span>
                        <span className="text-[10px] font-bold bg-[#F3F2EE] text-[#5C5950] px-2 py-1 rounded">
                          {item.weight}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="p-6 border-t border-[#EBE8DE] bg-white shrink-0">
                <p className="text-xs text-center text-[#8C877D]">
                  Items rotate daily. Your subscription guarantees a fresh variety from the selected category every delivery day.
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubscriptionPage;