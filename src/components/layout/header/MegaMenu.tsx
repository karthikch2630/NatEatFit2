import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Droplet, Coffee, ChefHat, Salad } from 'lucide-react';

interface MegaMenuProps {
  hoveredMenu: string | null;
  onNavigate?: () => void;
}

// Clean category list mapping to /menu/category
const categories = [
  { name: 'Bowls', path: '/menu/bowls', icon: Leaf, desc: 'Nutrient-packed meals' },
  { name: 'Juices', path: '/menu/juices', icon: Droplet, desc: 'Cold-pressed natural' },
  { name: 'Salads', path: '/menu/salads', icon: Salad, desc: 'Fresh & crisp greens' },
  { name: 'Oats', path: '/menu/oats', icon: Coffee, desc: 'Overnight power bowls' },
  { name: 'Sandwiches', path: '/menu/sandwiches', icon: ChefHat, desc: 'Wholesome & filling' },
];

const MegaMenu: React.FC<MegaMenuProps> = ({ hoveredMenu, onNavigate }) => {
  const isMenuVisible = hoveredMenu === 'Menu';

  return (
    <AnimatePresence>
      {isMenuVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-1/2 -translate-x-1/2 w-[480px] top-full z-40 pt-4"
        >
          <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#EBE8DE] rounded-3xl p-4 w-full">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    onClick={onNavigate}
                    className="flex flex-col p-3 rounded-2xl transition-all duration-200 hover:bg-[#F9F8F4] group"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 bg-[#E8F3E8] text-[#2A5C38] rounded-full group-hover:bg-[#2A5C38] group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="text-sm font-bold text-[#5C5950] group-hover:text-[#2A5C38]">
                        {cat.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8C877D] pl-11">
                      {cat.desc}
                    </span>
                  </Link>
                );
              })}
              
              {/* "View All" Card */}
              <Link
                to="/menu"
                onClick={onNavigate}
                className="flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-200 bg-[#FDFBF7] border border-[#F0EFE9] hover:border-[#2A5C38] group"
              >
                <span className="text-sm font-bold text-[#2A5C38]">
                  View Full Menu →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;