import React, { useState, useEffect } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkCard } from './components/LinkCard';
import { PROFILE_DATA, SOCIAL_LINKS } from './constants';
import { Share2, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: PROFILE_DATA.name,
          text: `Check out ${PROFILE_DATA.name}'s profile!`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("Link copied to clipboard!");
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black text-white selection:bg-purple-500 selection:text-white">
      
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[150px]" />
      </div>

      {/* Noise Texture Overlay for texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Top Bar */}
      <div className="relative z-20 flex justify-end p-6 max-w-2xl mx-auto">
        <button 
          onClick={handleShare}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
          aria-label="Share profile"
        >
          <Share2 size={20} />
        </button>
      </div>

      {/* Main Content */}
      <main className={`relative z-10 flex flex-col items-center px-6 pb-12 max-w-2xl mx-auto transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        <ProfileHeader data={PROFILE_DATA} />

        <div className="w-full space-y-2">
          {SOCIAL_LINKS.map((link, index) => (
            <div 
              key={link.id} 
              className="transform transition-all duration-500"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'backwards'
              }}
            >
               <LinkCard link={link} />
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default App;