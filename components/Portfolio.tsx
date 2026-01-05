import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

// Simulating latest posts with high-quality studio aesthetic images
const instagramPosts = [
  { 
    id: 1, 
    url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1470&auto=format&fit=crop", 
    likes: "124",
    comments: "8"
  },
  { 
    id: 2, 
    url: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1530&auto=format&fit=crop", 
    likes: "89",
    comments: "3"
  },
  { 
    id: 3, 
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop", 
    likes: "256",
    comments: "12"
  },
  { 
    id: 4, 
    url: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2670&auto=format&fit=crop", 
    likes: "142",
    comments: "5"
  },
  { 
    id: 5, 
    url: "https://images.unsplash.com/photo-1534234828563-02511c766f76?q=80&w=2574&auto=format&fit=crop", 
    likes: "310",
    comments: "18"
  },
  { 
    id: 6, 
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", 
    likes: "98",
    comments: "4"
  }
];

const Portfolio: React.FC = () => {
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
                href="https://www.instagram.com/oestudiocinza/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg text-sm font-bold hover:bg-cinza-800 transition-colors shadow-md"
            >
                <Instagram size={18} />
                Seguir no Instagram
            </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href="https://www.instagram.com/oestudiocinza/"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-cinza-100 cursor-pointer md:rounded-lg shadow-sm hover:shadow-xl transition-all"
            >
              <img 
                src={post.url} 
                alt="Instagram Post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2 font-bold">
                    <Heart className="fill-white" size={20} />
                    <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 font-bold">
                    <MessageCircle className="fill-white" size={20} />
                    <span>{post.comments}</span>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="text-white drop-shadow-lg" size={20} />
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
             <a 
                href="https://www.instagram.com/oestudiocinza/" 
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