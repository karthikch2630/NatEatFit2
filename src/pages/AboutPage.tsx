import React from 'react';
import { motion, type Variants } from 'framer-motion';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  // Animation variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-montserrat text-[#425440]">
      <SEO 
        title="Our Story" 
        description="Learn about Nat Eat Fit's mission to provide healthy, chef-prepared, nutrient-dense meals that fuel your workday." 
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#425440] text-white overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h1 
            variants={fadeUp}
            className="font-bosch text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Healthy food <br/>
            <span className="text-[#8FB373]">with a soul.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#E3F0D8]/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We started this because healthy eating shouldn't feel like a punishment. 
            Get chef-prepared, nutrient-dense meals that fuel your workday and actually taste incredible.
          </motion.p>
        </motion.div>
        
        {/* Decorative Element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8FB373]/20 rounded-full blur-[80px]" />
      </section>

      {/* The Story Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2000&auto=format&fit=crop" 
              alt="Suresh - Founder and Chef" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#425440]/90 via-[#425440]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white pr-8">
              <p className="font-bosch text-4xl font-bold">Suresh</p>
              <p className="text-[#8FB373] font-bold tracking-widest uppercase text-sm mt-2">Founder & Head Chef</p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeUp} className="font-bosch text-3xl md:text-4xl font-bold text-[#425440] leading-tight">
              "Good food shouldn't be a luxury, and healthy food shouldn't be a punishment."
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Seven years ago, I started my culinary journey at the absolute bottom, earning just ₹15,000 a month. I worked relentlessly under top chefs, mastering the science of food—learning exactly how to balance calories for weight loss, muscle gain, and gut health.
              </p>
              <p>
                But when I looked outside the kitchen, I saw a problem. I saw busy software professionals and dedicated gym-goers surviving on daily outside fast food. They were ruining their stomachs and draining their energy just because they didn't have time to cook.
              </p>
              <p>
                I knew I could fix this. I wanted to create a service that provides food that is actually gentle on the stomach and fuels a long, vibrant life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Kitchen to Door Section */}
      <section className="py-24 px-6 bg-[#E3F0D8]/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center flex-col-reverse md:flex-row">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6 md:order-1 order-2"
          >
            <motion.h2 variants={fadeUp} className="font-bosch text-4xl font-bold text-[#425440]">
              "I cook every meal, and I make sure it reaches your door hot."
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                This isn't a massive corporate kitchen. I am the chef, and I oversee everything from the moment the ingredients arrive to the moment the food is delivered to your door. 
              </p>
              <p>
                We don't cut corners. I buy directly from local farmers—sourcing fresh buffalo milk, crisp vegetables, wholesome brown rice, and premium quinoa. Nothing comes out of a can, and our cold-pressed juices have zero preservatives. 
              </p>
              <p>
                My golden rule? <strong>Nothing was made yesterday.</strong> Every single bowl is prepared fresh, packed with care, and delivered hot. Because if it doesn't taste amazing and make you feel great, it doesn't leave my kitchen.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl md:order-2 order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop" 
              alt="Fresh ingredients being prepared" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#425440]/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-bosch text-3xl font-bold">Farm to Door</p>
              <p className="text-[#8FB373] font-bold tracking-widest uppercase text-sm mt-1">100% Fresh Daily</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-12"
        >
          {[
            { title: "Direct from Farmers", desc: "Sourced locally. Fresh buffalo milk, crisp greens, brown rice, and premium quinoa bought straight from the source.", icon: "🌾" },
            { title: "Zero Preservatives", desc: "No artificial additives, no seed oils, and completely natural cold-pressed juices. Just pure, clean energy.", icon: "🫒" },
            { title: "Delivered Hot & Fresh", desc: "Never reheated. Never from yesterday. I cook your meal fresh and ensure it arrives at your door hot.", icon: "🛵" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="space-y-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-bosch text-xl font-bold text-[#425440]">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;