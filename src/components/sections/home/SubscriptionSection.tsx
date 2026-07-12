import React from 'react';
import { motion, type Variants } from 'framer-motion';

const SubscriptionSection: React.FC = () => {
  // Enhanced plan data with a feature list and image URLs for better conversion
  const plans = [
    {
      name: "Lean Life Salad",
      weight: "350g",
      price: "4,999",
      desc: "Perfect for weight management. Fresh, crunchy salads.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop", // Placeholder Salad
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
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop", // Placeholder Protein Bowl
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
      image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=600&auto=format&fit=crop", // Placeholder Oats
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
              
              {/* Added Image Container */}
              <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative group shrink-0">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle overlay gradient to ensure text readability if needed, or purely decorative */}
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
    </section>
  );
};

export default SubscriptionSection;