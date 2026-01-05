import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services'; // The Space
import Equipment from './components/Equipment'; // Equipment List
import Portfolio from './components/Portfolio'; // Gallery
import Pricing from './components/AICreativeLab'; // Repurposed Pricing Component
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* GLOBAL ARCHITECTURAL GRID (Fixed Background) */}
      <div className="fixed inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(to right, #e5e7eb 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      {/* Content Wrapper (Z-10 to sit above grid) */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Equipment />
          <Portfolio />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;