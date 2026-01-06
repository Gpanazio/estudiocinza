import React, { useEffect, useMemo, useState } from 'react';
import { Instagram, ExternalLink, Loader2 } from 'lucide-react';
import { fetchInstagramMedia, InstagramMedia } from '../services/instagramService';

const INSTAGRAM_HANDLE = 'oestudiocinza';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

const Portfolio: React.FC = () => {
  const [posts, setPosts] = useState<InstagramMedia[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInstagram = async () => {
      try {
        const media = await fetchInstagramMedia(6);
        setPosts(media);
      } catch (err) {
        console.error(err);
        setError('Não foi possível carregar o feed do Instagram no momento.');
      } finally {
        setLoading(false);
      }
    };

    loadInstagram();
  }, []);

  const displayedPosts = useMemo(() => {
    return posts
      .filter((post) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' || post.media_type === 'VIDEO')
      .slice(0, 6);
  }, [posts]);

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

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 min-h-[240px]">
          {loading && (
            <div className="col-span-full flex items-center justify-center py-8 text-cinza-500 gap-2">
              <Loader2 className="animate-spin" size={20} />
              <span>Carregando posts reais do Instagram...</span>
            </div>
          )}

          {!loading && error && (
            <div className="col-span-full text-center text-cinza-500 text-sm bg-cinza-50 border border-cinza-100 rounded-lg p-4">
              {error}{' '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-black underline underline-offset-4"
              >
                Ver perfil direto no Instagram
              </a>
            </div>
          )}

          {!loading &&
            !error &&
            displayedPosts.map((post) => (
              <a
                key={post.id}
                href={post.permalink || INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden bg-cinza-100 cursor-pointer md:rounded-lg shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url}
                  alt={post.caption || 'Instagram Post'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="text-white drop-shadow-lg" size={20} />
                </div>
              </a>
            ))}
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
