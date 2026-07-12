import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Home, Info, Phone, Calendar, UtensilsCrossed } from 'lucide-react';

interface MobileMegaMenuProps {
  onClose: () => void;
}

const navItems = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Menu', icon: UtensilsCrossed, expandable: true },
  { name: 'Subscription', icon: Calendar, path: '/subscription' },
  { name: 'Our Story', icon: Info, path: '/about' },
  { name: 'Contact', icon: Phone, path: '/contact' },
];

const categories = [
  { name: 'Bowls', path: '/menu/bowls' },
  { name: 'Juices', path: '/menu/juices' },
  { name: 'Salads', path: '/menu/salads' },
  { name: 'Oats', path: '/menu/oats' },
  { name: 'Sandwiches', path: '/menu/sandwiches' },
];

const MobileMegaMenu: React.FC<MobileMegaMenuProps> = ({ onClose }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute top-full left-0 right-0 mt-3 p-4 bg-[#FDFBF7] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#EBE8DE] rounded-[2rem] lg:hidden z-40"
    >
      <div className="flex flex-col gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.path ? location.pathname === item.path || location.pathname.startsWith(`${item.path}/`) : false;

          // Standard Links
          if (!item.expandable) {
            return (
              <Link
                key={item.name}
                to={item.path!}
                onClick={onClose}
                className={`w-full flex items-center p-4 rounded-3xl transition-all ${
                  isActive ? 'bg-[#E8F3E8]' : 'bg-white border border-[#F0EFE9]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${isActive ? 'bg-[#D1E6D1]' : 'bg-[#E8F3E8]'}`}>
                    <Icon size={20} className="text-[#2A5C38]" />
                  </div>
                  <span className={`font-bold ${isActive ? 'text-[#2A5C38]' : 'text-[#5C5950]'}`}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          }

          // Expandable Menu Link
          return (
            <div key={item.name} className="overflow-hidden">
              <button
                onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                className={`w-full flex items-center justify-between p-4 rounded-3xl transition-all ${
                  isMenuExpanded ? 'bg-[#E8F3E8]' : 'bg-white border border-[#F0EFE9]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${isMenuExpanded ? 'bg-[#D1E6D1]' : 'bg-[#E8F3E8]'}`}>
                    <Icon size={20} className="text-[#2A5C38]" />
                  </div>
                  <span className={`font-bold ${isMenuExpanded ? 'text-[#2A5C38]' : 'text-[#5C5950]'}`}>
                    {item.name}
                  </span>
                </div>
                <div className={`p-1 rounded-full ${isMenuExpanded ? 'bg-[#425440]' : 'bg-[#E8F3E8]'}`}>
                  <ChevronDown size={16} className={isMenuExpanded ? 'text-white rotate-180' : 'text-[#2A5C38]'} />
                </div>
              </button>

              <AnimatePresence>
                {isMenuExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-2"
                  >
                    <div className="bg-white p-3 rounded-3xl border border-[#F0EFE9] flex flex-col gap-1">
                      <Link
                        to="/menu"
                        onClick={onClose}
                        className="p-3 text-sm font-bold text-[#2A5C38] border-b border-[#F0EFE9] mb-1"
                      >
                        View Full Menu
                      </Link>
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={cat.path}
                          onClick={onClose}
                          className="px-4 py-2 text-sm font-semibold text-[#5C5950] hover:bg-[#F9F8F4] hover:text-[#2A5C38] rounded-xl transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileMegaMenu;