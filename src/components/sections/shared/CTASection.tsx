import React from 'react';
import { motion } from 'framer-motion';

const SleekCTABanner: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 bg-[#f4f7f2] flex items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-5xl mx-auto rounded-[24px] bg-[#1a2119] shadow-[0_10px_40px_rgba(26,33,25,0.3)] overflow-hidden"
      >
        
        {/* Background Image Container */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-3/5 h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop" 
            alt="Fresh healthy salad" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay: 
              On mobile: Darkens the whole image so text is readable.
              On desktop: Creates a smooth fade from the dark left side into the image. 
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2119] via-[#1a2119]/90 sm:via-[#1a2119]/50 to-[#1a2119]/40 sm:to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full sm:w-2/3 p-8 sm:p-12 md:p-16 flex flex-col justify-center min-h-[280px] sm:min-h-[320px]">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-[#8FB373] font-bold text-xs uppercase tracking-widest mb-3 block">
              Start Your Journey
            </span>
            
            <h2 className="font-bosch text-3xl sm:text-4xl md:text-5xl text-white font-extrabold mb-4 tracking-tight leading-tight">
              Eat better, <br className="hidden sm:block" />
              <span className="text-white/90 font-light">effortlessly.</span>
            </h2>
            
            <p className="font-montserrat text-[#E3F0D8]/70 text-sm sm:text-base mb-8 max-w-sm leading-relaxed">
              Chef-crafted, macro-balanced meals delivered fresh to your door across Hyderabad.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3 sm:px-8 sm:py-3.5 bg-[#8FB373] text-[#1a2119] rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95">
                Claim ₹500 Off
              </button>
              
              <button className="px-6 py-3 sm:px-8 sm:py-3.5 bg-transparent border border-white/20 text-white rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300">
                Menu
              </button>
            </div>
          </motion.div>
          
        </div>
      </motion.div>

    </section>
  );
};

export default SleekCTABanner;