import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';

const INSTAGRAM_HANDLE = 'oestudiocinza';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
const LIGHTWIDGET_SRC = 'https://cdn.lightwidget.com/widgets/a19c8a3c6f085a4e9d342fc7e53f6d36.html';
const LIGHTWIDGET_SCRIPT_ID = 'lightwidget-script';

const Portfolio: React.FC = () => {
  useEffect(() => {
    const existingScript = document.getElementById(LIGHTWIDGET_SCRIPT_ID);
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.id = LIGHTWIDGET_SCRIPT_ID;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="gallery" className="py-32 bg-transparent px-6 border-b border-cinza-100/50">
      <div className="max-w-5xl mx-auto">
        
        {/* Instagram Header */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] rounded-full mb-6 shadow-lg">
                <div className="w-full h-full bg-white rounded-full p-1">
                    <img 
                        src="https://images.unsplash.com/photo-1590176885994-3e91c78103c8?q=80&w=200&auto=format&fit=crop" 
                        alt="Profile" 
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
            
            <h2 className="text-3xl font-display font-bold text-black flex items-center gap-2">
                @oestudiocinza
                <span className="text-blue-500 text-sm align-top"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span>
            </h2>
            <p className="text-cinza-500 text-base mb-8 mt-2 max-w-md mx-auto">
                Bastidores, setups de luz e produções que rolam por aqui. Siga nosso perfil para inspiração diária.
            </p>
            
            <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-cinza-800 transition-colors shadow-md"
            >
                <Instagram size={18} />
                Seguir no Instagram
            </a>
        </div>

        {/* Feed Grid - LightWidget embed */}
        <div className="w-full overflow-hidden rounded-lg shadow-sm border border-cinza-100">
          <iframe
            src={LIGHTWIDGET_SRC}
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget w-full"
            style={{ border: 0, overflow: 'hidden', width: '100%' }}
            title="Instagram feed do Estúdio Cinza"
          />
        </div>
        
        <div className="mt-10 text-center md:hidden">
             <a 
                href={INSTAGRAM_URL} 
                className="text-cinza-500 text-xs font-bold uppercase tracking-widest hover:text-black transition-colors"
            >
                Ver feed completo &rarr;
            </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
