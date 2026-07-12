import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "The Morning Harvest",
      desc: "Before the sun rises, our ingredients are gathered. We source pure, organic buffalo milk from local dairy farmers and hand-pick seasonal produce. No middlemen, just authentic farm-to-kitchen freshness.",
      image: "https://images.unsplash.com/photo-1595858602796-0df30b6fc430?auto=format&fit=crop&q=80&w=800", // Traditional farm/milk vibe
      reverse: false
    },
    {
      num: "02",
      title: "The Art of Patience",
      desc: "True nourishment takes time. We don't use instant processing. Our oats are slow-soaked overnight to break down phytic acid, while our juices are strictly cold-pressed using traditional hydraulic pressure to preserve every living enzyme.",
      image: "https://images.unsplash.com/photo-1615486171448-4fb324f33195?auto=format&fit=crop&q=80&w=800", // Preparation/ingredients vibe
      reverse: true
    },
    {
      num: "03",
      title: "Earth-First Serving",
      desc: "We honor the earth that feeds us. Your meals are carefully packed in 100% plastic-free, biodegradable boxes. From our kitchen to your hands, our traditional approach leaves no trace behind.",
      image: "https://images.unsplash.com/photo-1605663737380-044733cd158e?auto=format&fit=crop&q=80&w=800", // Sustainable packaging vibe
      reverse: false
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat text-[#8FB373] text-sm font-bold tracking-[0.25em] uppercase mb-4"
          >
            Our Philosophy
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bosch text-4xl md:text-5xl text-[#425440] font-bold"
          >
            Rooted in Tradition.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-32">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                step.reverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, x: step.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full md:w-1/2 relative"
              >
                {/* Decorative Background Element */}
                <div className={`absolute top-4 md:top-8 -bottom-4 md:-bottom-8 ${
                  step.reverse ? '-left-4 md:-left-8' : '-right-4 md:-right-8'
                } w-full h-full bg-[#F3EFE9] rounded-[2rem] -z-10`}></div>
                
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-[300px] md:h-[450px] object-cover rounded-[2rem] shadow-lg border-4 border-white"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: step.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="w-full md:w-1/2 relative"
              >
                {/* Large Background Number for Editorial Feel */}
                <div className="absolute -top-16 -left-4 text-[8rem] md:text-[12rem] font-bosch font-bold text-[#F3EFE9] opacity-50 -z-10 select-none leading-none">
                  {step.num}
                </div>
                
                <h3 className="font-bosch text-2xl md:text-4xl text-[#425440] font-bold mb-6">
                  {step.title}
                </h3>
                <p className="font-montserrat text-[#7A8275] text-sm md:text-base leading-relaxed mb-8">
                  {step.desc}
                </p>
                
                {/* Traditional Divider Line */}
                <div className="w-16 h-[2px] bg-[#8FB373]"></div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;