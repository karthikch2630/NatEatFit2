import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'subscription',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for reaching out! Our team will contact you shortly.");
    setFormData({ name: '', phone: '', email: '', inquiryType: 'subscription', message: '' });
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 bg-[#f4f7f2] min-h-screen flex flex-col justify-center">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Nat Eat Fit for healthy meal subscriptions, corporate catering, or general inquiries." 
      />
      
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto w-full text-center mb-12 mt-8">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 mb-4 bg-[#8FB373]/20 text-[#354333] font-bold text-xs uppercase tracking-widest rounded-full"
        >
          We're Here to Help
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bosch text-4xl md:text-5xl text-[#354333] font-extrabold mb-4"
        >
          Contact <span className="text-[#8FB373]">NatEatFit</span>
        </motion.h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto w-full bg-white rounded-[2.5rem] shadow-xl border border-[#EBE8DE] overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Image & Info (Visual Focus) */}
        <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-full flex flex-col justify-end p-8 md:p-12 text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" 
              alt="Fresh healthy salad bowl" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2119] via-[#1a2119]/80 to-[#1a2119]/20" />
          </div>

          {/* Location Info placed over the image */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            className="relative z-10 mt-auto"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="font-bosch text-2xl font-bold mb-2">Hyderabad HQ</h3>
              <p className="font-montserrat text-white/80 text-sm leading-relaxed max-w-[250px]">
                LeanBowl Kitchens, Plot No. 45<br />
                Jubilee Hills, Telangana 500033
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4 font-montserrat text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <svg className="w-4 h-4 text-[#8FB373]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span>hello@leanbowl.in</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <svg className="w-4 h-4 text-[#8FB373]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span>+91 98765 43210</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Quick Form */}
        <div className="lg:w-7/12 p-8 md:p-12 lg:p-16">
          <h2 className="font-bosch text-2xl md:text-3xl font-bold text-[#354333] mb-2">Send an Inquiry</h2>
          <p className="font-montserrat text-[#4A5D48] text-sm mb-8">Want to start a subscription or need catering? Fill out the form below.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-montserrat text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f9faf8] border-b-2 border-[#EBE8DE] text-[#354333] text-sm px-2 py-3 focus:outline-none focus:border-[#8FB373] transition-colors rounded-t-lg"
                  placeholder="Your Name"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-montserrat text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f9faf8] border-b-2 border-[#EBE8DE] text-[#354333] text-sm px-2 py-3 focus:outline-none focus:border-[#8FB373] transition-colors rounded-t-lg"
                  placeholder="Your Number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-montserrat text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f9faf8] border-b-2 border-[#EBE8DE] text-[#354333] text-sm px-2 py-3 focus:outline-none focus:border-[#8FB373] transition-colors rounded-t-lg "
                  placeholder="Your Email Address"
                />
              </div>

              {/* Inquiry Type Dropdown */}
              <div>
                <label htmlFor="inquiryType" className="block font-montserrat text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  I am interested in...
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full bg-[#f9faf8] border-b-2 border-[#EBE8DE] text-[#354333] text-sm px-2 py-3 focus:outline-none focus:border-[#8FB373] transition-colors rounded-t-lg  appearance-none cursor-pointer"
                >
                  <option value="subscription">Monthly Subscription Plan</option>
                  <option value="corporate">Corporate Catering</option>
                  <option value="general">General Question</option>
                  <option value="support">Support / Delivery Issue</option>
                </select>
              </div>
            </div>

            {/* Message/Notes (Optional) */}
            <div>
              <label htmlFor="message" className="block font-montserrat text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[#f9faf8] border-b-2 border-[#EBE8DE] text-[#354333] text-sm px-2 py-3 focus:outline-none focus:border-[#8FB373] transition-colors rounded-t-lg  resize-none"
                placeholder="Any allergies, specific areas, or questions?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-[#354333] text-white rounded-xl font-bold tracking-wide shadow-lg shadow-[#354333]/20 hover:bg-[#8FB373] hover:text-[#1a2119] transition-all"
              >
                Submit Inquiry
              </motion.button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;