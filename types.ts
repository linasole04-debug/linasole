import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  subtext?: string;
  url: string;
  icon: LucideIcon;
  colorClass: string; // Tailwind class for hover text color or border
}

export interface ProfileData {
  name: string;
  tagline: string;
  image: string;
  footerText: string;
}