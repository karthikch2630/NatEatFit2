import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';

// Define your SortOptions type if it's not already imported
type SortOption = 'default' | 'price-asc' | 'price-desc' | 'protein-desc' | 'calories-asc';

interface CustomSortDropdownProps {
  sortBy: SortOption;
  setSortBy: (val: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'Sort By' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'protein-desc', label: 'Protein: High to Low' },
  { value: 'calories-asc', label: 'Calories: Low to High' },
];

export const CustomSortDropdown: React.FC<CustomSortDropdownProps> = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = SORT_OPTIONS.find(opt => opt.value === sortBy) || SORT_OPTIONS[0];

  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-white border border-[#E3F0D8] rounded-full px-4 py-1.5 shadow-sm min-w-[160px] md:min-w-[190px] focus:outline-none hover:border-[#8FB373] transition-colors"
      >
        <div className="flex items-center">
          <SlidersHorizontal size={16} className="text-[#8FB373] mr-2" />
          <span className="text-[#425440] text-xs md:text-sm font-bold truncate">
            {selectedOption.label}
          </span>
        </div>
        <ChevronDown 
          size={16} 
          className={`text-[#8FB373] ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-48 md:w-56 bg-white border border-[#E3F0D8] rounded-2xl shadow-[0_10px_30px_rgba(66,84,64,0.1)] overflow-hidden z-50 origin-top"
          >
            <div className="py-2">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs md:text-sm font-bold flex items-center justify-between transition-colors hover:bg-[#E3F0D8]/40
                    ${sortBy === option.value ? 'text-[#425440] bg-[#FAF9F6]' : 'text-gray-500'}
                  `}
                >
                  {option.label}
                  {/* Show a checkmark next to the active item */}
                  {sortBy === option.value && <Check size={16} className="text-[#8FB373]" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};