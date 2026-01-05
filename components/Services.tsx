import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="space" className="py-32 bg-transparent px-6 border-b border-cinza-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
            
            {/* LEFT: Description */}
            <div className="lg:w-1/3 sticky top-32">
                <h2 className="text-6xl md:text-8xl font-display font-bold text-cinza-900 mb-10 tracking-tighter leading-none whitespace-nowrap">
                    O ESPAÇO
                </h2>
                <div className="w-20 h-2 bg-black mb-10"></div>

                <p className="text-cinza-600 leading-relaxed mb-6 text-lg md:text-xl font-light">
                    O Estúdio Cinza foi desenhado por fotógrafos para fotógrafos. Um ambiente limpo, técnico e sem distrações visuais.
                </p>
                <p className="text-cinza-600 leading-relaxed text-lg md:text-xl font-light">
                    Contamos com camarim completo, copa equipada e área de produção integrada ao estúdio, permitindo que cliente e equipe trabalhem com conforto.
                </p>
            </div>

            {/* RIGHT: The Blueprint */}
            <div className="lg:w-2/3 w-full bg-cinza-50/80 backdrop-blur-sm p-6 md:p-12 rounded-xl border border-cinza-200 flex items-center justify-center">
                
                 {/* Blueprint Container - Responsive Aspect Ratio */}
                <div className="relative w-full aspect-square md:aspect-[1.1/1] select-none text-cinza-900">
                
                {/* --- MAIN STRUCTURE (Absolute Positioning %) --- */}
                
                {/* 1. ESTÚDIO (Top Left) */}
                <div className="absolute top-0 left-0 w-[58%] h-[48%] border-2 border-cinza-900 bg-white hover:bg-cinza-50 transition-colors z-10 flex flex-col justify-center items-center group shadow-sm">
                    <span className="font-display font-bold text-sm md:text-xl text-cinza-800">Estúdio</span>
                    <div className="text-[8px] md:text-[10px] text-cinza-500 font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Ciclorama Infinito</div>
                </div>

                {/* Dimensions for Studio */}
                <div className="absolute top-[-20px] left-0 w-[58%] text-center border-b border-cinza-400">
                    <span className="relative -top-2 bg-cinza-50 px-1 text-[8px] md:text-[10px] font-mono text-cinza-600">5,30m</span>
                </div>
                <div className="absolute top-0 left-[-20px] h-[48%] flex flex-col justify-center items-end border-r border-cinza-400 pr-1">
                    <span className="bg-cinza-50 py-1 text-[8px] md:text-[10px] font-mono text-cinza-600 [writing-mode:vertical-lr] rotate-180">4,15m</span>
                </div>


                {/* 2. LOUNGE (Bottom Left) */}
                <div className="absolute top-[48%] left-0 w-[44%] h-[48%] border-l-2 border-b-2 border-r-2 border-cinza-900 bg-white hover:bg-cinza-50 transition-colors z-10 p-2 md:p-4 shadow-sm">
                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 leading-none">
                        <span className="font-display font-bold text-xs md:text-sm text-cinza-800 block">Espaço café</span>
                        <span className="font-display font-bold text-xs md:text-sm text-cinza-800 block">/lounge</span>
                    </div>
                    {/* Props: Oval Table */}
                    <div className="absolute bottom-4 left-10 md:left-16 w-10 md:w-16 h-5 md:h-8 border border-cinza-400 rounded-[50%] rotate-0"></div>
                    <div className="absolute bottom-6 left-2 md:left-4 w-4 md:w-6 h-8 md:h-12 border border-cinza-400 rounded-[50%] rotate-0"></div>
                    
                    {/* Door Arc */}
                    <div className="absolute bottom-0 right-[-1px] w-6 md:w-8 h-6 md:h-8 border-t border-l border-cinza-900 rounded-tl-full pointer-events-none origin-bottom-right"></div>
                </div>

                {/* Dimensions for Lounge */}
                <div className="absolute top-[48%] left-[-20px] h-[48%] flex flex-col justify-center items-end border-r border-cinza-400 pr-1">
                    <span className="bg-cinza-50 py-1 text-[8px] md:text-[10px] font-mono text-cinza-600 [writing-mode:vertical-lr] rotate-180">4,15m</span>
                </div>
                <div className="absolute bottom-[-20px] left-0 w-[44%] text-center border-t border-cinza-400 pt-1">
                    <span className="bg-cinza-50 px-1 text-[8px] md:text-[10px] font-mono text-cinza-600">4,0m</span>
                </div>
                {/* The little notch on the bottom left corner */}
                <div className="absolute bottom-[-2px] left-[-2px] w-4 h-4 bg-white border-l-2 border-b-2 border-cinza-900 z-20 translate-y-2 -translate-x-2"></div>


                {/* 3. SERVICE BLOCK (Right of Studio) */}
                <div className="absolute top-0 left-[58%] w-[25%] h-[32%] z-10">
                    
                    {/* Bathroom (Top) */}
                    <div className="absolute top-0 left-0 w-[60%] h-[50%] border-t-2 border-r-2 border-b-2 border-cinza-900 bg-white flex flex-col items-center justify-center p-1 text-center shadow-sm">
                        <span className="text-[6px] md:text-[8px] font-bold leading-tight block">Banheiro</span>
                        <span className="hidden md:block text-[6px] font-mono text-cinza-500">1,25x1,50</span>
                        {/* Door Arc */}
                        <div className="absolute top-[20%] left-[-8px] w-3 md:w-4 h-3 md:h-4 border-b border-r border-cinza-900 rounded-br-full"></div>
                    </div>

                    {/* Equipamentos (Right of Bathroom) */}
                    <div className="absolute top-[15%] left-[60%] w-[100%] h-[85%] border-t-2 border-r-2 border-b-2 border-cinza-900 bg-white flex items-center justify-center p-1 text-center shadow-sm z-20 hover:bg-cinza-50 transition-colors">
                        <span className="text-[6px] md:text-[8px] font-bold [writing-mode:vertical-lr] md:[writing-mode:horizontal-tb]">Equip.</span>
                    </div>

                    {/* Copa (Below Bathroom - Hatched) */}
                    <div className="absolute top-[50%] left-0 w-[60%] h-[50%] border-r-2 border-b-2 border-cinza-900 bg-white flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 4px)'}}></div>
                    </div>
                    <span className="absolute -bottom-4 left-1 md:left-2 text-[8px] md:text-[10px] font-bold text-cinza-500">Copa</span>

                </div>


                {/* 4. CAMARIM (Right Side - Bottom) */}
                <div className="absolute top-[64%] left-[44%] right-0 h-[32%] border-t-2 border-r-2 border-b-2 border-cinza-900 bg-white hover:bg-cinza-50 transition-colors z-10 p-3 md:p-6 flex flex-col justify-end items-end shadow-sm">
                    
                    <span className="font-display font-bold text-sm md:text-lg">Camarim</span>
                    
                    {/* Provador (Curved Corner Top Right) */}
                    <div className="absolute top-0 right-0 w-10 md:w-16 h-10 md:h-16 border-l border-b border-cinza-400 rounded-bl-[20px] md:rounded-bl-[40px] flex items-center justify-center">
                        <span className="text-[6px] md:text-[8px] font-bold text-cinza-400 rotate-45 -mt-1 md:-mt-2 -ml-1 md:-ml-2">Provador</span>
                    </div>

                    {/* Furniture: Oval Table */}
                    <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 w-8 md:w-12 h-6 md:h-8 border border-cinza-400 rounded-[50%]"></div>
                    
                    {/* Horizontal Table Box */}
                    <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-20 md:w-32 h-6 md:h-10 border border-cinza-300 bg-cinza-50"></div>
                </div>

                {/* Dimensions for Camarim */}
                <div className="absolute top-[64%] left-[44%] w-[56%] border-t border-cinza-400 text-center">
                    <span className="relative -top-3 bg-cinza-50 px-1 text-[8px] md:text-[10px] font-mono text-cinza-600">4,60m</span>
                </div>
                <div className="absolute top-[64%] right-[-20px] h-[32%] flex flex-col justify-center border-l border-cinza-400 pl-1">
                    <span className="bg-cinza-50 py-1 text-[8px] md:text-[10px] font-mono text-cinza-600 [writing-mode:vertical-lr]">2,75m</span>
                </div>
                
                {/* Vertical Spacer Line for the right side gap */}
                <div className="absolute top-0 right-[-5px] h-[20%] border-l border-dashed border-cinza-300">
                        <span className="absolute top-2 left-1 text-[6px] md:text-[8px] text-cinza-400 font-mono">1,0m</span>
                </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;