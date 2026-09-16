import React, { useState } from 'react';
import { LivingPalette } from '../types';
import {
  X,
  MessageSquare,
  Check,
  Copy,
  Users,
  Sparkles,
} from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  palette: LivingPalette;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, palette }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const discordLink = 'https://discord.gg/nyro';

  const handleCopy = () => {
    navigator.clipboard.writeText(discordLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="join-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="max-w-md w-full bg-[#151821] border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle multi-color background glow */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: palette.accentHex }}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 relative z-10">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg border bg-[#1a1d28]"
            style={{
              borderColor: `${palette.accentHex}60`,
              boxShadow: `0 0 16px ${palette.glowColor}`,
            }}
          >
            <span className={`bg-gradient-to-r ${palette.gradientCss} bg-clip-text text-transparent font-black`}>
              &lt;/&gt;
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Join NYRO
            </h3>
            <p className="text-xs text-neutral-400">
              Free student developer community
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 relative z-10">
          <div className="p-3.5 rounded-2xl bg-[#0e1017] border border-cyan-500/30 flex items-start gap-3">
            <Users className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
            <div>
              <div className="font-semibold text-white">Official Club Discord</div>
              <div className="text-neutral-400 text-xs">
                Active community channels for workshops, projects, hackathons, and questions.
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0e1017] border border-emerald-500/30 flex items-start gap-3">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <div>
              <div className="font-semibold text-white">Free Workshops &amp; Mentorship</div>
              <div className="text-neutral-400 text-xs">
                Open access to all hands-on workshops, Boba Drops sessions, peer mentorship, and refreshments.
              </div>
            </div>
          </div>
        </div>

        {/* Discord Link with Copy */}
        <div className="p-3 rounded-2xl bg-[#0c0d12] border border-neutral-800 flex items-center justify-between gap-2 font-mono text-xs relative z-10">
          <span className="text-cyan-300 truncate">{discordLink}</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-[11px] flex items-center gap-1 shrink-0 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 pt-2 relative z-10">
          <a
            href={discordLink}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${palette.buttonGradient}`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open Discord Community</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
