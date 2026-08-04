import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/SEO';
import { Leaf, Drumstick } from 'lucide-react';
import ProductCard from '../../components/ui/ProductCard';
import { CustomSortDropdown } from '../../components/ui/CusDropDown';
import {
  ALL_PRODUCTS,
  type CategoryFilter,
  type DietFilter,
  type SortOption
} from '../../data/productsData';

const MenuPage: React.FC = () => {
  // --- STATE ---
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [activeDiet, setActiveDiet] = useState<DietFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // --- FILTER & SORT LOGIC ---
  const filteredAndSortedItems = useMemo(() => {
    let result = ALL_PRODUCTS.filter(item => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchDiet = activeDiet === 'all' || item.dietType === activeDiet;
      return matchCategory && matchDiet;
    });

    // 2. Sort
    result = [...result].sort((a, b) => {
      const parseNum = (str: string) => Number(str.replace(/[^0-9.-]+/g, ""));

      switch (sortBy) {
        case 'price-asc':
          return parseNum(a.price) - parseNum(b.price);
        case 'price-desc':
          return parseNum(b.price) - parseNum(a.price);
        case 'protein-desc':
          return parseNum(b.protein) - parseNum(a.protein);
        case 'calories-asc':
          return parseNum(a.calories) - parseNum(b.calories);
        default:
          return 0;
      }
    });

    return result;
  }, [activeCategory, activeDiet, sortBy]);

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-montserrat text-[#425440]">
      <SEO
        title="Our Menu"
        description="Explore our full menu of healthy power bowls, salads, cold-pressed juices, and more. Filter by diet and sort by protein or calories."
      />

      {/* Header Section */}
      <section className="pt-32 pb-12 px-6 bg-[#425440] text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bosch text-4xl md:text-6xl font-extrabold mb-4"
          >
            Full Menu.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#E3F0D8]/90 text-lg max-w-2xl"
          >
            Filter by your macro goals, dietary preferences, or base ingredient. Prepared fresh daily.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar (Sticky) */}
      <div className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E3F0D8] py-4 px-4 md:px-8 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Category Tabs */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'Oats', label: 'Oats' },
              { id: 'Bowls', label: 'Protein Bowls' },
              { id: 'Salads', label: 'Salads' },
              { id: 'Sandwiches', label: 'Sandwiches' },
              { id: 'Juices', label: 'Juices' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id
                    ? 'bg-[#425440] text-white shadow-md'
                    : 'bg-white text-[#425440] border border-[#E3F0D8] hover:bg-[#E3F0D8]/50'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-3 md:gap-6">
            {/* Diet Toggle */}
            <div className="flex bg-white border border-[#E3F0D8] rounded-full p-1 shadow-sm shrink-0">
              <button
                onClick={() => setActiveDiet('all')}
                className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${activeDiet === 'all' ? 'bg-[#E3F0D8] text-[#425440]' : 'text-gray-500 hover:text-[#425440]'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveDiet('veg')}
                className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${activeDiet === 'veg' ? 'bg-[#166534]/10 text-[#166534]' : 'text-gray-500 hover:text-[#166534]'}`}
              >
                <Leaf size={14} /> Veg
              </button>
              <button
                onClick={() => setActiveDiet('non-veg')}
                className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${activeDiet === 'non-veg' ? 'bg-[#991B1B]/10 text-[#991B1B]' : 'text-gray-500 hover:text-[#991B1B]'}`}
              >
                <Drumstick size={14} /> Non-Veg
              </button>
            </div>

            {/* Sort Dropdown Component */}
            <CustomSortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>

        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 min-h-[50vh]">

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">
            Showing {filteredAndSortedItems.length} {filteredAndSortedItems.length === 1 ? 'Item' : 'Items'}
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                className="h-full"
              >
                {/* 
                  FIX: Pass the entire 'item' object as the 'product' prop, 
                  exactly as the new ProductCard expects it.
                */}
                <ProductCard product={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="text-6xl mb-4">🥗</div>
            <h3 className="font-bosch text-2xl font-bold text-[#425440] mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more options.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveDiet('all');
                setSortBy('default');
              }}
              className="mt-6 px-6 py-2 bg-[#E3F0D8] text-[#425440] font-bold rounded-full hover:bg-[#8FB373] hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default MenuPage;