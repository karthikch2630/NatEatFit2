import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages (Grouped by domain as per the new architecture)
import HomePage from './pages/Home/HomePage';
import MenuPage from './pages/Menu/MenuPage';
import CategoryPage from './pages/Menu/CategoryPage';
import ProductDetailsPage from './pages/Product/ProductDetailsPage';
import CartPage from './pages/Cartpage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SubscriptionPage from './pages/SubscriptionPage';
import TestimonialsPage from './pages/TestimonialPage';

// 1. Create the ScrollToTop component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top-left corner of the window
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything visible
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        {/* 2. Place it inside the Router, before your Routes */}
        <ScrollToTop />
        
        <Routes>
          {/* MainLayout wraps all these routes with Navbar, Footer, and CartDrawer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Menu & Product Routes */}
            <Route path="/menu" element={<MenuPage />} />
            
            {/* This ONE dynamic route replaces BowlsPage, OatsPage, JuicesPage, etc. */}
            <Route path="/menu/:category" element={<CategoryPage />} />
            
            {/* Individual product details */}
            <Route path="/menu/:category/:slug" element={<ProductDetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;