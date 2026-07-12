import React from 'react';
import { Outlet } from 'react-router-dom';

// Global Components
import Navbar from '../components/layout/header/Navbar';
import Footer from '../components/layout/Footer';


const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* <Outlet /> renders the current page (Home, About, Menu, etc.) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      
      
    </div>
  );
};

export default MainLayout;