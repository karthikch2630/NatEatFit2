import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMegaMenu from './MobileMegaMenu';

// 1. ADD THIS IMPORT (Adjust the path if your store folder is located elsewhere)
import { useCartStore } from '../../../store/cartStore';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu', hasDropdown: true },
  { name: 'Subscription', path: '/subscription' },
  { name: 'Our Story', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // 2. We only need getItemCount now, toggleCart is no longer needed since we use a Cart Page
  const { getItemCount } = useCartStore();
  const itemCount = getItemCount();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-8 pointer-events-none">
      <div 
        className="flex flex-col items-center pointer-events-auto w-full max-w-7xl"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-between w-full px-3 py-2.5 bg-[#FDFBF7]/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EBE8DE] rounded-full z-50 relative"
        >
          {/* Left: Mobile Menu Trigger + Logo */}
          <div className="flex items-center flex-shrink-0 ml-1 lg:ml-3 lg:w-48 font-bosch">
            <button 
              className="lg:hidden p-2 text-[#425440] mr-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
            <Link to="/" className="text-2xl font-medium cursor-pointer">
              <span className="text-[#425440]">Nat Eat</span>
              <span className="text-[#425440]"> Fit</span>
            </Link>
          </div>

          {/* Middle: Desktop Pill Navigation */}
          <div className="relative hidden lg:flex justify-center">
            <div className="flex items-center bg-white/70 p-1.5 rounded-full shadow-inner border border-[#F0EFE9]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
                
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setHoveredMenu(link.hasDropdown ? link.name : null)}
                  >
                    <Link
                      to={link.path}
                      className={`relative block px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                        isActive ? 'text-[#1F452A]' : 'text-[#8C877D] hover:text-[#4A7A57]'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-[#E8F3E8] rounded-full shadow-sm"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
            
            {/* Mega Menu Dropdown */}
            <MegaMenu hoveredMenu={hoveredMenu} onNavigate={() => setHoveredMenu(null)} />
          </div>

          {/* Right: Cart & Order Button */}
          <div className="flex items-center justify-end gap-2 pr-1 sm:gap-4 lg:w-48">
            <Link
              to="/cart"
              className="relative p-2.5 transition-colors duration-200 rounded-full text-[#5C5950] hover:bg-[#F0EFE9] hover:text-[#2A5C38]"
            >
              <ShoppingCart size={22} strokeWidth={2.2} />
              {itemCount > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#FF6B6B] rounded-full border-2 border-[#FDFBF7]">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {/* 3. Changed from a button with onClick={toggleCart} to a Link that goes to the Menu */}
            <Link
              to="/menu"
              className="sm:block px-7 py-3 text-sm font-bold font-bosch text-white transition-all duration-300 bg-[#425440] rounded-full hover:bg-[#2A5C38] whitespace-nowrap"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <MobileMegaMenu onClose={() => setIsMobileMenuOpen(false)} />
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;