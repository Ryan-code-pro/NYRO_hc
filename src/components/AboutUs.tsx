import React, { useState } from 'react';
import { LivingPalette } from '../types';
import { CORE_PILLARS, TECH_TRACKS, CLUB_FAQS, CLUB_STATS } from '../data/clubData';
import {
  Code2,
  Terminal,
  ShieldCheck,
  Rocket,
  Users,
  Briefcase,
  ChevronDown,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Zap,
} from 'lucide-react';

interface AboutUsProps {
  palette: LivingPalette;
  isAliveAnimation: boolean;
  onNavigateEvents: () => void;
  onNavigateContact: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  palette,
  isAliveAnimation,
  onNavigateEvents,
  onNavigateContact,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  return (
    <div id="about-us-section" className="space-y-16 relative">
      {/* Page Header */}
      <div className="border-b border-neutral-800/80 pb-8 space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          About Us
        </h1>

        <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed font-normal">
          <strong className="text-white">NYRO</strong> is a student-founded community of hackers, machine learning experimenters, systems engineers, and creative technologists. We replace boring classroom rote with multi-disciplinary sprint teams, hackathons, and lifelong friendships.
        </p>
      </div>

      {/* Multi-Color Stats Ribbon - Each Box Pops With Its Own Distinct Color */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CLUB_STATS.map((stat, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-[#151821]/80 border border-neutral-800 hover:border-neutral-700 transition-all text-center group relative overflow-hidden backdrop-blur-sm"
          >
            {/* Top ambient color edge */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: stat.color }}
            />
            <div
              className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight transition-transform group-hover:scale-105"
              style={{ color: stat.color }}
            >
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mission & Culture Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>OUR PURPOSE &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Built by students who were tired of coding alone in the dark.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Computer science classes test algorithms on paper, but real-world engineering requires shipping: wrangling messy API schemas, configuring Docker containers, debugging concurrency locks, and building interfaces people actually love to touch.
          </p>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            We started with five friends huddled around late-night pizza in a residence hall lounge. Today, NYRO provides compute servers, cloud clusters, hackathon travel grants, and a welcoming hive where no question is ever &ldquo;too beginner.&rdquo;
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="about-view-events-btn"
              onClick={onNavigateEvents}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold ${palette.buttonGradient}`}
            >
              <span>Explore Upcoming Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="about-contact-btn"
              onClick={onNavigateContact}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 transition-all"
            >
              <span>Get In Touch With Leads</span>
            </button>
          </div>
        </div>

        {/* Interactive Multi-Color Terminal Box */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#0c0e14] border border-neutral-800 overflow-hidden shadow-2xl relative">
            <div className="px-4 py-3 bg-[#13161f] border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-neutral-400 ml-2">manifest.json</span>
              </div>
            </div>

            <pre className="p-5 font-mono text-xs leading-relaxed overflow-x-auto">
              <code>
                <span className="text-purple-400">{`{\n`}</span>
                <span className="text-cyan-400">{`  "club"`}</span>
                <span className="text-neutral-400">{`: `}</span>
                <span className="text-emerald-300">{`"NYRO"`}</span>
                <span className="text-neutral-400">{`,\n`}</span>

                <span className="text-cyan-400">{`  "culture"`}</span>
                <span className="text-neutral-400">{`: {\n`}</span>
                <span className="text-pink-400">{`    "gatekeeping"`}</span>
                <span className="text-neutral-400">{`: `}</span>
                <span className="text-amber-400">{`false`}</span>
                <span className="text-neutral-400">{`,\n`}</span>
                <span className="text-pink-400">{`    "collaborative"`}</span>
                <span className="text-neutral-400">{`: `}</span>
                <span className="text-amber-400">{`true`}</span>
                <span className="text-neutral-400">{`,\n`}</span>
                <span className="text-pink-400">{`    "open_source"`}</span>
                <span className="text-neutral-400">{`: `}</span>
                <span className="text-amber-400">{`true`}</span>
                <span className="text-neutral-400">{`\n  },\n`}</span>

                <span className="text-cyan-400">{`  "tech_tracks"`}</span>
                <span className="text-neutral-400">{`: [\n`}</span>
                <span className="text-emerald-300">{`    "AI / Neural Networks",\n`}</span>
                <span className="text-purple-300">{`    "Rust & Kernel Systems",\n`}</span>
                <span className="text-amber-300">{`    "Full-Stack Web / Cloud",\n`}</span>
                <span className="text-rose-300">{`    "Hardware & Robotics"\n`}</span>
                <span className="text-neutral-400">{`  ],\n`}</span>
                <span className="text-cyan-400">{`  "membership_fee"`}</span>
                <span className="text-neutral-400">{`: `}</span>
                <span className="text-emerald-400">{`"$0.00 (Free Forever)"\n`}</span>
                <span className="text-purple-400">{`}`}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* The Four Foundational Pillars with Distinct Colors */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            HOW WE OPERATE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Our Four Foundational Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#151821]/90 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group backdrop-blur-sm"
              style={{
                boxShadow: `0 4px 20px -10px ${pillar.color}25`,
              }}
            >
              <div>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border transition-transform group-hover:scale-105"
                  style={{
                    backgroundColor: `${pillar.color}15`,
                    borderColor: `${pillar.color}40`,
                    color: pillar.color,
                  }}
                >
                  {getPillarIcon(pillar.iconName)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div
                className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono"
                style={{ color: pillar.color }}
              >
                <span>0{idx + 1} // PILLAR</span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pillar.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Tracks / Multi-Color Bento Grid */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            SPECIAL INTEREST GROUPS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Active Technical Tracks
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
            Members naturally organize into Special Interest Groups based on their passions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_TRACKS.map((track, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#151821]/90 border hover:border-neutral-600 transition-all space-y-4 group relative overflow-hidden"
              style={{
                borderColor: `${track.color}40`,
                boxShadow: `0 4px 24px -10px ${track.color}20`,
              }}
            >
              {/* Corner color wash */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20"
                style={{ backgroundColor: track.color }}
              />

              <div className="flex items-center justify-between relative z-10">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: track.color }}
                  />
                  <span>{track.name}</span>
                </h3>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed relative z-10">
                {track.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1 relative z-10">
                {track.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono border"
                    style={{
                      backgroundColor: `${track.color}10`,
                      borderColor: `${track.color}30`,
                      color: track.color,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>Lead: {track.lead}</span>
                <span style={{ color: track.color }}>Active Group →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions with Colorful Highlights */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {CLUB_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-800 bg-[#141720]/80 overflow-hidden transition-all backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: faq.color }}
                    />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
