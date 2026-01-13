import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Portfolio from './components/Portfolio';
import Pricing from './components/AICreativeLab';
import Logo from './components/Logo';
import Layout from './components/Layout';

const Home: React.FC = () => (
  <>
    <Hero />
    <Services />
    <Equipment />
    <Portfolio />
    <Pricing />
  </>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/logo" element={<Logo />} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
