import { Instagram, Twitter, Heart } from 'lucide-react';
import { SocialLink, ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Lina Sole",
  tagline: "Model • Creator • Muse",
  // Neutral flower image (White flower on dark background)
  image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=600&auto=format&fit=crop",
  footerText: "© 2024 Lina Sole. All Rights Reserved."
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    subtext: '@linas_ole',
    url: 'https://www.instagram.com/linas_ole/',
    icon: Instagram,
    colorClass: 'group-hover:text-pink-500'
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    subtext: '@linas_ole',
    url: 'https://x.com/linas_ole',
    icon: Twitter,
    colorClass: 'group-hover:text-blue-400'
  },
  {
    id: 'vip_lounge',
    label: 'Private Exclusive Lounge',
    subtext: 'Members Only Access',
    url: 'https://dfans.co/linasole?c=1',
    icon: Heart,
    colorClass: 'text-red-500 group-hover:text-red-400'
  }
];
