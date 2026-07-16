import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

// Replace with your actual business WhatsApp number (include country code without +)
const WHATSAPP_NUMBER = "919959425322";

const SubscriptionSection: React.FC = () => {
  // Enhanced plan data
  const plans = [
    {
      name: "Lean Life Salad",
      weight: "350g",
      price: "4,999",
      desc: "Perfect for weight management. Fresh, crunchy salads.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
      features: [
        "26 Salads a month",
        "Calorie-counted meals",
        "Eco-friendly packaging",
        "Skip Sundays"
      ],
      tag: "Basic",
      recommended: false
    },
    {
      name: "Protein Brown Rice",
      weight: "500g",
      price: "5,499",
      desc: "High-protein fuel for the active professional. Balanced macros.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
      features: [
        "26 Bowls a month",
        "40g+ Protein per bowl",
        "Priority Desk Delivery",
        "Skip Sundays"
      ],
      tag: "Most Popular",
      recommended: true
    },
    {
      name: "Overnight Oat Bowls",
      weight: "550g",
      price: "5,799",
      desc: "Premium creamy buffalo milk oats. The ultimate healthy start.",
      image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=600&auto=format&fit=crop",
      features: [
        "26 Oat Bowls a month",
        "Premium exotic fruits",
        "Early morning delivery",
        "Skip Sundays"
      ],
      tag: "Premium",
      recommended: false
    }
  ];

  type PlanType = typeof plans[0];
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  // Handlers for WhatsApp redirects
  const handleSampleBowlClick = () => {
    const msg = encodeURIComponent("Hi! I'm interested in trying a sample bowl. Could you share the options? (Salads ₹200, Meals ₹250, Oats ₹199-299).");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleSubscribeWhatsApp = (plan: PlanType) => {
    const msg = encodeURIComponent(`Hi! I would like to subscribe to the ${plan.name} plan at ₹${plan.price}/month. Please guide me through the setup.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSelectedPlan(null);
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#354333] to-[#425440] overflow-hidden">
      
      {/* Subtle Background Glow Animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#8FB373] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div 
            onClick={handleSampleBowlClick}
            whileHover={{ scale: 1.05 }}
            className="inline-block cursor-pointer px-6 py-2 mb-6 bg-[#8FB373]/20 border border-[#8FB373]/50 text-[#E3F0D8] font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(143,179,115,0.3)] transition-all hover:bg-[#8FB373] hover:text-[#425440]"
          >
            🌟 Try a Sample Bowl for just ₹250
          </motion.div>
          <h2 className="font-bosch text-4xl md:text-6xl text-white font-extrabold mb-6 tracking-tight">
            Healthy Living, <span className="text-[#8FB373]">Delivered.</span>
          </h2>
          <p className="font-montserrat text-[#E3F0D8]/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Customized meal plans delivered to your home or office across Hyderabad. 
            Freshness guaranteed, 26 days a month.
          </p>
        </motion.div>

        {/* Plans Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 md:gap-10 items-center"
        >
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 }
              }}
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
              
              <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative group shrink-0">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  ₹{plan.price}
                </span>
                <span className={`text-sm ml-2 font-medium ${plan.recommended ? 'text-gray-500' : 'text-[#E3F0D8]/60'}`}>
                  / month
                </span>
              </div>

              <div className={`text-xs font-montserrat font-bold uppercase tracking-widest mb-8 inline-block px-3 py-1 rounded-md w-fit ${
                plan.recommended ? 'bg-[#8FB373]/10 text-[#6f8f57]' : 'bg-black/20 text-[#8FB373]'
              }`}>
                Portion: {plan.weight}
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon recommended={plan.recommended} />
                    <span className={`text-sm font-medium ${plan.recommended ? 'text-gray-700' : 'text-[#E3F0D8]/90'} ml-2`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 mt-auto ${
                  plan.recommended 
                    ? 'bg-[#354333] text-white hover:bg-[#8FB373] hover:shadow-lg' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#354333]'
                }`}
              >
                SUBSCRIBE NOW
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Footer Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#E3F0D8]/50 text-sm mt-16 font-montserrat flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Hyderabad service area only. Deliveries scheduled Monday–Saturday.
        </motion.p>
      </div>

      {/* Subscription Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-montserrat">
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#FDFBF7] rounded-[2rem] shadow-2xl overflow-hidden z-10 border border-[#EBE8DE]"
            >
              <div className="p-8">
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="absolute top-6 right-6 p-2 bg-[#F3F2EE] text-[#8C877D] rounded-full hover:bg-[#EBE8DE] hover:text-[#1F452A] transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="w-16 h-16 bg-[#E8F3E8] rounded-full flex items-center justify-center mb-6 text-[#2A5C38]">
                  <MessageCircle size={32} />
                </div>
                
                <h3 className="text-2xl font-black text-[#1F452A] font-bosch mb-2">
                  You chose {selectedPlan.name}
                </h3>
                
                <p className="text-[#5C5950] mb-6 leading-relaxed">
                  Every subscription plan guarantees <strong>10 unique varieties rotating daily</strong>. You'll enjoy a fresh, exciting meal every day, ensuring you never get bored while hitting your health goals!
                </p>

                <div className="bg-[#F9F8F4] p-4 rounded-xl mb-8 border border-[#EBE8DE]">
                  <p className="text-sm text-[#8C877D] mb-1 font-bold uppercase tracking-widest">Pricing Setup</p>
                  <p className="text-xl font-black text-[#2A5C38]">₹{selectedPlan.price} <span className="text-sm font-medium text-[#5C5950]">/ 26 Days</span></p>
                </div>

                <button
                  onClick={() => handleSubscribeWhatsApp(selectedPlan)}
                  className="w-full py-4 bg-[#25D366] text-white font-bold text-lg rounded-full hover:bg-[#1DA851] transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={24} />
                  Continue on WhatsApp
                </button>
                <p className="text-center text-xs text-[#8C877D] mt-4">
                  Our team will finalize your address and delivery slots.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SubscriptionSection;