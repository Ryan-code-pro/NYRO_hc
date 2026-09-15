import React from 'react';
import { LivingPalette } from '../types';
import { FOUNDERS_DATA } from '../data/clubData';
import {
  Users,
  Github,
  Linkedin,
  Terminal,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface FoundersProps {
  palette: LivingPalette;
  onNavigateContact: () => void;
}

export const Founders: React.FC<FoundersProps> = ({ palette, onNavigateContact }) => {
  return (
    <div id="founders-section" className="space-y-12">
      {/* Page Header */}
      <div className="border-b border-neutral-800/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Founders &amp; Execs
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Each founder leads a technical track with their own distinct specialization—from bare-metal kernels to computer vision and cloud infrastructure.
          </p>
        </div>

        <button
          onClick={onNavigateContact}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 transition-all shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <span>Message the Founders</span>
        </button>
      </div>

      {/* Founders Grid with Individual Color Signatures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FOUNDERS_DATA.map((founder) => (
          <div
            key={founder.id}
            id={`founder-${founder.id}`}
            className="p-6 rounded-2xl bg-[#151821]/90 border hover:border-neutral-600 transition-all flex flex-col sm:flex-row gap-6 relative group overflow-hidden backdrop-blur-sm"
            style={{
              borderColor: `${founder.badgeColor}40`,
              boxShadow: `0 4px 20px -10px ${founder.badgeColor}30`,
            }}
          >
            {/* Corner wash */}
            <div
              className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity"
              style={{ backgroundColor: founder.badgeColor }}
            />

            {/* Avatar with Signature Border Glow */}
            <div className="relative shrink-0 mx-auto sm:mx-0">
              <div
                className="p-1 rounded-2xl border"
                style={{
                  borderColor: `${founder.badgeColor}60`,
                  boxShadow: `0 0 16px ${founder.badgeColor}25`,
                }}
              >
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Founder Content Details */}
            <div className="flex-1 space-y-3 relative z-10">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {founder.name}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {founder.handle}
                  </span>
                </div>
                <div
                  className="text-xs font-semibold mt-0.5"
                  style={{ color: founder.badgeColor }}
                >
                  {founder.role}
                </div>
              </div>

              {/* Terminal live status line */}
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0e1017] border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <Terminal className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span className="truncate" style={{ color: founder.badgeColor }}>
                  &gt; {founder.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {founder.bio}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {founder.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-mono border"
                    style={{
                      backgroundColor: `${founder.badgeColor}10`,
                      borderColor: `${founder.badgeColor}30`,
                      color: founder.badgeColor,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <div className="text-xs text-neutral-400 italic pt-2 border-t border-neutral-800/80">
                {founder.quote}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Join the Organizing Committee Multi-Color Callout */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#141620]/90 border border-neutral-800 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"
        />

        <div className="space-y-1.5 text-center sm:text-left relative z-10">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono uppercase text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Open Leadership &amp; Mentorship Roles</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Want to help lead Code &amp; Stuff?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
            We are recruiting assistant workshop coordinators, design leads, and sponsorship liaisons for the upcoming semester.
          </p>
        </div>

        <button
          onClick={onNavigateContact}
          className={`px-5 py-3 rounded-xl text-xs font-semibold whitespace-nowrap relative z-10 ${palette.buttonGradient}`}
        >
          Apply for Exec Board
        </button>
      </div>
    </div>
  );
};
