import { LivingPalette, LivingPaletteId, ClubEvent, Founder, GalleryItem } from '../types';

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

export const CLUB_STATS = [
  { label: 'Active Coders', value: '340+', color: '#00f0ff' },
  { label: 'Shipped Projects', value: '62', color: '#10b981' },
  { label: 'Hackathons Won', value: '18', color: '#f59e0b' },
  { label: 'Discord Members', value: '950+', color: '#ec4899' },
];

export const CORE_PILLARS = [
  {
    title: 'Zero Gatekeeping',
    description: 'Whether you just wrote your first for-loop in Python or you maintain kernel modules in Rust, all skill levels are celebrated.',
    iconName: 'ShieldCheck',
    color: '#00f0ff',
  },
  {
    title: 'Ship Real Software',
    description: 'We don’t just write throwaway toy scripts. We build open-source web apps, autonomous AI agents, Discord bots, and campus tooling.',
    iconName: 'Rocket',
    color: '#10b981',
  },
  {
    title: 'Collaborative Sprints',
    description: 'Hackathons, bug-bash jams, and midnight whiteboard sessions where you meet teammates and build lifelong tech connections.',
    iconName: 'Users',
    color: '#a855f7',
  },
  {
    title: 'Industry & Career Prep',
    description: 'Resume teardowns, mock technical whiteboarding interviews, and referral networks with engineers from top tech companies.',
    iconName: 'Briefcase',
    color: '#f59e0b',
  },
];

