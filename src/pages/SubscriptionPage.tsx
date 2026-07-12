import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { subscriptionPlans } from '../data/subscriptionData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const CheckIcon = ({ recommended }: { recommended: boolean }) => (
  <svg
    className={`w-5 h-5 shrink-0 mt-0.5 ${recommended ? 'text-[#8FB373]' : 'text-[#8FB373]/80'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const SubscriptionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#354333] to-[#425440] font-montserrat pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 mb-6 bg-[#8FB373]/20 border border-[#8FB373]/50 text-[#E3F0D8] font-bold text-xs uppercase tracking-widest rounded-full">
            🌟 Try a Sample Bowl for just ₹250
          </div>
          <h1 className="font-bosch text-4xl md:text-6xl text-white font-extrabold mb-6 tracking-tight">
            Healthy Living, <span className="text-[#8FB373]">Delivered.</span>
          </h1>
          <p className="text-[#E3F0D8]/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Every plan rotates through 10 handcrafted varieties — a fresh meal
            every day for 10 days, then the cycle repeats. Delivered across
            Hyderabad, Monday to Saturday.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8 md:gap-10 items-center"
        >
          {subscriptionPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative p-8 rounded-[2rem] border backdrop-blur-sm transition-shadow duration-300 flex flex-col ${
                plan.recommended
                  ? 'bg-white border-[#8FB373] shadow-2xl shadow-[#8FB373]/20 scale-100 lg:scale-105 z-10'
                  : 'bg-[#4A5D48]/60 border-[#596D56]/50 shadow-xl hover:bg-[#4A5D48]/80'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7a9a61] to-[#8FB373] text-white px-6 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-lg z-20">
                  {plan.tag}
                </div>
              )}

              <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden relative group shrink-0">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mb-6">
                <h3 className={`font-bosch text-2xl font-bold mb-2 ${plan.recommended ? 'text-[#354333]' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.recommended ? 'text-gray-600' : 'text-[#E3F0D8]/70'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6 flex items-baseline">
                <span className={`text-5xl font-extrabold tracking-tight ${plan.recommended ? 'text-[#354333]' : 'text-white'}`}>
                  ₹{plan.price.toLocaleString('en-IN')}
                </span>
                <span className={`text-sm ml-2 font-medium ${plan.recommended ? 'text-gray-500' : 'text-[#E3F0D8]/60'}`}>
                  / month
                </span>
              </div>

              <div className={`text-xs font-bold uppercase tracking-widest mb-8 inline-block px-3 py-1 rounded-md w-fit ${
                plan.recommended ? 'bg-[#8FB373]/10 text-[#6f8f57]' : 'bg-black/20 text-[#8FB373]'
              }`}>
                Portion: {plan.weight}
              </div>

              <ul className="space-y-4 mb-6 grow">
                {plan.highlights.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon recommended={plan.recommended} />
                    <span className={`text-sm font-medium ${plan.recommended ? 'text-gray-700' : 'text-[#E3F0D8]/90'} ml-2`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`flex items-center gap-1.5 text-xs font-semibold mb-6 ${plan.recommended ? 'text-gray-500' : 'text-[#E3F0D8]/60'}`}>
                <Info size={14} />
                {plan.items.length}-day flavour rotation — repeats every {plan.items.length} deliveries
              </div>

              <Link
                to={`/subscription/${plan.id}`}
                className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all duration-300 mt-auto flex items-center justify-center gap-2 ${
                  plan.recommended
                    ? 'bg-[#354333] text-white hover:bg-[#8FB373] hover:shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#354333]'
                }`}
              >
                View Full Plan <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-[#E3F0D8]/50 text-sm mt-16 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Hyderabad service area only. Deliveries scheduled Monday–Saturday.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPage;