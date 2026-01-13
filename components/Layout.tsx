import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
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
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
