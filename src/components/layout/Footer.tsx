import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Compacted Decorative Food Component to keep the file clean
const DecorativeFood = () => (
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-end justify-center gap-6 md:gap-8 text-[#8FB373] pointer-events-none w-full h-16">
    <svg width="26" height="42" viewBox="0 0 26 42" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-[-2px]">
      <path d="M5 9h16l-2.5 26a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2L5 9z" fill="currentColor" fillOpacity="0.18" /><path d="M3 9h20M17 2l-3 9" /><circle cx="19" cy="7" r="3.2" fill="currentColor" fillOpacity="0.3" /><path d="M19 4.2v5.6M16.6 7h4.8M17.3 5l3.4 4M20.7 5l-3.4 4" strokeWidth="1" />
    </svg>
    <svg width="40" height="28" viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-[-2px]">
      <path d="M4 13a16 16 0 0 0 32 0z" fill="currentColor" fillOpacity="0.18" /><path d="M2 13h36" /><circle cx="14" cy="9" r="1.4" fill="currentColor" stroke="none" /><circle cx="20" cy="7" r="1.4" fill="currentColor" stroke="none" /><circle cx="26" cy="9" r="1.4" fill="currentColor" stroke="none" /><path d="M31 2c2.2 0 3.5 1.6 3.5 3.4 0 1.8-1.3 3.2-3.5 3.2S27.5 7.2 27.5 5.4C27.5 3.6 28.8 2 31 2z" fill="currentColor" fillOpacity="0.25" /><path d="M31 8.6v10" />
    </svg>
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-[-2px]">
      <path d="M10 30C4 24 3 15 10 4c7 11 6 20 0 26z" fill="currentColor" fillOpacity="0.18" /><path d="M10 28V6" strokeWidth="1.5" /><path d="M10 12l-3 3M10 18l-3.5 3M10 12l3 3M10 18l3.5 3" strokeWidth="1" />
    </svg>
    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-[-2px]">
      <path d="M13 2C6 2 2 10 2 18a11 11 0 0 0 22 0c0-8-4-16-11-16z" fill="currentColor" fillOpacity="0.12" /><path d="M13 6C8 6 5.5 12 5.5 18a7.5 7.5 0 0 0 15 0c0-6-2.5-12-7.5-12z" fill="currentColor" fillOpacity="0.22" /><circle cx="13" cy="19" r="4.5" fill="currentColor" fillOpacity="0.4" />
    </svg>
  </div>
);

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Bowls", href: "/menu/bowls" },
      { name: "Juices", href: "/menu/juices" },
      { name: "Full Menu", href: "/menu" }
    ]
  },
  {
    title: "Info",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "#" }
    ]
  }
];

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0a0f0a] pt-12 md:pt-20 font-montserrat">
      
      {/* Top Floating Text Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[#8C877D] text-xs md:text-sm mb-12 gap-4 text-center">
        <p>Made in Hyderabad, Telangana</p>
        <p>445 bowls delivered, no plans to stop</p>
      </div>

      {/* Main Gradient Card */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="relative w-full rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-hidden bg-gradient-to-b from-[#4A7D3C] via-[#2A5C38] to-[#0a0f0a] pt-20 md:pt-28 pb-32 md:pb-48 flex flex-col items-center border-t border-[#8FB373]/20">
          
          <DecorativeFood />

          <div className="relative z-10 w-full max-w-4xl px-6 text-center text-[#E8F3E8] mb-16">
            
            {/* Address Section */}
            <div className="mb-14">
              <h4 className="font-bold tracking-widest mb-4 uppercase text-sm text-white">Find Us</h4>
              <p className="text-sm leading-relaxed text-[#E8F3E8]/80 mb-2">
                NAT EAT FIT<br />
                Raghavendra Colony, Kondapur, Hyderabad 500081
              </p>
              <p className="text-sm text-[#E8F3E8]/80">
                hello@nateatfit.com <span className="mx-2 opacity-50">|</span> +91 99594 25322
              </p>
            </div>

            {/* Links Grid */}
            <div className="flex justify-center gap-16 md:gap-32 w-full max-w-xl mx-auto">
              {footerLinks.map((section) => (
                <div key={section.title} className="flex flex-col items-center">
                  <h4 className="font-bold tracking-widest mb-6 uppercase text-sm text-white">{section.title}</h4>
                  <ul className="space-y-4 text-center">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-sm text-[#E8F3E8]/80 hover:text-white transition-colors">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full max-w-2xl border-t border-white/10 mb-8" />

          {/* Bottom Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-[#E8F3E8] text-sm font-medium">
            
            {/* Instagram Link with SVG */}
            <motion.a 
              href="#" 
              aria-label="Follow us on Instagram"
              whileHover={{ y: -2, color: "#fff" }}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Follow us on Instagram</span>
            </motion.a>

            {/* Back to Top Button */}
            <motion.button 
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              whileHover={{ y: -2, color: "#fff" }}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ArrowUp size={18} aria-hidden="true" />
              Back to top
            </motion.button>
          </div>

          {/* Giant Background Text */}
          <div className="absolute -bottom-6 md:-bottom-10 w-full flex justify-center pointer-events-none select-none">
            <h1 className="text-[20vw] md:text-[16vw] font-black tracking-tighter text-[#0a0f0a]/60 leading-none font-sans">
              NATEATFIT
            </h1>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;