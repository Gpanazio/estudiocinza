import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Portfolio from './components/Portfolio';
import Pricing from './components/AICreativeLab';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* GRID ARQUITETÔNICO GLOBAL (Fundo Fixo) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: [
            'linear-gradient(#e5e7eb66 1px, transparent 1px)',
            'linear-gradient(to right, #e5e7eb66 1px, transparent 1px)'
          ].join(', '),
          backgroundSize: '56px 56px',
          backgroundPosition: 'top left',
          opacity: 0.6
        }} 
      />

      {/* Camada de Conteúdo */}
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
