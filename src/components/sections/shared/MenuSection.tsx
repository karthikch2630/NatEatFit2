import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../../ui/ProductCard'; 
import { menuItems, ALL_PRODUCTS, type MenuData } from '../../../data/productsData'; 

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof MenuData>('Oats');

  return (
    <section className="relative py-24 bg-[#F3EFE9] overflow-hidden">
      
      {/* ================= HIGH-CLARITY BACKGROUND EFFECTS ================= */}
      {/* Ambient Glows (CSS-only for instant loading and zero performance hit) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-[120px] opacity-60 pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E3F0D8] blur-[120px] opacity-60 pointer-events-none z-0" />
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
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