export type LivingPaletteId = 'solar-flare';

export type PageId = 'home' | 'about' | 'events' | 'boba-drops' | 'founders' | 'gallery' | 'contact';

export interface LivingPalette {
  id: LivingPaletteId;
  name: string;
  tagline: string;
  colors: string[]; // 4-5 rotating/blending vibrant colors
  gradientCss: string; // e.g., 'from-cyan-400 via-emerald-400 to-fuchsia-500'
  buttonGradient: string; // e.g., 'bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500'
  borderGradient: string;
  glowColor: string;
  accentHex: string;
  ambientOrbs: {
    orb1: string;
    orb2: string;
    orb3: string;
  };
}

export interface ClubEvent {
  id: string;
  title: string;
  category: 'Hackathon' | 'Workshop' | 'Tech Talk' | 'Social & Jam';
  date: string;
  time: string;
  location: string;
  description: string;
  instructor?: string;
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  spotsLeft: number;
  totalSpots: number;
  isFeatured?: boolean;
  colorAccent: string; // distinct neon color for this category
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  handle: string;
  bio: string;
  avatar: string;
  techStack: string[];
  quote: string;
  github: string;
  linkedin: string;
  status: string;
  badgeColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hackathons' | 'Workshops' | 'Demos' | 'Socials';
  imageUrl: string;
  date: string;
  caption: string;
  likes: number;
  colorAccent: string;
}
