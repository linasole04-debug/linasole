import React, { useState, useEffect, useMemo } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkCard } from './components/LinkCard';
import { PROFILE_DATA, SOCIAL_LINKS } from './constants';
import { Share2, Heart } from 'lucide-react';

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

  // Generate random particles (Floating dust)
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 15}s`
    }));
  }, []);

  // Generate Twinkling Stars
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: `star-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2}px`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  // Generate Shooting Stars
  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      id: `shoot-${i}`,
      left: `${Math.random() * 80 + 20}%`, // Start more to the right
      top: `${Math.random() * 50}%`, // Start in upper half
      delay: `${Math.random() * 10 + i * 3}s`
    }));
  }, []);

  // Generate Flying Hearts
  const floatingHearts = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `heart-${i}`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 20 + 10, // 10px to 30px
      duration: `${Math.random() * 10 + 10}s`, // 10s to 20s duration
      delay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.2 + 0.1 // 0.1 to 0.3 opacity (subtle)
    }));
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black text-white selection:bg-pink-500 selection:text-white">
      
      {/* Deep Pink Background Gradient Base */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0f0205] via-[#1a050a] to-[#2e0b16] z-0" />

      {/* Dynamic Animated Blobs (Pink/Magenta Theme) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-700/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-fuchsia-800/20 rounded-full mix-blend-screen filter blur-[80px] opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-rose-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-4000" />
      </div>

      {/* Twinkling Stars Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {stars.map((s) => (
          <div
            key={s.id}
            className="twinkle-star"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: s.delay
            }}
          />
        ))}
      </div>

      {/* Shooting Stars Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {shootingStars.map((s) => (
          <div
            key={s.id}
            className="shooting-star"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay
            }}
          />
        ))}
      </div>

      {/* Floating Hearts Layer (Pink/Red) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((h) => (
          <div
            key={h.id}
            className="animate-float-heart text-pink-500/60"
            style={{
              left: h.left,
              width: `${h.size}px`,
              height: `${h.size}px`,
              animationDuration: h.duration,
              animationDelay: h.delay,
              opacity: h.opacity
            }}
          >
            <Heart fill="currentColor" strokeWidth={0} size={h.size} />
          </div>
        ))}
      </div>

      {/* Floating Particles (Dust) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Top Bar */}
      <div className="relative z-20 flex justify-end p-6 max-w-2xl mx-auto">
        <button 
          onClick={handleShare}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white backdrop-blur-sm border border-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          aria-label="Share profile"
        >
          <Share2 size={20} />
        </button>
      </div>

      {/* Main Content */}
      <main className={`relative z-10 flex flex-col items-center px-6 pb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <ProfileHeader data={PROFILE_DATA} />

        <div className="w-full space-y-4">
          {SOCIAL_LINKS.map((link, index) => (
            <div 
              key={link.id} 
              className="transform transition-all duration-700 hover:z-10"
              style={{ 
                animationDelay: `${index * 150}ms`,
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
