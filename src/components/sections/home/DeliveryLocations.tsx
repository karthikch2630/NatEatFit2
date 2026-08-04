import React, { useRef } from 'react';
import { motion, type Variants, useScroll, useTransform, MotionValue } from 'framer-motion';
import { MapPin, Navigation, Building2, Map, Home, Briefcase } from 'lucide-react';

// --- DATA FOR FLOATING ITEMS ---
// Swapped to delivery/location-themed placeholders, but you can use your food images
const floatingDecorations = [
  {
    src: "/salad.webp", // Replace with relevant delivery/food images
    alt: "Salad Bowl",
    className: "absolute -top-12 -right-8 w-40 md:w-56 h-40 md:h-56",
    delay: 0.1,
    duration: 5.5,
    xRange: [100, -50],
    yRange: [-50, 80],
    rotateRange: [15, -10],
  },
  {
    src: "/juice.webp",
    alt: "Juice Bottle",
    className: "absolute top-[12%] -left-12 w-36 md:w-48 h-36 md:h-48",
    delay: 0.3,
    duration: 6,
    xRange: [-150, 50],
    yRange: [0, -60],
    rotateRange: [-20, 10],
  },
  {
    src: "/sandwich.webp",
    alt: "Sandwich",
    className: "absolute top-[40%] -right-16 w-44 md:w-60 h-44 md:h-60",
    delay: 0.5,
    duration: 5,
    xRange: [120, -80],
    yRange: [50, -50],
    rotateRange: [10, -20],
  },
  {
    src: "/oats.webp",
    alt: "Oats Bowl",
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
        className="w-full h-full object-contain drop-shadow-2xl opacity-70"
      />
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const DeliveryLocations: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

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

  const locations = [
    {
      title: "Madhapur",
      desc: "Delivering fresh, clean meals right to the heart of Hyderabad's bustling tech and corporate center.",
      icon: <Building2 size={28} strokeWidth={1.5} />,
    },
    {
      title: "HITEC City",
      desc: "Fueling IT professionals with zero-preservative lunches and wholesome dinners straight to your office.",
      icon: <Briefcase size={28} strokeWidth={1.5} />,
    },
    {
      title: "Gachibowli",
      desc: "Fast, reliable delivery across the financial district, ensuring you never compromise on your daily nutrition.",
      icon: <Navigation size={28} strokeWidth={1.5} />,
    },
    {
      title: "Kondapur",
      desc: "Enjoy our homely, cooked-from-scratch bowls delivered fresh to your residential complex or workspace.",
      icon: <Home size={28} strokeWidth={1.5} />,
    },
    {
      title: "Jubilee Hills",
      desc: "Premium, farm-to-table salads and cold-pressed juices delivered to your doorstep with ultimate care.",
      icon: <MapPin size={28} strokeWidth={1.5} />,
    },
    {
      title: "Manikonda",
      desc: "Bringing high-protein meals and signature overnight oats to the rapidly growing neighborhoods around you.",
      icon: <Map size={28} strokeWidth={1.5} />,
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
            Where We Deliver
          </h2>
          <p className="text-[#5C5950] max-w-2xl mx-auto text-lg">
            Proudly serving Hyderabad's IT corridor. From home to the office, we bring healthy, 100% natural meals directly to you.
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
          {locations.map((location, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col">
              
              <div className="w-20 h-20 rounded-full bg-[#E8F3E8] flex items-center justify-center text-[#2A5C38] mb-6 shadow-sm border border-[#D5E5D5]">
                {location.icon}
              </div>
              
              <h3 className="text-2xl font-bosch font-bold text-[#1F291E] mb-4 tracking-tight leading-snug">
                {location.title}
              </h3>
              
              <p className="text-[#5C5950] leading-relaxed text-sm md:text-base font-medium">
                {location.desc}
              </p>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DeliveryLocations;