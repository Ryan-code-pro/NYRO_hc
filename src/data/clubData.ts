import { LivingPalette, LivingPaletteId, ClubEvent } from '../types';

export const SOLAR_PALETTE: LivingPalette = {
  id: 'solar-flare',
  name: 'Solar',
  tagline: 'Sunset Amber, Neon Orange, Coral & Electric Purple',
  colors: ['#f59e0b', '#f97316', '#ef4444', '#a855f7'],
  gradientCss: 'from-amber-400 via-orange-400 to-rose-500',
  buttonGradient: 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:via-orange-400 hover:to-rose-400 text-black font-semibold shadow-[0_0_25px_rgba(249,115,22,0.4)]',
  borderGradient: 'from-amber-500 via-orange-500 to-purple-600',
  glowColor: 'rgba(249, 115, 22, 0.25)',
  accentHex: '#f59e0b',
  ambientOrbs: {
    orb1: '#f97316',
    orb2: '#ef4444',
    orb3: '#a855f7',
  },
};

export const LIVING_PALETTES: Record<LivingPaletteId, LivingPalette> = {
  'solar-flare': SOLAR_PALETTE,
};

export const CORE_PILLARS = [
  {
    title: 'Zero Gatekeeping',
    description: 'Whether you just wrote your first line of code or have built full applications, all skill levels are welcomed and celebrated.',
    iconName: 'ShieldCheck',
    color: '#00f0ff',
  },
  {
    title: 'Ship Real Projects',
    description: 'We learn by building hands-on projects: interactive websites, games, bots, and fun tools you can share with friends and family.',
    iconName: 'Rocket',
    color: '#10b981',
  },
  {
    title: 'Collaborative Community',
    description: 'Workshops, hack sessions, and peer learning where you make friends, brainstorm ideas, and solve problems together.',
    iconName: 'Users',
    color: '#a855f7',
  },
  {
    title: 'Hack Club Network',
    description: 'Affiliated with Hack Club’s global network of teenage builders, providing open-source tools, workshops, stickers, and community.',
    iconName: 'Briefcase',
    color: '#f59e0b',
  },
];

export const TECH_TRACKS = [
  {
    name: 'AI & Machine Learning',
    summary: 'Local LLM inference, autonomous agents, computer vision, and neural network fine-tuning.',
    tools: ['PyTorch', 'TypeScript', 'Transformers', 'Ollama', 'Python'],
    lead: 'Student SIG',
    color: '#a855f7',
    gradient: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-500/40',
  },
  {
    name: 'Systems & Low-Level Dev',
    summary: 'High-performance memory safety, compiler internals, operating systems, and embedded microcontrollers.',
    tools: ['Rust', 'C++', 'Go', 'Linux', 'eBPF'],
    lead: 'Systems SIG',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-lime-500/10',
    borderColor: 'border-emerald-500/40',
  },
  {
    name: 'Full-Stack Web & Cloud',
    summary: 'Modern distributed architectures, real-time WebSockets, edge deployments, and responsive UI craft.',
    tools: ['Next.js', 'React', 'Docker', 'PostgreSQL', 'Tailwind'],
    lead: 'Web SIG',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/40',
  },
  {
    name: 'Competitive Programming',
    summary: 'Mastering graph theory, dynamic programming, combinatorics, and algorithmic problem-solving.',
    tools: ['C++', 'Algorithms', 'LeetCode', 'Codeforces'],
    lead: 'Algorithms SIG',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-yellow-500/10',
    borderColor: 'border-amber-500/40',
  },
  {
    name: 'Cybersecurity & CTFs',
    summary: 'Reverse engineering, binary exploitation, web security vulnerability audits, and capture-the-flag challenges.',
    tools: ['Ghidra', 'Wireshark', 'Burp Suite', 'Python'],
    lead: 'Security SIG',
    color: '#ef4444',
    gradient: 'from-red-500/20 to-rose-500/10',
    borderColor: 'border-red-500/40',
  },
  {
    name: 'Game Development & Graphics',
    summary: 'Custom shader programming, WebGL physics engines, game jams, and interactive media creations.',
    tools: ['Godot', 'Three.js', 'GLSL', 'Rust Bevy'],
    lead: 'GameDev SIG',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-fuchsia-500/10',
    borderColor: 'border-pink-500/40',
  },
];

