import React, { useState } from 'react';
import { PageId, LivingPalette } from '../types';
import {
  Github,
  Linkedin,
  MessageSquare,
  Terminal,
  Heart,
  Check,
} from 'lucide-react';

interface FooterProps {
  palette: LivingPalette;
  onNavigate: (page: PageId) => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  palette,
  onNavigate,
  onOpenJoinModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <footer id="main-footer" className="mt-20 border-t border-neutral-800/80 bg-[#0c0e14] text-neutral-400 relative z-10">
      {/* Top Solar gradient edge line */}
      <div
        className="w-full h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl bg-[#161822] border border-neutral-700 flex items-center justify-center font-mono font-bold text-sm shadow-md"
              >
                <span
                  className={`bg-gradient-to-r ${palette.gradientCss} bg-clip-text text-transparent font-extrabold`}
                >
                  &lt;/&gt;
                </span>
              </div>
              <span className="font-mono font-bold text-lg text-white">
                NYRO
              </span>
              <span className="text-neutral-600 font-light text-base select-none px-0.5">|</span>
              <a
                href="https://hackclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Hack Club - Parent Organisation"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://imgs.search.brave.com/bxZZXuZ5g3SivBORYE0-f-IFZtvpATUndb_zsVvGSP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS85/NTJlMTljYWJmMDhm/OGI2YjE4MWRlZjNl/OWM3NDc2ZDNiNTBl/ZTY2NjhmMGFmMWU5/MzkzMWQ4ZjQwODJj/ZTBmLzY4NzQ3NDcw/NzMzYTJmMmY2MTcz/NzM2NTc0NzMyZTY4/NjE2MzZiNjM2Yzc1/NjIyZTYzNmY2ZDJm/NjY2YzYxNjcyZDcz/NzQ2MTZlNjQ2MTZj/NmY2ZTY1MmU3Mzc2/Njc"
                  alt="Hack Club"
                  className="h-6 sm:h-7 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              The living student-run engineering, machine learning, and systems collective. Free workshops, hackathons, open-source projects, and lifelong developer friendships.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500 text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-purple-500 text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenJoinModal}
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-pink-500 text-neutral-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-cyan-400">
              Club Pages
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us &amp; Tracks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-pink-400 transition-colors"
                >
                  Upcoming Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('boba-drops')}
                  className="hover:text-orange-400 transition-colors"
                >
                  Boba Drops Workshop
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact Form
                </button>
              </li>
            </ul>
          </div>

          {/* Workshop & Venue */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-emerald-400">
              Workshop &amp; Venue
            </div>
            <div className="space-y-2 text-xs text-neutral-400">
              <div>
                <span className="text-neutral-200 font-medium">Location:</span> Mahagun Club 1
                <div className="text-[11px] text-neutral-500">In collaboration with Udaan</div>
              </div>
              <div>
                <span className="text-neutral-200 font-medium">Next Workshop:</span> Boba Drops
                <div className="text-[11px] text-neutral-500">3 October • 2:00 PM – 6:00 PM</div>
              </div>
              <div>
                <span className="text-neutral-200 font-medium">Community:</span> Active on Discord
              </div>
            </div>
          </div>

          {/* Hackathon Alerts Newsletter */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-pink-400">
              Workshop Alerts
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get notified first when workshop registrations and hack sessions open up.
            </p>
            {subscribed ? (
              <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Subscribed! Check inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#161822] border border-neutral-800 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500/80"
                />
                <button
                  type="submit"
                  className={`w-full py-2 rounded-xl text-xs font-semibold ${palette.buttonGradient}`}
                >
                  Get Alerts
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} NYRO. All rights reserved.
          </div>
          <div>
            <span className="text-neutral-400">
              Built for student builders
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
