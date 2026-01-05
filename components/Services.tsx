import React from 'react';
import { Coffee, User, HardDrive } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="space" className="py-24 md:py-32 bg-transparent px-6 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">
          
          {/* Lado Esquerdo: Descrição */}
          <div className="lg:w-1/3 sticky top-40 z-20">
              <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-1 bg-black"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Planta Técnica</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-black mb-8 tracking-tighter leading-none">
                  O ESPAÇO
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                  Projetado para o fluxo audiovisual contemporâneo. O Estúdio Cinza oferece 52m² de área útil divididos de forma inteligente entre set, produção e áreas de apoio.
              </p>
              <div className="flex flex-col gap-6 mt-12 border-t border-gray-100 pt-10">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center font-bold text-xs uppercase tracking-widest shadow-lg">Set</div>
                      <span className="text-sm text-gray-600 font-medium">Ciclorama Infinito Integrado</span>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-black rounded flex items-center justify-center">
                          <User size={16} />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">Camarim e Área de Troca</span>
                  </div>
              </div>
          </div>

          {/* Lado Direito: Planta Baixa (Fiel ao mapaestudio.png) */}
          <div className="lg:w-2/3 w-full bg-gray-50/90 backdrop-blur-md p-6 md:p-16 rounded-[40px] border border-gray-200 flex items-center justify-center shadow-inner relative">
              <div className="relative w-full aspect-square md:aspect-[1.3/1] select-none text-black">
                  
                  {/* --- BLOCO SUPERIOR --- */}
                  
                  {/* Estúdio / Set (Superior Esquerda) */}
                  <div className="absolute top-0 left-0 w-[60%] h-[65%] border-2 border-black bg-white hover:bg-gray-50 transition-all duration-500 z-10 flex flex-col justify-center items-center shadow-md overflow-hidden">
                      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gray-100 rounded-tl-[40px] opacity-40"></div>
                      <span className="font-display font-bold text-sm md:text-2xl text-black uppercase tracking-[0.4em]">Estúdio</span>
                      <div className="text-[9px] md:text-[11px] text-gray-400 font-mono mt-2 uppercase tracking-widest">Set Principal</div>
                  </div>

                  {/* Camarim (Superior Direita) */}
                  <div className="absolute top-0 right-0 w-[40%] h-[40%] border-t-2 border-r-2 border-b-2 border-black bg-white z-10 p-6 flex flex-col items-center justify-center shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                          <User size={14} className="text-gray-300" />
                          <span className="font-display font-bold text-[10px] md:text-xs uppercase tracking-widest">Camarim</span>
                      </div>
                      <div className="w-full h-1 bg-gray-50 rounded-full border border-gray-100"></div>
                      <div className="absolute top-2 right-2 w-6 h-6 border-l border-b border-gray-100 opacity-30 rounded-bl-xl"></div>
                  </div>

                  {/* Copa (Abaixo do Camarim) */}
                  <div className="absolute top-[40%] right-0 w-[40%] h-[25%] border-r-2 border-b-2 border-black bg-white flex flex-col items-center justify-center z-10 shadow-sm overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 4px)'}}></div>
                      <div className="flex items-center gap-2 z-20">
                          <Coffee size={14} className="text-gray-400" />
                          <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Copa Técnica</span>
                      </div>
                  </div>

                  {/* --- BLOCO INFERIOR --- */}
                  
                  {/* Lounge (Inferior Esquerda) */}
                  <div className="absolute top-[65%] left-0 w-[50%] h-[35%] border-l-2 border-b-2 border-r-2 border-black bg-white z-10 p-8 shadow-sm flex flex-col justify-center items-center">
                      <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest block">Lounge</span>
                      <div className="mt-4 flex gap-2">
                          <div className="w-10 h-6 border border-gray-100 rounded-sm"></div>
                          <div className="w-10 h-6 border border-gray-100 rounded-sm"></div>
                      </div>
                      {/* Porta de Entrada */}
                      <div className="absolute bottom-[-2px] left-12 w-16 h-1 bg-white border-x border-black z-30"></div>
                      <div className="absolute bottom-0 left-12 w-16 h-16 border-l border-t border-gray-200 rounded-tl-full -translate-y-full opacity-30 pointer-events-none"></div>
                  </div>

                  {/* Suporte: Depósito + WC (Inferior Direita) */}
                  <div className="absolute top-[65%] left-[50%] w-[50%] h-[35%] border-b-2 border-r-2 border-black bg-gray-50/50 z-10 flex shadow-sm">
                      <div className="w-1/2 border-r border-gray-200 flex flex-col items-center justify-center p-4 text-center">
                           <HardDrive size={16} className="text-gray-200 mb-2" />
                           <span className="text-[7px] md:text-[9px] font-bold uppercase leading-tight tracking-widest text-gray-400">Depósito Grip</span>
                      </div>
                      <div className="w-1/2 flex flex-col items-center justify-center p-4 text-center bg-white">
                           <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">WC</span>
                           <div className="mt-2 w-4 h-4 border border-gray-200 rounded-full"></div>
                      </div>
                  </div>

                  {/* Cotas Técnicas */}
                  <div className="absolute top-[-35px] left-0 w-[60%] flex items-center justify-center">
                      <div className="h-[1px] bg-gray-300 w-full relative">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rotate-45"></div>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rotate-45"></div>
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-gray-400 bg-gray-50 px-2 tracking-widest uppercase italic">5.30m</span>
                      </div>
                  </div>
                  <div className="absolute top-0 left-[-35px] h-[65%] flex items-center">
                      <div className="w-[1px] bg-gray-300 h-full relative">
                          <span className="absolute left-[-22px] top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-400 [writing-mode:vertical-lr] rotate-180 bg-gray-50 py-2 tracking-widest uppercase italic">4.15m</span>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    </section>
  );
};

export default Services;
