import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SocialLink } from '../types';

interface LinkCardProps {
  link: SocialLink;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const Icon = link.icon;
  // Check if this is the VIP/Exclusive link to add special effects
  const isVip = link.id === 'vip_lounge';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center w-full p-4 overflow-hidden transition-all duration-300 ease-out 
        border rounded-xl glass-card 
        ${isVip 
          ? 'border-red-500/30 hover:border-red-500/60 bg-red-900/5 hover:bg-red-900/10' 
          : 'border-white/10 hover:border-white/30 hover:bg-white/5'
        }
        active:scale-[0.98] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
      `}
    >
      {/* Background Hover Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]`}></div>

      {/* Icon Container */}
      <div className={`
        flex-shrink-0 p-3 rounded-full transition-all duration-300 
        ${link.colorClass} 
        bg-white/5 group-hover:bg-white/10 group-hover:scale-110
      `}>
        {/* Add heartbeat animation specifically for the VIP icon */}
        <div className={isVip ? 'animate-heartbeat' : ''}>
          <Icon size={24} />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-grow px-4 text-left">
        <h3 className={`
          text-lg font-semibold tracking-wide transition-colors
          ${isVip ? 'text-red-100 group-hover:text-white' : 'text-gray-100 group-hover:text-white'}
        `}>
          {link.label}
        </h3>
        {link.subtext && (
          <p className={`
            text-xs font-light tracking-wider uppercase transition-colors
            ${isVip ? 'text-red-200/70 group-hover:text-red-200' : 'text-gray-400 group-hover:text-gray-300'}
          `}>
            {link.subtext}
          </p>
        )}
      </div>

      {/* Arrow Indicator */}
      <div className={`
        opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
        ${isVip ? 'text-red-400' : 'text-gray-300'}
      `}>
        <ArrowRight size={20} />
      </div>
    </a>
  );
};
