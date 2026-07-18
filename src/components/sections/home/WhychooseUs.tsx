import React, { useRef } from 'react';
import { motion, type Variants, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Utensils, ShieldBan, Milk, ChefHat, Clock, Leaf } from 'lucide-react';

// --- DATA FOR FLOATING ITEMS ---
// Added xRange, yRange, and rotateRange to control the scroll behavior
const floatingDecorations = [
  {
    src: "/juice.webp",
    alt: "Juice",
    className: "absolute -top-12 -right-8 w-40 md:w-56 h-40 md:h-56",
    delay: 0.1,
    duration: 5.5,
    xRange: [100, -50],    // Moves from right to left
    yRange: [-50, 80],     // Moves down
    rotateRange: [15, -10],
  },
  {
    src: "/sandwich.webp",
    alt: "Sandwich",
    className: "absolute top-[12%] -left-12 w-36 md:w-48 h-36 md:h-48",
    delay: 0.3,
    duration: 6,
    xRange: [-150, 50],    // Moves from left to right
    yRange: [0, -60],      // Moves slightly up
    rotateRange: [-20, 10],
  },
  {
    src: "/oats.webp",
    alt: "Oats",
    className: "absolute top-[40%] -right-16 w-44 md:w-60 h-44 md:h-60",
    delay: 0.5,
    duration: 5,
    xRange: [120, -80],    // Moves from right to left
    yRange: [50, -50],
    rotateRange: [10, -20],
  },
  {
    src: "/juice2.webp",
    alt: "Green Juice",
    className: "absolute -bottom-16 right-[15%] w-32 md:w-44 h-32 md:h-44",
    delay: 0.9,
    duration: 4.8,
    xRange: [50, -100],    // Moves right to left
    yRange: [100, -50],
    rotateRange: [5, -15],
  },
  {
    src: "/salad.webp",
    alt: "Salad",
    className: "absolute -bottom-12 -left-8 w-40 md:w-56 h-40 md:h-56",
    delay: 1.1,
    duration: 6.2,
    xRange: [-120, 80],    // Moves left to right
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
  // Map the 0-1 scroll progress to the specific ranges for this item
  const x = useTransform(scrollYProgress, [0, 1], item.xRange);
  const y = useTransform(scrollYProgress, [0, 1], item.yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], item.rotateRange);

  return (
    <motion.div
      // 1. SCROLL ANIMATION (Applied to wrapper)
      style={{ x, y, rotate }}
      className={`${item.className} z-0 pointer-events-none`}
    >
      {/* 2. CONTINUOUS FLOATING ANIMATION (Applied to image) */}
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
        className="w-full h-full object-contain drop-shadow-2xl opacity-70"
      />
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const WhyChooseUs: React.FC = () => {
  // Ref for the section to track its scroll position
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the section (0 when top enters, 1 when bottom leaves)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Entrance animation for the grid items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const features = [
    {
      title: "Wide Variety of Bowls",
      desc: "From high-protein quinoa and brown rice bowls to refreshing salads and cold-pressed juices, we offer an extensive selection to suit every palate.",
      icon: <Utensils size={28} strokeWidth={1.5} />,
    },
    {
      title: "Zero Preservatives",
      desc: "100% natural and clean. We strictly avoid artificial colors, chemical preservatives, or hidden syrups to ensure exceptional quality.",
      icon: <ShieldBan size={28} strokeWidth={1.5} />,
    },
    {
      title: "Fresh, Pure Milk",
      desc: "Our signature overnight oats are soaked in premium, farm-fresh buffalo milk—never cheap, highly processed dairy alternatives.",
      icon: <Milk size={28} strokeWidth={1.5} />,
    },
    {
      title: "Homely Cooked Meals",
      desc: "Prepared in small batches with the same hygiene, love, and care as your own home kitchen. No industrial shortcuts.",
      icon: <ChefHat size={28} strokeWidth={1.5} />,
    },
    {
      title: "No 'Yesterday' Food",
      desc: "We cook everything fresh every single morning. What you eat today was chopped, prepared, and cooked today.",
      icon: <Clock size={28} strokeWidth={1.5} />,
    },
    {
      title: "Quality You Can Trust",
      desc: "Directly sourced from trusted local farmers, delivering a perfect balance of taste and health benefits you can rely on daily.",
      icon: <Leaf size={28} strokeWidth={1.5} />,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden font-montserrat">
      
      {/* ================= FLOATING BACKGROUND IMAGES ================= */}
      {floatingDecorations.map((item, i) => (
        <FloatingDecoration key={i} item={item} scrollYProgress={scrollYProgress} />
      ))}
      {/* ============================================================== */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#1F452A] font-bosch mb-4">
            Why Choose Nat Eat Fit?
          </h2>
          <p className="text-[#5C5950] max-w-2xl mx-auto">
            We don't just deliver food; we deliver a lifestyle. Uncompromising quality from our kitchen to your desk.
          </p>
        </div>

        {/* 3-Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col">
              
              <div className="w-20 h-20 rounded-full bg-[#E8F3E8] flex items-center justify-center text-[#2A5C38] mb-6 shadow-sm border border-[#D5E5D5]">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bosch font-bold text-[#1F291E] mb-4 tracking-tight leading-snug">
                {feature.title}
              </h3>
              
              <p className="text-[#5C5950] leading-relaxed text-sm md:text-base font-medium">
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