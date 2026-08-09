import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Replace these with your actual vertical WhatsApp screenshot imports
const topScreenshots = [
  { id: 1, image: "/testimonials/review-1.jpeg" },
  { id: 2, image: "/testimonials/review-2.png" },
  { id: 3, image: "/testimonials/review-3.png" },
  { id: 4, image: "/testimonials/review-4.png" },
];

const HomepageTestimonials: React.FC = () => {
  // Animation variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-24 px-6 bg-[#E3F0D8]/30 font-montserrat overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8FB373]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#425440]/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Area with Title and CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#425440] font-bold text-sm mb-6 shadow-sm border border-[#E3F0D8]">
              <span className="flex h-2 w-2 rounded-full bg-[#8FB373]"></span>
              Real Customer Chats
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-bosch text-4xl md:text-5xl font-bold text-[#425440] leading-tight">
              Don't just take <br className="hidden md:block" /> our word for it.
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="shrink-0">
            {/* Update this anchor tag to a <Link> component if using React Router or Next.js */}
            <a 
              href="/testimonials" 
              className="inline-flex items-center justify-center gap-2 bg-[#425440] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8FB373] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View All Reviews
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* 4-Column Grid optimized for vertical screenshots */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {topScreenshots.map((screenshot) => (
            <motion.div 
              key={screenshot.id}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-[3px] md:border-[4px] border-white bg-gray-50 aspect-[9/16] group"
            >
              <img 
                src={screenshot.image} 
                alt="Customer Review Chat" 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Optional: Subtle gradient overlay at the bottom to make it look polished */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HomepageTestimonials;