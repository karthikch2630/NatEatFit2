import React from 'react';
import { motion, type Variants } from 'framer-motion';
// import SEO from '../components/SEO'; // Assuming you have this

// IMPORTANT: Import your vertical WhatsApp screenshot images here
// import chat1 from '../assets/whatsapp-1.jpg';
// import chat2 from '../assets/whatsapp-2.jpg';
// import chat3 from '../assets/whatsapp-3.jpg';
// import chat4 from '../assets/whatsapp-4.jpg';
// import chat5 from '../assets/whatsapp-5.jpg';
// import chat6 from '../assets/whatsapp-6.jpg';

const TestimonialsPage: React.FC = () => {
  // Animation variants (matching your theme)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // Image float animation for the hero section
  const floatAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  const foodVarieties = [
    {
      title: "Chef-Crafted Power Bowls",
      desc: "Perfectly balanced macros featuring premium quinoa, brown rice, lean proteins, and roasted local vegetables.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Signature Salads",
      desc: "Crisp, farm-fresh greens paired with our house-made, zero-seed-oil dressings that are gentle on your stomach.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Cold-Pressed Juices",
      desc: "100% natural juices with zero preservatives or added sugar. Just pure, clean energy extracted daily.",
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Wholesome Traditional",
      desc: "Guilt-free takes on classic Indian comfort food, using healthy fats, brown rice, and slow-cooked spices.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // Array of WhatsApp screenshot images
  const whatsappScreenshots = [
    { id: 1, image: "/testimonials/review-1.jpeg" }, // Replace with {chat1}
    { id: 2, image: "/testimonials/review-2.png" }, // Replace with {chat2}
    { id: 3, image: "/testimonials/review-3.png" }, // Replace with {chat3}
    { id: 4, image: "/testimonials/review-4.png" }, // Replace with {chat4}
    { id: 5, image: "/testimonials/review-5.png" }, // Replace with {chat5}
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-montserrat text-[#425440]">
      {/* <SEO 
        title="Reviews & Menu | Nat Eat Fit" 
        description="See what our community has to say about our healthy, chef-prepared meals. Explore our variety of power bowls, salads, and cold-pressed juices." 
      /> */}
      
      {/* Full-Page Hero Section with Bottom Curves */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 bg-[#425440] text-white overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-xl">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.h1 
              variants={fadeUp}
              className="font-bosch text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight"
            >
              Don't just take <br/>
              <span className="text-[#8FB373]">our word for it.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#E3F0D8]/90 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
              Real people. Real results. Check out what our community has to say in their own words about fueling their daily lives with our chef-prepared meals.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#425440] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-[#425440] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-[#425440] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User" />
              </div>
              <p className="text-sm text-[#E3F0D8]/80">
                Join 500+ happy customers
              </p>
            </motion.div>
          </motion.div>

          {/* Animated Hero Image */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={floatAnimation}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-[#8FB373]/20 rounded-full blur-3xl transform scale-110"></div>
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop" 
                alt="Fresh, healthy Nat Eat Fit meal" 
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl border-4 border-[#8FB373]/40"
              />
              
              {/* Floating Trust Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white text-[#425440] py-3 px-6 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="bg-[#E3F0D8] p-2 rounded-full">
                  <svg className="w-6 h-6 text-[#8FB373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold font-bosch text-sm">Top Rated</p>
                  <p className="text-xs text-gray-500">By top professionals</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8FB373]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/4 -right-24 w-64 h-64 bg-[#E3F0D8]/10 rounded-full blur-[80px] pointer-events-none" />
      </section>

      {/* Food Varieties Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="font-bosch text-4xl md:text-5xl font-bold text-[#425440] mb-4">
            What's on the Menu?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't believe in boring diets. Our kitchen produces a wide variety of nutrient-dense meals designed to satisfy your cravings while keeping you on track.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {foodVarieties.map((food, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E3F0D8] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={food.image} 
                  alt={food.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bosch text-xl font-bold text-[#425440] mb-2">{food.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{food.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Screenshot Testimonials Section */}
      <section className="py-24 px-6 bg-[#E3F0D8]/30">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8FB373]/20 text-[#425440] font-bold text-sm mb-6">
              <svg className="w-5 h-5 text-[#8FB373]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Real Customer Chats
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-bosch text-4xl md:text-5xl font-bold text-[#425440]">
              Loved by our community
            </motion.h2>
          </motion.div>

          {/* Grid optimized for vertical screenshots */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {whatsappScreenshots.map((screenshot) => (
              <motion.div 
                key={screenshot.id}
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-[4px] border-white bg-gray-50 aspect-[9/16]"
              >
                {/* 
                  Added 'aspect-[9/16]' to the parent to force a vertical phone shape.
                  The image uses 'object-cover object-top' to fill the vertical space 
                  starting from the top of the chat screenshot.
                */}
                <img 
                  src={screenshot.image} 
                  alt="Customer Review" 
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      
    </div>
  );
};

export default TestimonialsPage;