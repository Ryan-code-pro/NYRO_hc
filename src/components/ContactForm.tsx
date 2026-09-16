import React, { useState } from 'react';
import { LivingPalette } from '../types';
import {
  Mail,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface ContactFormProps {
  palette: LivingPalette;
  onOpenJoinModal: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ palette, onOpenJoinModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: 'Teenager (13–15 years)',
    interest: 'General Coding & Side Projects',
    subject: 'Club Membership & Getting Started',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      year: 'Teenager (13–15 years)',
      interest: 'General Coding & Side Projects',
      subject: 'Club Membership & Getting Started',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div id="contact-section" className="space-y-12">
      {/* Page Header */}
      <div className="border-b border-neutral-800/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Have questions about joining, want to sponsor a hackathon challenge, or pitch a workshop topic? Send a transmission directly to our executive team.
          </p>
        </div>

        <button
          onClick={onOpenJoinModal}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold ${palette.buttonGradient}`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Join Club Discord</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information & Lab Hours */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151821]/90 border border-neutral-800 space-y-6 backdrop-blur-sm shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Headquarters &amp; Schedule
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                Connect with our organizers and community members online or meet in person during our scheduled hands-on workshops.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0e1017] border border-cyan-500/30">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-cyan-400" />
                <div>
                  <div className="font-semibold text-white">Workshop Venue</div>
                  <div className="text-neutral-400 text-xs mt-0.5">
                    Mahagun Club 1 (in collaboration with Udaan)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0e1017] border border-emerald-500/30">
                <Clock className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <div className="font-semibold text-white">Next Scheduled Session</div>
                  <div className="text-neutral-400 text-xs mt-0.5">
                    Hack Club Boba Drops: 3 October, 2:00 PM – 6:00 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#0e1017] border border-purple-500/30">
                <Mail className="w-5 h-5 shrink-0 mt-0.5 text-purple-400" />
                <div>
                  <div className="font-semibold text-white">Community &amp; Inquiries</div>
                  <div className="text-neutral-300 text-xs font-mono mt-0.5">
                    Official Discord Transmission &amp; Contact Form
                  </div>
                </div>
              </div>
            </div>

            {/* Living Terminal Ping Box */}
            <div className="p-4 rounded-2xl bg-[#0b0c10] border border-neutral-800 font-mono text-xs space-y-2">
              <div className="text-neutral-500">// network status</div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span>&gt; club status</span>
              </div>
              <div className="text-neutral-400 text-[11px] leading-relaxed">
                NYRO Club • Affiliated with Hack Club • Partnered with Udaan Society
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151821]/90 border border-neutral-800 shadow-2xl backdrop-blur-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center border shadow-xl bg-cyan-950/60 border-cyan-400/50 text-cyan-400 animate-bounce"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Transmission Received!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>! One of our club leads will respond to <span className="font-mono text-cyan-300">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                  <button
                    onClick={onOpenJoinModal}
                    className={`px-5 py-2.5 rounded-xl text-xs font-semibold ${palette.buttonGradient}`}
                  >
                    Join Discord Server
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Jordan Lee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e1017] border border-neutral-800 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e1017] border border-neutral-800 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Age Group / Standing
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e1017] border border-neutral-800 text-white text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                    >
                      <option value="Teenager (13–15 years)">Teenager (13–15 years)</option>
                      <option value="Teenager (16–18 years)">Teenager (16–18 years)</option>
                      <option value="High School Student">High School Student</option>
                      <option value="Middle School Student">Middle School Student</option>
                      <option value="Parent / Guardian">Parent / Guardian</option>
                      <option value="Community Partner">Community Partner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Primary Tech Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e1017] border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    >
                      <option value="General Coding & Side Projects">General Coding &amp; Side Projects</option>
                      <option value="AI / LLMs & Machine Learning">AI / LLMs &amp; Machine Learning</option>
                      <option value="Systems, Rust & Low-Level">Systems, Rust &amp; Low-Level</option>
                      <option value="Full-Stack Web & Cloud">Full-Stack Web &amp; Cloud</option>
                      <option value="Competitive Programming">Competitive Programming</option>
                      <option value="Hardware / Robotics / Game Dev">Hardware / Robotics / Game Dev</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e1017] border border-neutral-800 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-pink-500/80 focus:ring-1 focus:ring-pink-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Message / What do you want to build? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about yourself, topics you want to learn, questions about upcoming hackathons, or project ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e1017] border border-neutral-800 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 ${palette.buttonGradient}`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message to Club Leads'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
