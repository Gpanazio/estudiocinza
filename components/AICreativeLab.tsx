import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    title: "Meia Diária",
    price: "R$ 600",
    features: ["4 Horas de locação", "Equipamentos grip incluídos", "Limpeza incluída", "1 Vaga de estacionamento"],
    highlight: false
  },
  {
    title: "Diária Completa",
    price: "R$ 1.000",
    features: ["8 Horas de locação", "Equipamentos grip incluídos", "Limpeza incluída", "2 Vagas de estacionamento", "Melhor Relação Custo-Benefício"],
    highlight: true
  },
  {
    title: "Editorial 10h",
    price: "R$ 1.300",
    features: ["10 Horas (Período Estendido)", "Equipamentos grip incluídos", "Limpeza incluída", "2 Vagas de estacionamento", "Suporte técnico básico"],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-transparent px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-4 block">Tarifário Transparente</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tighter">LOCAÇÃO</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative flex flex-col p-12 rounded-[40px] transition-all duration-700 ${tier.highlight ? 'bg-black text-white shadow-3xl scale-100 lg:scale-105 z-10' : 'bg-white border border-gray-100 hover:border-black'}`}>
              <h3 className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-8 ${tier.highlight ? 'text-gray-500' : 'text-gray-400'}`}>{tier.title}</h3>
              <div className="mb-10 flex items-baseline gap-2">
                  <span className="text-5xl font-display font-bold tracking-tighter">{tier.price}</span>
                  <span className="text-sm opacity-40 font-light">/ sessão</span>
              </div>
              <ul className="space-y-5 mb-12 flex-grow">
                {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-light leading-snug">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-white' : 'text-black'}`} />
                        <span className={tier.highlight ? 'text-gray-400' : 'text-gray-600'}>{f}</span>
                    </li>
                ))}
              </ul>
              <a href="https://wa.me/5521999846611" className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold transition-all shadow-lg ${tier.highlight ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}>
                  Reservar Agora
                  <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
