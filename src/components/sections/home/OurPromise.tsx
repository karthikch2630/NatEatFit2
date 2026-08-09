import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Droplets, Leaf, Sparkles } from 'lucide-react';

const PromiseSection: React.FC = () => {
  // Reveal animation for staggered elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    {
      title: "Pure Buffalo Milk",
      desc: "We soak our oats exclusively in fresh, organic buffalo milk—rich in protein, calcium, and healthy fats for a naturally creamy finish.",
      icon: <Droplets size={28} strokeWidth={1.5} />
    },
    {
      title: "Zero Plastic Waste",
      desc: "Committed to the earth. Everything from our cups to our wooden spoons is 100% biodegradable and compostable.",
      icon: <Leaf size={28} strokeWidth={1.5} />
    },
    {
      title: "Clean & Unprocessed",
      desc: "No refined sugars, syrups, or artificial colors. Just natural sweetness from whole fruits, dates, and raw organic honey.",
      icon: <Sparkles size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-[#FAF9F6] font-montserrat overflow-hidden">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E3F0D8]/60 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8FB373]/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intro Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3F0D8]/80 text-[#425440] font-bold text-sm mb-6 border border-[#8FB373]/30 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#8FB373] animate-pulse"></span>
            Our Guarantee
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bosch text-4xl md:text-5xl lg:text-6xl text-[#425440] font-black mb-6 tracking-tight"
          >
            Purity in Every <span className="text-[#8FB373]">Spoonful.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-montserrat text-[#425440]/80 text-lg md:text-xl leading-relaxed font-medium"
          >
            A healthy breakfast shouldn't compromise on quality. We balance rich, 
            organic nutrition with a strict commitment to a zero-waste planet.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-[#E3F0D8] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative Corner Element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#E3F0D8]/30 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              {/* Icon Wrapper */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#E3F0D8]/60 rounded-2xl flex items-center justify-center text-[#425440] mb-8 border border-[#8FB373]/20 transition-all duration-500 group-hover:bg-[#425440] group-hover:text-[#F3EFE9] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg relative z-10">
                {feature.icon}
              </div>
              
              <h3 className="font-bosch text-2xl font-bold text-[#425440] mb-4 relative z-10">
                {feature.title}
              </h3>
              
              <p className="font-montserrat text-sm lg:text-base text-[#425440]/70 leading-relaxed font-medium relative z-10">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Secondary "On-Time" Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-[#E3F0D8] shadow-sm hover:shadow-md transition-shadow cursor-default">
            <div className="w-8 h-8 rounded-full bg-[#8FB373]/20 flex items-center justify-center text-[#8FB373]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-[#425440] font-montserrat text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Always Fresh • Delivered On-Time
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PromiseSection;