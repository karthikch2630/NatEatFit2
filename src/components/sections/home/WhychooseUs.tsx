import React, { useRef } from 'react';
import { motion, type Variants, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Utensils, ShieldBan, Milk, ChefHat, Clock, Leaf } from 'lucide-react';

// --- DATA FOR FLOATING ITEMS ---
const floatingDecorations = [
  {
    src: "/juice.webp",
    alt: "Juice",
    className: "absolute -top-12 -right-8 w-40 md:w-56 h-40 md:h-56",
    delay: 0.1,
    duration: 5.5,
    xRange: [100, -50],    
    yRange: [-50, 80],     
    rotateRange: [15, -10],
  },
  {
    src: "/sandwich.webp",
    alt: "Sandwich",
    className: "absolute top-[12%] -left-12 w-36 md:w-48 h-36 md:h-48",
    delay: 0.3,
    duration: 6,
    xRange: [-150, 50],    
    yRange: [0, -60],      
    rotateRange: [-20, 10],
  },
  {
    src: "/oats.webp",
    alt: "Oats",
    className: "absolute top-[40%] -right-16 w-44 md:w-60 h-44 md:h-60",
    delay: 0.5,
    duration: 5,
    xRange: [120, -80],    
    yRange: [50, -50],
    rotateRange: [10, -20],
  },
  {
    src: "/juice2.webp",
    alt: "Green Juice",
    className: "absolute -bottom-16 right-[15%] w-32 md:w-44 h-32 md:h-44",
    delay: 0.9,
    duration: 4.8,
    xRange: [50, -100],    
    yRange: [100, -50],
    rotateRange: [5, -15],
  },
  {
    src: "/salad.webp",
    alt: "Salad",
    className: "absolute -bottom-12 -left-8 w-40 md:w-56 h-40 md:h-56",
    delay: 1.1,
    duration: 6.2,
    xRange: [-120, 80],    
    yRange: [80, -40],
    rotateRange: [-15, 5],
  }
];

// --- SUB-COMPONENT FOR SCROLL ANIMATION ---
interface FloatingItemProps {
  item: typeof floatingDecorations[0];
  scrollYProgress: MotionValue<number>;
}

const FloatingDecoration: React.FC<FloatingItemProps> = ({ item, scrollYProgress }) => {
  const x = useTransform(scrollYProgress, [0, 1], item.xRange);
  const y = useTransform(scrollYProgress, [0, 1], item.yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], item.rotateRange);

  return (
    <motion.div
      style={{ x, y, rotate }}
      className={`${item.className} z-0 pointer-events-none`}
    >
      <motion.img
        src={item.src}
        alt={item.alt}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: item.duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-full h-full object-contain drop-shadow-2xl opacity-40" 
      />
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const features = [
    {
      title: "Wide Variety",
      desc: "From high-protein quinoa bowls to refreshing salads and cold-pressed juices, we offer an extensive selection.",
      icon: <Utensils size={28} strokeWidth={1.5} />,
    },
    {
      title: "Zero Preservatives",
      desc: "100% natural and clean. We strictly avoid artificial colors, chemical preservatives, or hidden syrups.",
      icon: <ShieldBan size={28} strokeWidth={1.5} />,
    },
    {
      title: "Fresh, Pure Milk",
      desc: "Our signature overnight oats are soaked in premium, farm-fresh buffalo milk—never cheap alternatives.",
      icon: <Milk size={28} strokeWidth={1.5} />,
    },
    {
      title: "Homely Cooked",
      desc: "Prepared in small batches with the same hygiene, love, and care as your own home kitchen.",
      icon: <ChefHat size={28} strokeWidth={1.5} />,
    },
    {
      title: "No 'Yesterday' Food",
      desc: "We cook everything fresh every single morning. What you eat today was chopped and prepared today.",
      icon: <Clock size={28} strokeWidth={1.5} />,
    },
    {
      title: "Quality You Trust",
      desc: "Directly sourced from trusted local farmers, delivering a perfect balance of taste and health benefits.",
      icon: <Leaf size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#FAF9F6] overflow-hidden font-montserrat">
      
      {/* ================= FLOATING BACKGROUND IMAGES ================= */}
      {floatingDecorations.map((item, i) => (
        <FloatingDecoration key={i} item={item} scrollYProgress={scrollYProgress} />
      ))}
      
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8FB373]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E3F0D8]/30 rounded-full blur-[100px] pointer-events-none" />
      {/* ============================================================== */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3F0D8]/80 text-[#425440] font-bold text-sm mb-6 border border-[#8FB373]/30"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#8FB373]"></span>
            Our Promise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#425440] font-bosch mb-6"
          >
            Why Choose Nat Eat Fit?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#425440]/80 text-lg leading-relaxed"
          >
            We don't just deliver food; we deliver a lifestyle. Uncompromising quality from our kitchen directly to your desk.
          </motion.p>
        </div>

        {/* 3-Column Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="bg-white p-8 rounded-[2rem] border border-[#E3F0D8] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col items-start"
            >
              {/* Cute corner decoration for the card */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#E3F0D8]/30 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              {/* Icon Container with Hover Animation */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#E3F0D8]/60 flex items-center justify-center text-[#425440] mb-6 border border-[#8FB373]/20 transition-all duration-500 group-hover:bg-[#425440] group-hover:text-[#F3EFE9] group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg relative z-10">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bosch font-bold text-[#425440] mb-3 tracking-tight leading-snug relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-[#425440]/70 leading-relaxed text-sm font-medium relative z-10">
                {feature.desc}
              </p>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;