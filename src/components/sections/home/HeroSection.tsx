import React from 'react';
import { motion, type Variants } from 'framer-motion';
import RotatingBowlCarousel from './RotatingBowlCarousel';
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  // Animation variants for staggered, buttery-smooth reveals

  const navigate = useNavigate();
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };


  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden bg-[#F3EFE9] pt-32 md:pt-24 h-[120vh]">

      {/* Subtle Background Glows (Glassmorphism aesthetics) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E3F0D8] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 translate-x-[-20%] translate-y-[-20%] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F5E6D3] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 translate-x-[20%] translate-y-[20%] pointer-events-none"></div>

      {/* Main Content Container - Changed to justify-start so text stays at the top */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-6xl px-4 text-center">

        {/* Typography Section (MOVED TO THE TOP) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="relative z-20 flex flex-col items-center"
        >
          {/* Headline - Added text-shadow so it remains readable over the image */}
          <motion.h1
            variants={fadeUp}
            className="font-bosch text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] leading-tight text-[#425440] font-bold tracking-wide drop-shadow-md"
          >
            Crave Better.<br className="md:hidden" /> Live Healthier.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="font-montserrat mt-3 text-xs md:text-sm lg:text-base font-bold tracking-[0.2em] text-[#363e33] uppercase drop-shadow-sm"
          >
            Premium Rice Bowls & Cold-Pressed Juices
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-10">
  <button
    onClick={() => navigate("/menu")}
    className="font-montserrat px-8 py-3.5 text-xs md:text-sm font-bold text-white transition-all duration-300 bg-[#4A7A57] rounded-full shadow-[0_8px_20px_rgba(166,201,138,0.4)] hover:bg-[#8FB373] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(166,201,138,0.5)]"
  >
    VIEW MENU
  </button>

  <button
    onClick={() => navigate("/menu")}
    className="font-montserrat px-8 py-3.5 text-xs md:text-sm font-bold text-[#425440] transition-all duration-300 bg-[#F3EFE9]/80 backdrop-blur-md border-[1.5px] border-[#425440] rounded-full hover:bg-[#425440] hover:text-[#F3EFE9]"
  >
    ORDER NOW
  </button>
</motion.div>
        </motion.div>

       
       <RotatingBowlCarousel />
      </div>

      {/* Footer / Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 w-full text-center z-20"
      >
        <p className=" font-montserrat text-[10px] md:text-xs font-semibold tracking-[0.25em] text-[#7A8275] uppercase md:pt-10">
          Freshness Delivered. Craving Satisfied.
        </p>
      </motion.div>

    </section>
  );
};

export default HeroSection;