import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Droplet, Coffee, ChefHat, Salad, ChevronRight } from 'lucide-react';
import SEO from '../../components/SEO';

// Import your data and types
import { ALL_PRODUCTS } from '../../data/productsData';
import ProductCard from '../../components/ui/ProductCard'; 

const CATEGORY_META: Record<string, { title: string; desc: string; icon: React.ElementType }> = {
  bowls: { 
    title: 'Signature Bowls', 
    desc: 'Nutrient-packed, chef-crafted meals for your daily power.', 
    icon: Leaf 
  },
  juices: { 
    title: 'Cold-Pressed Juices', 
    desc: '100% natural, no added sugar. Pure liquid energy.', 
    icon: Droplet 
  },
  salads: { 
    title: 'Fresh Salads', 
    desc: 'Crisp greens and vibrant veggies tossed in in-house dressings.', 
    icon: Salad 
  },
  oats: { 
    title: 'Overnight Oats', 
    desc: 'The perfect healthy start to your morning.', 
    icon: Coffee 
  },
  sandwiches: { 
    title: 'Wholesome Sandwiches', 
    desc: 'Hearty, filling, and made with freshly baked multigrain bread.', 
    icon: ChefHat 
  },
};

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const safeCategory = category?.toLowerCase() || '';

  // 1. Filter state for Veg / Non-Veg
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  
  // 2. Track the previous category to know when the URL changes
  const [prevCategory, setPrevCategory] = useState(safeCategory);

  // 3. REACT BEST PRACTICE: Reset state during render if URL changes
  // This prevents the cascading double-render caused by setting state inside useEffect
  if (safeCategory !== prevCategory) {
    setPrevCategory(safeCategory);
    setDietFilter('all');
  }

  // 4. Side-effects like manipulating the DOM (scrolling) belong in useEffect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [safeCategory]);

  // Validate Category
  if (!CATEGORY_META[safeCategory]) {
    return <Navigate to="/menu" replace />;
  }

  const meta = CATEGORY_META[safeCategory];
  const Icon = meta.icon;

  // Filter Products Data
  const categoryProducts = ALL_PRODUCTS.filter(
    (product) => product.category.toLowerCase() === safeCategory
  );

  const displayedProducts = categoryProducts.filter((product) => {
    if (dietFilter === 'all') return true;
    return product.dietType === dietFilter;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-montserrat">
      <SEO 
        title={meta.title} 
        description={meta.desc}
        keywords={`${safeCategory}, Nat Eat Fit, healthy ${safeCategory}`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-[#8C877D] mb-8">
          <Link to="/" className="hover:text-[#2A5C38] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/menu" className="hover:text-[#2A5C38] transition-colors">Menu</Link>
          <ChevronRight size={14} />
          <span className="text-[#2A5C38] capitalize">{safeCategory}</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-[#E8F3E8] text-[#2A5C38] rounded-2xl">
                <Icon size={24} />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#1F452A] font-bosch tracking-tight">
                {meta.title}
              </h1>
            </div>
            <p className="text-[#5C5950] font-medium max-w-xl text-sm md:text-base">
              {meta.desc}
            </p>
          </div>

          {/* Diet Filter Toggle (Only show if category has items to filter) */}
          {categoryProducts.length > 0 && (
            <div className="flex items-center p-1 bg-white border border-[#EBE8DE] rounded-full shadow-sm w-fit">
              {(['all', 'veg', 'non-veg'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setDietFilter(tab)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-colors duration-300 ${
                    dietFilter === tab
                      ? tab === 'non-veg' ? 'text-[#D94545]' : 'text-[#2A5C38]'
                      : 'text-[#8C877D] hover:text-[#5C5950]'
                  }`}
                >
                  {dietFilter === tab && (
                    <motion.div
                      layoutId="diet-filter-pill"
                      className={`absolute inset-0 rounded-full shadow-sm ${
                        tab === 'non-veg' ? 'bg-[#FFF0F0]' : 'bg-[#E8F3E8]'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab === 'veg' && <Leaf size={12} />}
                    {tab === 'non-veg' && <ChefHat size={12} />}
                    {tab === 'all' ? 'All' : tab === 'veg' ? 'Veg' : 'Non-Veg'}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {displayedProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 bg-[#F3F2EE] text-[#8C877D] rounded-full flex items-center justify-center mb-4">
              <Icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#2A5C38] mb-2">No items found</h3>
            <p className="text-[#5C5950] text-sm max-w-md">
              We couldn't find any {dietFilter !== 'all' ? dietFilter : ''} items in this category right now.
            </p>
            <button 
              onClick={() => setDietFilter('all')}
              className="mt-6 text-sm font-bold text-[#2A5C38] hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default CategoryPage;