import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { sendOrderToWhatsApp } from '../utils/sendOrderToWhatsApp';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 49 : 0;
  const taxes = subtotal * 0.05;
  const total = subtotal + deliveryFee + taxes;

  const handleCheckout = () => {
    sendOrderToWhatsApp(items);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-montserrat flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center max-w-md px-6"
        >
          <div className="w-24 h-24 bg-[#E8F3E8] text-[#2A5C38] rounded-full flex items-center justify-center mb-6">
            <ShoppingBag size={40} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-black text-[#1F452A] font-bosch mb-3">Your cart is empty</h1>
          <p className="text-[#5C5950] mb-8">
            Looks like you haven't added any healthy bowls or cold-pressed juices yet.
          </p>
          <Link
            to="/menu"
            className="px-8 py-4 bg-[#425440] text-white font-bold rounded-full hover:bg-[#2A5C38] transition-colors flex items-center gap-2"
          >
            Explore Menu <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Link to="/menu" className="p-2 bg-white border border-[#EBE8DE] rounded-full text-[#5C5950] hover:text-[#2A5C38] hover:bg-[#F9F8F4] transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-[#1F452A] font-bosch tracking-tight">
            Your Cart
          </h1>
          <span className="bg-[#E8F3E8] text-[#2A5C38] px-3 py-1 text-sm font-bold rounded-full ml-auto md:ml-4">
            {items.length} {items.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Column: Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-[2rem] border border-[#EBE8DE] shadow-sm overflow-hidden p-2 sm:p-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => {
                  const lineTotal = item.unitPrice * item.quantity;

                  const groupedAddOns = (item.addOns || []).reduce((acc, addon) => {
                    if (!acc[addon.groupName]) acc[addon.groupName] = [];
                    acc[addon.groupName].push(addon.name);
                    return acc;
                  }, {} as Record<string, string[]>);

                  return (
                    <motion.div
                      key={item.cartItemId}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, height: 0, margin: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col sm:flex-row gap-4 p-4 border-b border-[#F0EFE9] last:border-0"
                    >
                      {/* Item Image */}
                      <div className="w-full sm:w-32 h-32 bg-[#F9F8F4] rounded-2xl overflow-hidden flex-shrink-0 relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-lg font-bold text-[#1F452A]">{item.name}</h3>
                          <p className="font-bold text-[#2A5C38]">₹{lineTotal}</p>
                        </div>

                        {/* Customizations */}
                        {Object.keys(groupedAddOns).length > 0 && (
                          <div className="mb-4 space-y-1">
                            {Object.entries(groupedAddOns).map(([groupName, options]) => (
                              <p key={groupName} className="text-xs text-[#8C877D]">
                                <span className="font-semibold text-[#5C5950]">{groupName}:</span>{' '}
                                {options.join(', ')}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Quantity & Delete Controls */}
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <div className="flex items-center gap-3 bg-[#F3F2EE] rounded-full p-1 border border-[#EBE8DE]">
                            <button
                              onClick={() => updateQuantity(item.cartItemId, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-[#5C5950] hover:text-[#2A5C38] shadow-sm transition-colors"
                            >
                              <Minus size={14} strokeWidth={3} />
                            </button>
                            <span className="text-sm font-bold text-[#1F452A] w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-[#5C5950] hover:text-[#2A5C38] shadow-sm transition-colors"
                            >
                              <Plus size={14} strokeWidth={3} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.cartItemId)}
                            className="flex items-center gap-1.5 text-xs font-bold text-[#D94545] hover:text-[#B93838] transition-colors px-3 py-2"
                          >
                            <Trash2 size={16} />
                            <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-[2rem] border border-[#EBE8DE] shadow-sm p-6 sticky top-32">
              <h2 className="text-xl font-black text-[#1F452A] font-bosch mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 text-sm font-medium text-[#5C5950]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Partner Fee</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-[#F0EFE9] pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#1F452A]">Total</span>
                  <span className="text-2xl font-black text-[#2A5C38]">₹{total.toFixed(2)}</span>
                </div>
                <p className="text-[10px] text-[#8C877D] mt-1 text-right">Order is sent via WhatsApp for confirmation</p>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#425440] text-white font-bold rounded-full hover:bg-[#2A5C38] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Checkout securely <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;