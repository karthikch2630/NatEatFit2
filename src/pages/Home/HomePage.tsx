import React from 'react';
import SEO from '../../components/SEO';

// Home-specific sections
import HeroSection from "../../components/sections/home/HeroSection";
import SubscriptionSection from "../../components/sections/home/SubscriptionSection";
import OurPromise from "../../components/sections/home/OurPromise";
import ProcessSection from "../../components/sections/home/ProcessSection";

// Shared sections (used on Home, but might be used on other pages too)
import MenuSection from "../../components/sections/shared/MenuSection"; 
import CTASection from "../../components/sections/shared/CTASection";

const HomePage: React.FC = () => {
  return (
    <main>
      <SEO 
        title="Home" 
        description="Welcome to Nat Eat Fit. Enjoy our premium healthy rice bowls, cold-pressed juices, and organic meals." 
      />
      <HeroSection />
      
      {/* Assuming 'Categories' was your Menu overview section */}
      <MenuSection /> 
      
      <SubscriptionSection />
      <OurPromise />
      <ProcessSection />
      <CTASection />
    </main>
  );
};

export default HomePage;