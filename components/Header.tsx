import React, { useState, useEffect } from 'react';
import { Menu, X, Square, MessageCircle, ArrowRight } from 'lucide-react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'O Espaço', id: 'space' },
  { label: 'Equipamentos', id: 'equipment' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Valores', id: 'pricing' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating Dock */}
      <header className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${isScrolled ? 'w-auto' : 'w-[90%] max-w-5xl'}`}>
        <div className={`relative flex items-center justify-between w-full px-2 py-2 bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full transition-all duration-500 ${isScrolled ? 'gap-6 pr-2' : 'gap-12 pr-2'}`}>
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 pl-4 group shrink-0">
            <div className="bg-black text-white p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
               <Square className="w-4 h-4 fill-current" />
            </div>
            <div className={`flex flex-col text-left transition-all duration-300 ${isScrolled ? 'w-0 opacity-0 overflow-hidden scale-90' : 'w-auto opacity-100 scale-100'}`}>
              <span className="text-sm font-bold tracking-tighter font-display text-black leading-none uppercase">Estúdio Cinza</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest leading-none mt-1">Rio de Janeiro</span>
            </div>
          </button>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black hover:bg-black/5 rounded-full transition-all">
                {item.label}
              </button>
            ))}
          </nav>

          <a href="https://wa.me/5521999846611" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-black text-white pl-5 pr-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all group shrink-0">
            <span className={isScrolled ? 'hidden' : 'block'}>Reservar</span>
            {isScrolled && <MessageCircle size={14}/>}
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={12} />
            </div>
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl px-4 py-3 flex justify-between items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2">
              <div className="bg-black text-white p-1 rounded">
                <Square className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-bold font-display tracking-tight">CINZA</span>
            </button>
            <div className="flex items-center gap-2">
               <a href="https://wa.me/5521999846611" className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-xl shadow-lg">
                 <MessageCircle size={18} />
               </a>
               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-10 h-10 flex items-center justify-center bg-gray-100 text-black rounded-xl border border-gray-200">
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-3xl p-4 shadow-2xl animate-fade-in flex flex-col gap-2">
             {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="w-full text-left px-5 py-4 text-sm font-bold uppercase tracking-widest text-gray-800 border-b border-gray-50 last:border-0">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
