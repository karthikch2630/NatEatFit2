import React from 'react';
import { motion, type Variants, useScroll, useTransform } from 'framer-motion';
import RotatingBowlCarousel from './RotatingBowlCarousel';
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  // --- SCROLL PARALLAX SETUP ---
  const { scrollY } = useScroll();
  
  // 1. Left Juice: Moves up and tilts slightly left on scroll
  const yLeftJuice = useTransform(scrollY, [0, 1000], [0, -250]); 
  const rotateLeftJuice = useTransform(scrollY, [0, 1000], [0, -20]); 
  
  // 2. Right Juice: Moves up faster (more depth) and tilts right
  const yRightJuice = useTransform(scrollY, [0, 1000], [0, -400]);
  const rotateRightJuice = useTransform(scrollY, [0, 1000], [0, 35]);
  
  // 3. Sandwich: Moves up slower and scales up slightly as if getting closer
  // const ySandwich = useTransform(scrollY, [0, 1000], [0, -150]);
  // const rotateSandwich = useTransform(scrollY, [0, 1000], [0, -10]);
  // const scaleSandwich = useTransform(scrollY, [0, 1000], [1, 1.15]);

  // --- REVEAL ANIMATION ---
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  // --- CONTINUOUS FLOATING ANIMATIONS ---
  const floatingLeft: Variants = {
    animate: {
      y: [0, -20, 0],
      rotate: [-3, 4, -3],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const floatingRight: Variants = {
    animate: {
      y: [0, 20, 0],
      rotate: [3, -5, 3],
      transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
    },
  };

  // const floatingBottom: Variants = {
  //   animate: {
  //     y: [0, -15, 0],
  //     rotate: [-5, 2, -5],
  //     transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  //   },
  // };

  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden bg-[#F3EFE9] pt-32 md:pt-24 h-[120vh]">

      {/* Subtle Background Glows (Glassmorphism aesthetics) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E3F0D8] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 translate-x-[-20%] translate-y-[-20%] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F5E6D3] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 translate-x-[20%] translate-y-[20%] pointer-events-none"></div>

      {/* ================= ANIMATED FLOATING ITEMS (SCROLL + FLOAT) ================= */}
      
      {/* 1. Left Juice Glass */}
      <motion.div 
        className="absolute left-[5%] top-[15%] hidden lg:block z-10 pointer-events-none"
        style={{ y: yLeftJuice, rotate: rotateLeftJuice }}
      >
        <motion.img
          src="/juice2.webp"
          alt="Green Cold Pressed Juice"
          variants={floatingLeft}
          animate="animate"
          className="w-40 xl:w-56 h-40 xl:h-56 object-contain drop-shadow-2xl opacity-90"
        />
      </motion.div>

      {/* 2. Right Juice Glass */}
      <motion.div 
        className="absolute right-[5%] top-[25%] hidden lg:block z-10 pointer-events-none"
        style={{ y: yRightJuice, rotate: rotateRightJuice }}
      >
        <motion.img
          src="/strawberry-juice.webp"
          alt="Strawberry Cold Pressed Juice"
          variants={floatingRight}
          animate="animate"
          className="w-48 xl:w-64 h-48 xl:h-64 object-contain drop-shadow-2xl opacity-90"
        />
      </motion.div>

      {/* 3. Sandwich (Bottom Left) */}
      {/* <motion.div 
        className="absolute left-[8%] top-[60%] hidden lg:block z-10 pointer-events-none"
        style={{ y: ySandwich, rotate: rotateSandwich, scale: scaleSandwich }}
      >
        <motion.img
          src="/sandwich.webp" 
          alt="Healthy Sandwich"
          variants={floatingBottom}
          animate="animate"
          className="w-36 xl:w-48 h-36 xl:h-48 object-contain drop-shadow-2xl opacity-90"
        />
      </motion.div> */}
      {/* ======================================================================== */}

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-start w-full max-w-6xl px-4 text-center">

        {/* Typography Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="relative z-20 flex flex-col items-center"
        >
          {/* Headline */}
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
              aria-label="View our full menu"
              className="font-montserrat px-8 py-3.5 text-xs md:text-sm font-bold text-white transition-all duration-300 bg-[#4A7A57] rounded-full shadow-[0_8px_20px_rgba(166,201,138,0.4)] hover:bg-[#8FB373] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(166,201,138,0.5)]"
            >
              VIEW MENU
            </button>

            <button
              onClick={() => navigate("/menu")}
              aria-label="Order food now"
              className="font-montserrat px-8 py-3.5 text-xs md:text-sm font-bold text-[#425440] transition-all duration-300 bg-[#F3EFE9]/80 backdrop-blur-md border-[1.5px] border-[#425440] rounded-full hover:bg-[#425440] hover:text-[#F3EFE9]"
            >
              ORDER NOW
            </button>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <RotatingBowlCarousel />
      </div>

      {/* Footer / Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 w-full text-center z-20"
      >
        <p className="font-montserrat text-[10px] md:text-xs font-semibold tracking-[0.25em] text-[#7A8275] uppercase md:pt-10">
          Freshness Delivered. Craving Satisfied.
        </p>
      </motion.div>

    </section>
  );
};

export default HeroSection;