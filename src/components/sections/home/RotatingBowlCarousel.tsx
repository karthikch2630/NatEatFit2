import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

// Dummy data - replace these with your actual image paths!
const BOWL_IMAGES = [
  { id: 1, src: '/overnight-oats-bowl.webp', alt: 'Overnight Oats' },
  { id: 2, src: '/broccoil-salaad.webp', alt: 'Green Detox Bowl' },
  { id: 3, src: '/hero-image-3.webp', alt: 'Butter Chicken Bowl' },
];

const RotatingBowlCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BOWL_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Framer Motion variants for the half-circle rotation
  const carouselVariants: Variants = {
    // The active bowl in the center
    center: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 30,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    // The bowl waiting on the right side
    right: {
      x: '60%',
      y: '20%', // Pushed down to create the half-circle arc
      scale: 0.6,
      rotate: 45, // Spun slightly
      opacity: 0.3,
      zIndex: 10,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    // The bowl exiting on the left side
    left: {
      x: '-60%',
      y: '20%', // Pushed down to create the half-circle arc
      scale: 0.6,
      rotate: -45, // Spun slightly
      opacity: 0.3,
      zIndex: 10,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    // For arrays larger than 3, keep extra images hidden at the bottom
    hidden: {
      x: 0,
      y: '50%',
      scale: 0,
      opacity: 0,
      zIndex: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="absolute top-2/1 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-full max-w-[850px] h-[500px] pointer-events-none mt-10">
      
      {/* Decorative White Glow (Stays fixed behind the active bowl) */}
      <div className="absolute w-[70%] md:w-[50%] aspect-square bg-white/50 backdrop-blur-md rounded-full shadow-[0_0_80px_rgba(255,255,255,0.7)] -z-10"></div>

      {BOWL_IMAGES.map((bowl, index) => {
        // Calculate the relative position of each image compared to the current active index
        const diff = (index - currentIndex + BOWL_IMAGES.length) % BOWL_IMAGES.length;
        
        let position = 'hidden';
        if (diff === 0) position = 'center'; // Active
        else if (diff === 1) position = 'right'; // Next up
        else if (diff === BOWL_IMAGES.length - 1) position = 'left'; // Just finished

        return (
          <motion.img
            key={bowl.id}
            src={bowl.src}
            alt={bowl.alt}
            initial={false}
            animate={position}
            variants={carouselVariants}
            className="absolute w-[70%] md:w-[60%] h-auto object-cover drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)] rounded-full origin-center "
          />
        );
      })}
    </div>
  );
};

export default RotatingBowlCarousel;