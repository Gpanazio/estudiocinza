import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const gearList = [
  "2x Tripés C-Stand Avenger (com braço e mola)",
  "2x Tripés de alumínio médios (Mako)",
  "4x Pesos de areia (Sandbags) profissionais",
  "2x Girafas de luz médias de alta resistência",
  "4x Extensões pretas reforçadas (10m cada)",
  "1x Escada de alumínio industrial (7 degraus)",
  "1x Arara de roupas robusta com 20 cabides",
  "1x Vaporizador de roupas profissional (Steamer)",
  "4x Claquetes de isopor técnico (Preto/Branco)",
  "Banquetas altas e cadeiras de direção ergonômicas"
];

const Equipment: React.FC = () => {
  return (
    <section id="equipment" className="py-32 bg-gray-950 text-white px-6">
      <div className="max-w-5xl mx-auto text-center mb-24">
         <span className="text-gray-500 font-bold uppercase tracking-[0.5em] text-[10px]">Inventário Técnico</span>
         <h2 className="text-4xl md:text-6xl font-display font-bold mt-6 tracking-tight">Equipamentos Inclusos</h2>
         <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
             A nossa diária contempla o grip essencial para a sua luz. Eliminamos a burocracia logística para que a sua equipe se concentre na imagem.
         </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-y-8 gap-x-16">
            {gearList.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                    <div className="p-1 rounded-full bg-green-500/10 group-hover:bg-green-500/30 transition-all duration-300">
                      <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                    </div>
                    <span className="text-gray-300 text-base font-light group-hover:text-white transition-colors duration-300">{item}</span>
                </div>
            ))}
        </div>
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500 italic uppercase tracking-widest">
                *Consulte a nossa lista de opcionais para LEDs Aputure e Flashs Godox.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
