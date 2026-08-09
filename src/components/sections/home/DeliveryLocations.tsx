import React from 'react';
import { motion, type Variants } from 'framer-motion';

const DeliveryLocations: React.FC = () => {
  // Reveal animation for cards
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  const locations = [
    {
      title: "Madhapur",
      desc: "Delivering fresh, clean meals right to the heart of Hyderabad's bustling tech and corporate center.",
    },
    {
      title: "HITEC City",
      desc: "Fueling IT professionals with zero-preservative lunches and wholesome dinners straight to your office.",
    },
    {
      title: "Gachibowli",
      desc: "Fast, reliable delivery across the financial district, ensuring you never compromise on your daily nutrition.",
    },
    {
      title: "Kondapur",
      desc: "Enjoy our homely, cooked-from-scratch bowls delivered fresh to your residential complex or workspace.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#FAF9F6] font-montserrat overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-[#E3F0D8] blur-[120px] opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#8FB373]/20 blur-[120px] opacity-40 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* ================= PARENT NODE (LOGO) ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="bg-[#425440] border-[3px] border-[#8FB373] text-[#F3EFE9] px-8 py-4 md:px-12 md:py-5 rounded-full font-bosch text-2xl md:text-4xl font-black shadow-lg relative z-20 flex items-center gap-3"
        >
          <span className="w-3 h-3 md:w-4 md:h-4 bg-[#8FB373] rounded-full animate-pulse"></span>
          NAT EAT FIT
        </motion.div>

        {/* Main Vertical Trunk Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-1 md:w-1.5 h-12 md:h-16 bg-[#8FB373] origin-top relative z-10 rounded-full"
        />

        {/* ================= CHILD NODES CONTAINER ================= */}
        <div className="relative w-full max-w-5xl">
          
          {/* Horizontal Branching Line (Desktop Only) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:block absolute top-0 left-[12.5%] right-[12.5%] h-1.5 bg-[#8FB373] origin-center rounded-full z-0"
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 1.2 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-0 lg:pt-0 relative z-10"
          >
            {locations.map((location, index) => (
              <div key={index} className="flex flex-col items-center">
                
                {/* Vertical Drop Lines connecting to cards (Desktop Only) */}
                <div className="hidden lg:block w-1.5 h-10 bg-[#8FB373] rounded-b-full mb-0 z-0"></div>
                
                {/* Vertical connecting line for Mobile/Tablet (hides the very first one to connect smoothly) */}
                <div className={`lg:hidden w-1 h-8 bg-[#8FB373] rounded-full ${index === 0 ? 'hidden md:block' : 'block'}`}></div>

                {/* Child Node Card (Hero Section Background Colors) */}
                <motion.div 
                  variants={fadeUp} 
                  className="w-full bg-[#425440] p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#8FB373]/30 group text-center flex flex-col items-center relative overflow-hidden"
                >
                  {/* Subtle inner card glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#8FB373]/0 to-[#8FB373]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <h3 className="text-2xl md:text-3xl font-bosch font-bold text-[#8FB373] mb-4 tracking-tight leading-snug">
                    {location.title}
                  </h3>
                  
                  <p className="text-[#E3F0D8] leading-relaxed text-sm md:text-base font-medium opacity-90">
                    {location.desc}
                  </p>
                  
                </motion.div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeliveryLocations;