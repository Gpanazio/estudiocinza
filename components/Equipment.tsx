import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const includedGear = [
  "2x Tripés C-Stand Avenger (com braço e mola)",
  "2x Tripés de alumínio médios (Mako)",
  "4x Pesos de areia (Sandbags)",
  "2x Girafas de luz médias",
  "4x Extensões pretas (10m cada)",
  "1x Escada de alumínio (7 degraus)",
  "1x Arara de roupas com 20 cabides",
  "1x Vaporizador de roupas (Steamer)",
  "4x Claquetes de isopor (Preto/Branco)",
  "Banquetas altas e cadeiras de direção"
];

const Equipment: React.FC = () => {
  return (
    <section id="equipment" className="py-32 bg-cinza-950 text-white px-6">
      <div className="max-w-5xl mx-auto text-center mb-20">
         <span className="text-cinza-400 font-bold uppercase tracking-wider text-xs">O que está incluso?</span>
         <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-white">Equipamentos no Pacote</h2>
         <p className="text-cinza-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Não perca tempo alugando o básico. Nossa diária já inclui o grip essencial para sua luz.
         </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16">
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-16">
            {includedGear.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-cinza-200 text-lg font-light">{item}</span>
                </div>
            ))}
        </div>
        <div className="mt-12 pt-10 border-t border-white/10 text-center">
            <p className="text-sm text-cinza-500">
                *Flashs, luz contínua (Aputure/Godox) e fundos de papel coloridos disponíveis para locação à parte. Consulte valores.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Equipment;