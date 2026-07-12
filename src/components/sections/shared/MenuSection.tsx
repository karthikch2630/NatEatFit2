import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../../ui/ProductCard'; 
import { menuItems, ALL_PRODUCTS, type MenuData } from '../../../data/productsData'; 

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof MenuData>('Oats');

  return (
    <section className="py-24 bg-[#F3EFE9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bosch text-4xl md:text-5xl text-[#425440] font-bold mb-4">
            Our Signature Menu
          </h2>
          <p className="font-montserrat text-[#7A8275] text-sm md:text-base max-w-xl mx-auto">
            Crafted with organic ingredients, zero preservatives, and built for your healthy lifestyle.
          </p>
        </div>
        
        {/* Redesigned Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-[2rem] border border-[#E3F0D8] shadow-sm">
            {(Object.keys(menuItems) as Array<keyof MenuData>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative font-montserrat font-bold text-xs md:text-sm tracking-[0.15em] uppercase px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab 
                    ? "text-white bg-[#425440] shadow-md" 
                    : "text-[#7A8275] hover:text-[#425440] hover:bg-[#F3EFE9]/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area with New Responsive Grid */}
        <div className="min-h-[450px]"> 
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            >
              {ALL_PRODUCTS.filter(item => item.category === activeTab).slice(0, 4).map((item) => (
                // FIX: Pass the single 'product' object instead of individual props
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
          <Link to="/menu">
            <button className="px-10 py-4 bg-transparent border-2 border-[#425440] text-[#425440] rounded-full font-montserrat text-xs md:text-sm font-bold tracking-[0.2em] hover:bg-[#425440] hover:text-white transition-colors duration-300">
              VIEW FULL MENU
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default MenuSection;