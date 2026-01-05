import React from 'react';
import { MessageCircle, MapPin, ChevronDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden pt-32 md:pt-0">
      
      {/* Radial fade for better text readability against grid */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* LEFT: Content */}
        <div className="flex-1 text-center md:text-left relative z-20 min-w-[300px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cinza-100 text-cinza-800 mb-8 border border-cinza-200 animate-slide-up">
                <Star size={12} className="fill-current" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Estúdio Profissional RJ</span>
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-bold text-black mb-8 leading-[0.95] tracking-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
              Menos logística, <br />
              <span className="text-cinza-400">mais criação.</span>
            </h1>
            
            <p className="text-cinza-600 max-w-lg text-lg md:text-xl mb-12 leading-relaxed animate-slide-up mx-auto md:mx-0" style={{animationDelay: '0.2s'}}>
                Estúdio completo no Centro do Rio. Equipamentos, acústica e cenário prontos para usar: sem montagens demoradas, sem complicação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{animationDelay: '0.3s'}}>
              <a 
                href="https://wa.me/5521999846611"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-bold tracking-wide hover:bg-cinza-800 transition-all rounded shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                Reservar Data
              </a>
              <button 
                 onClick={scrollToContact}
                 className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-cinza-50 transition-colors border border-cinza-200 rounded"
              >
                Consultar Valores
              </button>
            </div>
            
             <div className="mt-16 flex items-center justify-center md:justify-start gap-2 text-cinza-500 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <MapPin size={16} />
                <span className="text-sm font-medium border-b border-cinza-300 pb-0.5">Lapa, Rua Teotônio Regadas</span>
            </div>
        </div>

        {/* RIGHT: Atmosphere Image */}
        <div className="hidden md:flex flex-1 w-full h-full items-center justify-center relative z-10">
            <div className="relative w-full max-w-lg aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1588483977959-badc9893d432?q=80&w=2000&auto=format&fit=crop" 
                  alt="Estúdio Fotográfico Minimalista" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-20"></div>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cinza-400 animate-bounce z-20">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

export default Hero;