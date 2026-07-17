import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../../ui/ProductCard'; 
import { menuItems, ALL_PRODUCTS, type MenuData } from '../../../data/productsData'; 

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof MenuData>('Oats');

  // Array of floating background decorations (Use high-res transparent PNGs/WebPs)
  const floatingDecorations = [
    {
      src: "/strawberry.webp", // e.g., A fresh strawberry for the Oats
      alt: "Fresh Strawberry",
      className: "absolute top-[10%] -left-12 w-32 md:w-48 h-32 md:h-48",
      delay: 0.1,
      duration: 5.5,
    },
    {
      src: "/mint.webp", // e.g., A mint leaf or spinach leaf
      alt: "Fresh Leaf",
      className: "absolute top-[25%] -right-10 w-24 md:w-36 h-24 md:h-36",
      delay: 0.3,
      duration: 6,
    },
    {
      src: "/blueberry.webp", // e.g., A blueberry or pomegranate seed
      alt: "Blueberry",
      className: "absolute bottom-[20%] left-[2%] w-20 md:w-28 h-20 md:h-28",
      delay: 0.5,
      duration: 4.5,
    },
    {
      src: "/almonds.webp", // e.g., A roasted almond or cashew
      alt: "Almond",
      className: "absolute bottom-[10%] -right-8 w-28 md:w-40 h-28 md:h-40",
      delay: 0.7,
      duration: 6.2,
    }
  ];

  return (
    <section className="relative py-24 bg-[#F3EFE9] overflow-hidden">
      
      {/* ================= HIGH-CLARITY BACKGROUND EFFECTS ================= */}
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-[120px] opacity-60 pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E3F0D8] blur-[120px] opacity-60 pointer-events-none z-0" />

      {/* Floating Animated Images */}
      {floatingDecorations.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: item.delay, type: "spring", bounce: 0.4 }}
          className={`${item.className} z-0 pointer-events-none hidden md:block`}
        >
          <motion.img
            src={item.src}
            alt={item.alt}
            animate={{ 
              y: [0, -20, 0], 
              rotate: [0, 8, -8, 0] 
            }}
            transition={{ 
              duration: item.duration, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full object-contain drop-shadow-2xl opacity-80"
          />
        </motion.div>
      ))}
      {/* =================================================================== */}

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bosch text-4xl md:text-5xl text-[#425440] font-bold mb-4 drop-shadow-sm">
            Our Signature Menu
          </h2>
          <p className="font-montserrat text-[#7A8275] text-sm md:text-base max-w-xl mx-auto">
            Crafted with organic ingredients, zero preservatives, and built for your healthy lifestyle.
          </p>
        </div>
        
        {/* Redesigned Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div role="tablist" aria-label="Menu Categories" className="inline-flex flex-wrap justify-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-[2rem] border border-[#E3F0D8] shadow-sm">
            {(Object.keys(menuItems) as Array<keyof MenuData>).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab}`}
                id={`tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`relative font-montserrat font-bold text-xs md:text-sm tracking-[0.15em] uppercase px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab 
                    ? "text-white bg-[#425440] shadow-md" 
                    : "text-[#7A8275] hover:text-[#425440] hover:bg-[#F3EFE9]/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area with Responsive Grid */}
        <div className="min-h-[450px]"> 
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} 
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            >
              {ALL_PRODUCTS.filter(item => item.category === activeTab).slice(0, 4).map((item) => (
                <ProductCard 
                  key={item.id} 
                  product={item} 
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View Full Menu Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link to="/menu" aria-label="View our full menu">
            <button className="px-10 py-4 bg-white/50 backdrop-blur-sm border-2 border-[#425440] text-[#425440] rounded-full font-montserrat text-xs md:text-sm font-bold tracking-[0.2em] hover:bg-[#425440] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
              VIEW FULL MENU
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default MenuSection;