export const BOBA_DROPS_DETAILS = {
  title: 'Hack Club Boba Drops Coding Workshop',
  shortTitle: 'Boba Drops Workshop',
  organizer: 'Mike',
  organization: 'NYRO',
  partner: 'Udaan Society',
  date: '3 October',
  time: '2:00 PM – 6:00 PM',
  venue: 'Mahagun Club 1',
  ageGroup: '13–18 years (Teenagers)',
  whatToBring: 'A charged laptop and your curiosity to build something cool!',
  tagline: 'Build a project, experiment with technology, and connect with teenage coders.',
  description:
    'A hands-on, beginner-friendly coding workshop hosted by NYRO in collaboration with Udaan at Mahagun Club 1. Designed for teenagers aged 13–18 to dive into practical tech skills, construct real projects from scratch, and connect with fellow curious peers.',
  highlights: [
    {
      title: 'Real Hands-on Project',
      desc: 'Build a working interactive application from scratch with step-by-step guidance.',
      iconName: 'Laptop',
    },
    {
      title: 'Free Goodies & Surprises',
      desc: 'Enjoy official Hack Club stickers, custom workshop swag, and a small surprise for every attendee.',
      iconName: 'Gift',
    },
    {
      title: 'Drinks & Snacks Provided',
      desc: 'Stay fueled with tasty bites, refreshing beverages, and boba drops vibes throughout the afternoon.',
      iconName: 'Coffee',
    },
    {
      title: 'Teen Community & Mentors',
      desc: 'Connect with peers aged 13–18 who love coding, tech, and creating things that matter.',
      iconName: 'Users',
    },
  ],
  whatToBringList: [
    'A fully charged laptop (Windows, Mac, or Linux)',
    'Charger and power brick',
    'Curiosity and enthusiasm to build something cool',
    'No prior coding experience required—complete beginners welcome!',
  ],
  udaanCollaboration: {
    title: 'How Udaan Society Helps',
    items: [
      'Sharing the workshop announcement in relevant society groups',
      'Putting up posters in permitted society areas',
      'Spreading awareness among teenagers and parents',
      'Helping arrange suitable seating for all registered participants',
    ],
  },
  schedule: [
    { time: '2:00 PM', title: 'Arrival & Laptop Setup', desc: 'Check-in, grab welcome stickers, connect to Wi-Fi, and settle in.' },
    { time: '2:30 PM', title: 'Interactive Coding Kickoff', desc: 'Live walkthrough of your project architecture—writing your first lines of code.' },
    { time: '3:45 PM', title: 'Snack & Boba Social Break', desc: 'Refreshments, drinks, and casual tech chats with peers and organizers.' },
    { time: '4:15 PM', title: 'Feature Hacking & Customization', desc: 'Add personal creative flair, debug alongside Mike and mentors.' },
    { time: '5:30 PM', title: 'Demos, Surprises & Sticker Drop', desc: 'Show off your completed build, receive exclusive goodies, and celebrate!' },
  ],
};

export const EVENTS_DATA: ClubEvent[] = [
  {
    id: 'ev-boba-drops',
    title: 'Hack Club Boba Drops Coding Workshop',
    category: 'Workshop',
    date: '3 October',
    time: '2:00 PM – 6:00 PM',
    location: 'Mahagun Club 1',
    description: 'Hands-on coding workshop for teenagers aged 13–18 in collaboration with Udaan. Learn practical coding, build a real project, and enjoy snacks, drinks, goodies, and Hack Club stickers!',
    instructor: 'Mike (Lead Organizer)',
    level: 'Beginner',
    isFeatured: true,
    colorAccent: '#f97316', // Neon Orange / Solar Accent
  },
];

export const CLUB_FAQS = [
  {
    q: 'Do I need prior coding experience to join?',
    a: 'Absolutely not! We run beginner-friendly workshops starting from scratch with coding and project basics. Anyone curious about technology is welcome.',
    color: '#00f0ff',
  },
  {
    q: 'How often does the club meet?',
    a: 'We host regular hands-on workshops (such as our upcoming Boba Drops workshop), project build sessions, and maintain active collaborative channels on Discord.',
    color: '#10b981',
  },
  {
    q: 'Is there a membership fee?',
    a: 'No, membership and workshop participation are 100% free! We believe tech education, mentorship, and creative tools should be accessible to all students.',
    color: '#a855f7',
  },
  {
    q: 'How do I get involved in projects?',
    a: 'Attend our scheduled workshops or join our official Discord server. You can connect with fellow builders, collaborate on projects, and learn together.',
    color: '#ec4899',
  },
];
