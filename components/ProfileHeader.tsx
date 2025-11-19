import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  data: ProfileData;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center text-center mb-10 pt-8 animate-[fadeIn_1s_ease-out]">
      <div className="relative mb-6 group cursor-default">
        {/* Glow Effect behind image */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>
        
        {/* Profile Image */}
        <img
          src={data.image}
          alt={data.name}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 shadow-2xl"
        />
        
        {/* Verification Badge (Decorative) */}
        <div className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-1 border-2 border-black shadow-lg" title="Verified">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
        {data.name}
      </h1>
      
      <p className="text-sm md:text-base text-gray-400 tracking-[0.2em] uppercase font-light">
        {data.tagline}
      </p>
    </div>
  );
};
