import React from 'react';
import { MessageCircle, MapPin, ChevronDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full flex items-center overflow-hidden pt-24 md:pt-0">
      
      {/* Background Grid Subtle Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT: Content */}
        <div className="flex-1 text-center md:text-left relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cinza-100 text-cinza-900 mb-6 border border-cinza-200 animate-slide-up shadow-sm">
                <Star size={14} className="fill-cinza-900" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Estúdio Profissional RJ</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-black mb-6 leading-[1.1] tracking-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
              Menos logística, <br />
              <span className="text-cinza-400">mais criação.</span>
            </h1>
            
            <p className="text-cinza-600 max-w-lg text-lg md:text-xl mb-10 leading-relaxed animate-slide-up mx-auto md:mx-0 font-light" style={{animationDelay: '0.2s'}}>
                Infraestrutura completa no coração da Lapa. Equipamentos de ponta e ambientes prontos para o seu próximo projeto fotográfico ou audiovisual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{animationDelay: '0.3s'}}>
              <a 
                href="https://wa.me/5521999846611"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-bold tracking-wide hover:bg-cinza-900 transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle size={18} />
                Reservar Data
              </a>
              <button 
                 onClick={scrollToPricing}
                 className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-cinza-50 transition-colors border border-cinza-200 rounded-lg shadow-sm"
              >
                Consultar Valores
              </button>
            </div>
            
             <div className="mt-12 flex items-center justify-center md:justify-start gap-3 text-cinza-500 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <div className="p-2 bg-cinza-50 rounded-full border border-cinza-100">
                    <MapPin size={16} />
                </div>
                <a
                  href="https://www.google.com/maps?q=Rua+Teot%C3%B4nio+Regadas,+26,+sala+604+-+Lapa,+Rio+de+Janeiro,+RJ"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium border-b border-cinza-200 pb-0.5 hover:text-cinza-700 transition-colors"
                >
                  Rua Teotônio Regadas, 26, sala 604 - Lapa, Rio de Janeiro/RJ
                </a>
            </div>
        </div>

        {/* RIGHT: Atmosphere Image */}
        <div className="hidden md:flex flex-1 w-full items-center justify-center relative z-10">
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-[12px] border-white ring-1 ring-cinza-100">
                <img 
                  src="https://images.unsplash.com/photo-1588483977959-badc9893d432?q=80&w=2000&auto=format&fit=crop" 
                  alt="Estúdio Fotográfico Minimalista" 
                  className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            {/* Geometric Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-cinza-200 rounded-br-2xl -z-10"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cinza-300 animate-bounce z-20">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Explore</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
};

export default Hero;
