import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 px-6 border-t border-cinza-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-3xl font-display font-bold text-black mb-8">Vamos agendar?</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://wa.me/5521999846611" className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full font-bold hover:bg-green-100 transition-colors">
                <MessageCircle size={20} />
                WhatsApp: (21) 99984-6611
            </a>
            <a href="mailto:contato@estudiocinza.com" className="flex items-center gap-2 px-6 py-3 bg-cinza-50 text-cinza-700 rounded-full font-bold hover:bg-cinza-100 transition-colors">
                <Mail size={20} />
                contato@estudiocinza.com
            </a>
             <a href="https://www.instagram.com/oestudiocinza/" className="flex items-center gap-2 px-6 py-3 bg-cinza-50 text-cinza-700 rounded-full font-bold hover:bg-cinza-100 transition-colors">
                <Instagram size={20} />
                @oestudiocinza
            </a>
        </div>

        <div className="w-full h-px bg-cinza-100 mb-8" />
        
        <div className="text-cinza-400 text-xs">
            <p>&copy; {new Date().getFullYear()} Estúdio Cinza. Rua Teotônio Regadas, 26, sala 604 - Lapa, Rio de Janeiro/RJ.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;