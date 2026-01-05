import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    title: "Meia Diária (4h)",
    price: "R$ 600",
    features: ["Período: Manhã ou Tarde", "Todos equipamentos inclusos", "Limpeza inclusa", "1 Vaga de estacionamento"],
    highlight: false
  },
  {
    title: "Diária Completa (8h)",
    price: "R$ 1.000",
    features: ["Período: 09h às 17h", "Todos equipamentos inclusos", "Limpeza inclusa", "2 Vagas de estacionamento", "Melhor Custo-Benefício"],
    highlight: true
  },
  {
    title: "Editorial (10h)",
    price: "R$ 1.300",
    features: ["Período flexível", "Todos equipamentos inclusos", "Limpeza inclusa", "2 Vagas de estacionamento", "Assistente de estúdio (opcional +$)"],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-transparent px-6 border-t border-cinza-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-cinza-900 mb-6">Valores</h2>
          <p className="text-cinza-600 text-lg">Sem taxas escondidas. O que você vê é o que você paga.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-sm border ${tier.highlight ? 'border-black ring-1 ring-black shadow-xl scale-105 z-10' : 'border-cinza-200'}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    Mais Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-cinza-900 mb-2">{tier.title}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight text-black">{tier.price}</span>
                <span className="text-cinza-500">/sessão</span>
              </div>
              
              <ul className="space-y-5 mb-10">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-cinza-600 leading-relaxed">
                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                        {feature}
                    </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/5521999846611?text=Olá, gostaria de reservar uma diária."
                target="_blank"
                rel="noreferrer"
                className={`block w-full py-4 px-6 rounded-lg text-center font-bold tracking-wide transition-colors ${tier.highlight ? 'bg-black text-white hover:bg-cinza-800' : 'bg-cinza-100 text-cinza-900 hover:bg-cinza-200'}`}
              >
                Reservar Agora
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-cinza-500">
            <p>Hora extra: R$ 150/h • Finais de semana e feriados: acréscimo de 20%</p>
            <p className="mt-2">Formas de pagamento: PIX (5% desc) ou Cartão de Crédito em até 3x.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;