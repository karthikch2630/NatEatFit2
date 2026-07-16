import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { getCustomizationsForProduct } from '../../data/customizationData';
import { type MenuDetailItem } from '../../data/productsData';

interface ProductCardProps {
  product: MenuDetailItem;
}

const parsePrice = (priceStr: string | number): number => {
  if (typeof priceStr === 'number') return priceStr;
  return Number(priceStr.replace(/[^\d.]/g, '')) || 0;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, slug, category, name, desc, price, image, protein, calories, weight } = product;
  
  const addItem = useCartStore((state) => state.addItem);
  
  // Check if this product has any customization options
const customizations = getCustomizationsForProduct(category, slug);
  const hasCustomizations = customizations && customizations.length > 0;

  const handleDirectAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Stop the Link from navigating
    
    const numericPrice = parsePrice(price);
    addItem({
      productId: id,
      slug: slug,
      name: name,
      basePrice: numericPrice,
      unitPrice: numericPrice,
      image: image,
      category: category,
      addOns: [],
    });
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="h-full"
    >
      <Link 
        to={`/menu/${category.toLowerCase()}/${slug}`}
        className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-[#F0EFE9] hover:shadow-md hover:border-[#D1E6D1] transition-all duration-300 h-full"
      >
        {/* --- Image Section --- */}
        <div className="relative aspect-[4/3] w-full bg-[#F9F8F4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Subtle Weight Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <span className="text-[10px] font-bold tracking-widest text-[#5C5950] uppercase">
              {weight}
            </span>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="p-5 flex flex-col flex-grow bg-white">
          
          {/* Title & Price Row */}
          <div className="flex justify-between items-start gap-3 mb-1">
            <h3 className="text-lg font-bold text-[#1F452A] leading-tight line-clamp-2">
              {name}
            </h3>
            <span className="text-base font-black text-[#2A5C38] whitespace-nowrap">
              {price}
            </span>
          </div>

          {/* Clean Typography Macros (No Icons) */}
          <div className="text-[11px] font-bold text-[#8C877D] uppercase tracking-wide mb-3">
            {calories} kcal <span className="mx-1 opacity-50">•</span> {protein} Pro
          </div>

          {/* Description */}
          <p className="text-sm text-[#7A8275] leading-relaxed line-clamp-2 mb-6 flex-grow">
            {desc}
          </p>

          {/* --- Minimalist Action Button --- */}
          {hasCustomizations ? (
            <div 
              aria-label={`Customize ${name}`}
              className="w-full py-3 text-center border border-[#EBE8DE] text-[#5C5950] rounded-xl text-sm font-bold group-hover:bg-[#425440] group-hover:border-[#425440] group-hover:text-white transition-all duration-300"
            >
              Customize
            </div>
          ) : (
            <button 
              onClick={handleDirectAdd}
              aria-label={`Add ${name} to cart`}
              className="w-full py-3 text-center border border-[#EBE8DE] text-[#5C5950] rounded-xl text-sm font-bold group-hover:bg-[#425440] group-hover:border-[#425440] group-hover:text-white transition-all duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;