export const TECH_TRACKS = [
  {
    name: 'AI & Machine Learning',
    summary: 'Local LLM inference, autonomous agents, computer vision, and neural network fine-tuning.',
    tools: ['PyTorch', 'TypeScript', 'Transformers', 'Ollama', 'Python'],
    lead: 'Elena & Arjun',
    color: '#a855f7',
    gradient: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-500/40',
  },
  {
    name: 'Systems & Low-Level Dev',
    summary: 'High-performance memory safety, compiler internals, operating systems, and embedded microcontrollers.',
    tools: ['Rust', 'C++', 'Go', 'Linux', 'eBPF'],
    lead: 'Devon Sparks',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-lime-500/10',
    borderColor: 'border-emerald-500/40',
  },
  {
    name: 'Full-Stack Web & Cloud',
    summary: 'Modern distributed architectures, real-time WebSockets, edge deployments, and responsive UI craft.',
    tools: ['Next.js', 'React', 'Docker', 'PostgreSQL', 'Tailwind'],
    lead: 'Marcus Thorne',
    color: '#00f0ff',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/40',
  },
  {
    name: 'Competitive Programming',
    summary: 'Mastering graph theory, dynamic programming, combinatorics, and competitive speed-coding contests.',
    tools: ['C++', 'Algorithms', 'LeetCode', 'Codeforces'],
    lead: 'Elena Rostov',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-yellow-500/10',
    borderColor: 'border-amber-500/40',
  },
  {
    name: 'Cybersecurity & CTFs',
    summary: 'Reverse engineering, binary exploitation, web security vulnerability audits, and collegiate capture-the-flag.',
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
    lead: 'Creative Coding Crew',
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
    returnBenefits: [
      'Promotion of Udaan through workshop materials, screens, and handouts',
      'Special shoutouts in event communications and announcements',
      'Increased awareness among students and families in the society',
      'Providing society teenagers with invaluable practical digital skills and positive engagement',
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
    spotsLeft: 16,
    totalSpots: 35,
    isFeatured: true,
    colorAccent: '#f97316', // Neon Orange / Solar Accent
  },
  {
    id: 'ev-2',
    title: 'Deep Dive: Building Autonomous AI Agents with TypeScript',
    category: 'Workshop',
    date: 'Wednesday, Oct 28, 2026',
    time: '5:30 PM – 7:30 PM',
    location: 'Tech Lab 204 & Streaming on Discord',
    description: 'Learn how to construct resilient AI tool-calling loops, parse structured outputs, and integrate browser automation with zero hallucinations.',
    instructor: 'Elena Rostov (VP / AI SIG)',
    level: 'Intermediate',
    spotsLeft: 14,
    totalSpots: 50,
    colorAccent: '#a855f7', // Electric Purple
  },
  {
    id: 'ev-3',
    title: 'LeetCode Hard Bug-Bash & Whiteboard Battle',
    category: 'Tech Talk',
    date: 'Saturday, Nov 07, 2026',
    time: '2:00 PM – 5:00 PM',
    location: 'Student Union Basement Hub',
    description: 'Master dynamic programming, memoization patterns, and graph traversals. Pair up in lightning rounds with prizes for the cleanest runtime complexity.',
    instructor: 'Devon Sparks & Elena Rostov',
    level: 'All Levels',
    spotsLeft: 9,
    totalSpots: 35,
    colorAccent: '#f59e0b', // Sunset Amber
  },
  {
    id: 'ev-4',
    title: 'Zero to Hero: Rust for JavaScript and Python Devs',
    category: 'Workshop',
    date: 'Thursday, Nov 12, 2026',
    time: '6:30 PM – 8:30 PM',
    location: 'Discord Voice Stage & Screen Share',
    description: 'De-mystifying ownership, borrowing, lifetimes, and pattern matching. Transition smoothly into blazingly fast memory-safe systems code.',
    instructor: 'Devon Sparks (Systems Arch)',
    level: 'Beginner',
    spotsLeft: 42,
    totalSpots: 120,
    colorAccent: '#10b981', // Neon Emerald
  },
  {
    id: 'ev-5',
    title: 'Open Source Demo Night & Cyber Social',
    category: 'Social & Jam',
    date: 'Friday, Nov 20, 2026',
    time: '7:00 PM – Late Night',
    location: 'CS Commons Lounge',
    description: 'Bring whatever side project you’ve been building! Connect your laptop to the big projector, get peer feedback, pair-program, and play retro arcade games.',
    instructor: 'Community Lead Aisha Patel',
    level: 'All Levels',
    spotsLeft: 19,
    totalSpots: 75,
    colorAccent: '#00f0ff', // Electric Cyan
  },
];

export const FOUNDERS_DATA: Founder[] = [
  {
    id: 'f-1',
    name: 'Devon Sparks',
    role: 'President & Systems Architect',
    handle: '@devon_kern',
    bio: 'Junior CS major obsessed with compiler architectures, low-latency networked systems, and building CLI tools that run in milliseconds.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    techStack: ['Rust', 'C++', 'Linux Kernel', 'Go', 'eBPF'],
    quote: '"If it can be written in Rust, it will eventually be rewritten in Rust."',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    status: 'Compiling kernel module...',
    badgeColor: '#10b981', // Emerald
  },
  {
    id: 'f-2',
    name: 'Elena Rostov',
    role: 'Vice President & Algorithmic Lead',
    handle: '@elena_codes',
    bio: 'Candidate Master competitive programmer and ML researcher. Loves graph algorithms, distributed consensus, and mentoring incoming first-year coders.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    techStack: ['Python', 'PyTorch', 'C++', 'Algorithms', 'FastAPI'],
    quote: '"Premature optimization is the root of all evil, but late optimization is just sad."',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    status: 'Benchmarking transformer attention...',
    badgeColor: '#a855f7', // Purple
  },
  {
    id: 'f-3',
    name: 'Marcus Thorne',
    role: 'Head of Web & Cloud Infrastructure',
    handle: '@m_thorne',
    bio: 'Full-stack builder who shipped 5 production SaaS apps. Manages club servers, Discord bot infrastructure, cloud deployments, and CI/CD pipelines.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    techStack: ['TypeScript', 'Next.js', 'Kubernetes', 'PostgreSQL', 'Tailwind'],
    quote: '"Ship early, test in production, and never underestimate CSS flexbox."',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    status: 'Deploying k8s cluster nodes...',
    badgeColor: '#00f0ff', // Cyan
  },
  {
    id: 'f-4',
    name: 'Aisha Patel',
    role: 'Community Director & Hackathon Lead',
    handle: '@aisha_builds',
    bio: 'Veteran collegiate hackathon organizer. Passionate about welcoming beginners, securing tech sponsors, and hosting late-night coding jams with music.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    techStack: ['React', 'Figma', 'Node.js', 'GraphQL', 'Tailwind'],
    quote: '"Coding is a team sport. The best lines of code are written with friends at 3 AM."',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    status: 'Securing hackathon sponsors...',
    badgeColor: '#ec4899', // Pink
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Midnight Hackathon 2025 Submission Countdown',
    category: 'Hackathons',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    date: 'Nov 12, 2025',
    caption: 'Over 130 coders deep into the 2:00 AM zone finalizing demo videos and GitHub commits for the annual Fall Hackathon.',
    likes: 92,
    colorAccent: '#ec4899',
  },
  {
    id: 'gal-2',
    title: 'Robotics & Microcontroller Solder Jam',
    category: 'Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    date: 'Jan 24, 2026',
    caption: 'Wiring ESP32 boards, writing C++ firmware, and flashing sensor streams for an autonomous campus weather station.',
    likes: 74,
    colorAccent: '#10b981',
  },
  {
    id: 'gal-3',
    title: 'Algorithms Glass-Wall Brainstorming',
    category: 'Workshops',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    date: 'Feb 10, 2026',
    caption: 'Members breaking down Dijkstra shortest-path edge cases and dynamic programming matrices on the lab study walls.',
    likes: 65,
    colorAccent: '#f59e0b',
  },
  {
    id: 'gal-4',
    title: 'Spring Demo Expo & Industry Mentors',
    category: 'Demos',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80',
    date: 'Mar 04, 2026',
    caption: 'Club teams demoing student-built AI code synthesis tools and mobile apps to visiting tech alumni and recruiters.',
    likes: 108,
    colorAccent: '#00f0ff',
  },
  {
    id: 'gal-5',
    title: 'Late Night Debugging Fuel & Pizza Jam',
    category: 'Socials',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    date: 'Apr 18, 2026',
    caption: 'Nothing bonds software engineers quite like chasing down a pesky memory leak over 10 large pepperoni pizzas.',
    likes: 129,
    colorAccent: '#8b5cf6',
  },
  {
    id: 'gal-6',
    title: 'First Place Trophy at Regional Code Bowl',
    category: 'Hackathons',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    date: 'May 02, 2026',
    caption: 'Our competitive programming delegation after sweeping 1st and 2nd place honors in the intercollegiate algorithmic cup.',
    likes: 154,
    colorAccent: '#eab308',
  },
];

export const CLUB_FAQS = [
  {
    q: 'Do I need prior coding experience to join?',
    a: 'Absolutely not! We run beginner-friendly workshops starting from scratch with Python, Git, and web basics. Anyone curious about technology is welcome.',
    color: '#00f0ff',
  },
  {
    q: 'How often does the club meet?',
    a: 'We host weekly open hack nights on Tuesdays and Thursdays from 6 PM – 9 PM, plus weekend workshops, guest speaker talks, and semesterly hackathons.',
    color: '#10b981',
  },
  {
    q: 'Is there a membership fee?',
    a: 'No, membership is 100% free! All our workshops, server compute resources, hackathon food, and events are free for members thanks to campus tech sponsors.',
    color: '#a855f7',
  },
  {
    q: 'How do I get involved in projects?',
    a: 'Show up to any Tuesday Hack Night or join our Discord. You can pitch an idea, join an existing open-source project, or pair up with a mentor.',
    color: '#ec4899',
  },
];
