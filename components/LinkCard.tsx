import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SocialLink } from '../types';

interface LinkCardProps {
  link: SocialLink;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center w-full p-4 mb-4 overflow-hidden transition-all duration-300 ease-out border rounded-xl glass-card border-white/10 hover:border-white/20 hover:bg-white/5 active:scale-[0.98]"
    >
      {/* Background Hover Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]`}></div>

      {/* Icon Container */}
      <div className={`flex-shrink-0 p-3 rounded-full bg-white/5 transition-colors duration-300 ${link.colorClass} group-hover:bg-white/10`}>
        <Icon size={24} />
      </div>

      {/* Text Content */}
      <div className="flex-grow px-4 text-left">
        <h3 className="text-lg font-semibold text-gray-100 tracking-wide group-hover:text-white transition-colors">
          {link.label}
        </h3>
        {link.subtext && (
          <p className="text-xs text-gray-400 font-light tracking-wider uppercase group-hover:text-gray-300 transition-colors">
            {link.subtext}
          </p>
        )}
      </div>

      {/* Arrow Indicator */}
      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-300">
        <ArrowRight size={20} />
      </div>
    </a>
  );
};
