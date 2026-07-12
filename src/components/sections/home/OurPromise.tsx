import React from 'react';
import { motion } from 'framer-motion';

const PromiseSection: React.FC = () => {
  const features = [
    {
      title: "Pure Buffalo Milk",
      desc: "We soak our oats exclusively in fresh, organic buffalo milk—rich in protein, calcium, and healthy fats for a naturally creamy finish.",
      icon: "🥛"
    },
    {
      title: "Zero Plastic Waste",
      desc: "Committed to the earth. Everything from our cups to our wooden spoons is 100% biodegradable and compostable.",
      icon: "🌿"
    },
    {
      title: "Clean & Unprocessed",
      desc: "No refined sugars, syrups, or artificial colors. Just natural sweetness from whole fruits, dates, and raw organic honey.",
      icon: "🍯"
    }
  ];

  return (
    <section className="py-12 px-6 bg-[#F3EFE9]">
      <div className="max-w-6xl mx-auto">
        
        {/* Intro Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bosch text-4xl md:text-5xl text-[#425440] font-bold mb-6"
          >
            Purity in Every Spoonful.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-montserrat max-w-2xl mx-auto text-[#7A8275] text-lg leading-relaxed"
          >
            A healthy breakfast shouldn't compromise on quality. We balance rich, 
            organic nutrition with a strict commitment to a zero-waste planet.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(66,84,64,0.05)] border border-[#E3F0D8]/50 hover:border-[#8FB373] transition-colors duration-500"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="font-bosch text-xl font-bold text-[#425440] mb-4">
                {feature.title}
              </h3>
              <p className="font-montserrat text-sm text-[#7A8275] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Secondary "On-Time" Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-[#E3F0D8] text-[#425440] font-montserrat text-xs font-bold tracking-[0.2em] uppercase">
            ⚡ Always Fresh • Delivered On-Time
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseSection;