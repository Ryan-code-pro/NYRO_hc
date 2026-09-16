import React, { useState } from 'react';
import { LivingPalette } from '../types';
import { BOBA_DROPS_DETAILS } from '../data/clubData';
import {
  Calendar,
  Clock,
  MapPin,
  Laptop,
  Sparkles,
  Users,
  Gift,
  Coffee,
  CheckCircle2,
  Share2,
  Download,
  ArrowLeft,
  Building,
  HeartHandshake,
  Armchair,
} from 'lucide-react';

interface BobaDropsPageProps {
  palette: LivingPalette;
  onNavigateBack: () => void;
  onOpenJoinModal: () => void;
}

export const BobaDropsPage: React.FC<BobaDropsPageProps> = ({
  palette,
  onNavigateBack,
  onOpenJoinModal,
}) => {
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpAge, setRsvpAge] = useState('15');
  const [rsvpContact, setRsvpContact] = useState('');
  const [rsvpLaptop, setRsvpLaptop] = useState('yes');
  const [rsvpSeatingNote, setRsvpSeatingNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpContact.trim()) return;
    setIsSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//NYRO//Boba Drops Workshop//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Hack Club Boba Drops Coding Workshop (NYRO x Udaan)',
      'DESCRIPTION:Hands-on coding workshop for teenagers aged 13–18 at Mahagun Club 1. Bring a charged laptop and curiosity to build something cool!',
      'LOCATION:Mahagun Club 1',
      'DTSTART:20261003T140000',
      'DTEND:20261003T180000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'boba-drops-workshop.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="boba-drops-page" className="space-y-12">
      {/* Top Breadcrumb / Back Link */}
      <div className="flex items-center justify-between">
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-orange-400" />
          <span>Back to All Events</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-orange-400 bg-orange-950/60 border border-orange-500/40 px-3 py-1 rounded-full">
            NYRO × Udaan Collaboration
          </span>
        </div>
      </div>

      {/* Page Header - Clean, Single Line Title */}
      <div className="border-b border-neutral-800/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Boba Drops Coding Workshop
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            Organized by <strong>NYRO</strong> in collaboration with <strong>Udaan</strong> for teenagers aged 13–18 at Mahagun Club 1. Learn to code, build a project from scratch, and connect with other students.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownloadCalendar}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-orange-500/50 transition-all shadow-sm"
          >
            <Download className="w-4 h-4 text-orange-400" />
            <span>Add to Calendar</span>
          </button>

          <a
            href="#rsvp-section"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold ${palette.buttonGradient}`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Reserve Seat</span>
          </a>
        </div>
      </div>

      {/* Primary Event Details Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Date */}
        <div className="p-5 rounded-2xl bg-[#141722] border border-orange-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
            <Calendar className="w-4 h-4" />
            <span>WORKSHOP DATE</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white font-mono">
            {BOBA_DROPS_DETAILS.date}
          </div>
          <div className="text-xs text-neutral-400">Saturday afternoon</div>
        </div>

        {/* Time */}
        <div className="p-5 rounded-2xl bg-[#141722] border border-amber-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
            <Clock className="w-4 h-4" />
            <span>TIME DURATION</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white font-mono">
            {BOBA_DROPS_DETAILS.time}
          </div>
          <div className="text-xs text-neutral-400">4 Hours of hands-on building</div>
        </div>

        {/* Venue */}
        <div className="p-5 rounded-2xl bg-[#141722] border border-rose-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
            <MapPin className="w-4 h-4" />
            <span>EVENT VENUE</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            {BOBA_DROPS_DETAILS.venue}
          </div>
          <div className="text-xs text-neutral-400">Society community space</div>
        </div>

        {/* Eligibility */}
        <div className="p-5 rounded-2xl bg-[#141722] border border-purple-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
            <Users className="w-4 h-4" />
            <span>TARGET AUDIENCE</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            {BOBA_DROPS_DETAILS.ageGroup}
          </div>
          <div className="text-xs text-neutral-400">Beginners &amp; curious teens</div>
        </div>
      </div>

      {/* Main Content: Overview, What to Bring & What's Included */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Workshop Story & Purpose */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#131620]/90 border border-neutral-800 space-y-5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              About the Workshop
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Organized by <strong>Mike</strong> from <strong>NYRO</strong>, the Hack Club Boba Drops coding workshop is a high-energy, friendly session specifically designed for society teenagers aged 13–18.
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Rather than listening to boring lectures or passive slides, participants will write real code on their own machines, experiment with software, and leave with a finished project they built themselves.
            </p>

            {/* Key Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {BOBA_DROPS_DETAILS.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#191c28]/80 border border-neutral-700/70 space-y-2"
                >
                  <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                    {idx === 0 && <Laptop className="w-4 h-4 text-orange-400" />}
                    {idx === 1 && <Gift className="w-4 h-4 text-amber-400" />}
                    {idx === 2 && <Coffee className="w-4 h-4 text-rose-400" />}
                    {idx === 3 && <Users className="w-4 h-4 text-purple-400" />}
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Timeline */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#131620]/90 border border-neutral-800 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Workshop Schedule (3 October)
            </h2>
            <div className="space-y-4">
              {BOBA_DROPS_DETAILS.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 p-3.5 rounded-xl bg-[#171a24] border border-neutral-800"
                >
                  <div className="w-24 shrink-0 font-mono text-xs font-bold text-orange-400 px-2.5 py-1 rounded bg-orange-950/40 border border-orange-500/30 text-center">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-neutral-300 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Udaan Collaboration Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#131620]/90 border border-amber-500/40 space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
              <HeartHandshake className="w-4 h-4" />
              <span>COMMUNITY PARTNERSHIP</span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Collaboration with Udaan
              </h2>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                We are proud to collaborate with the <strong>Udaan Team</strong> to bring practical technical education and positive youth enrichment directly to Mahagun Club 1.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#181b26] border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300">
                <Building className="w-4 h-4 text-amber-400" />
                <span>How Udaan Supports:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 pt-1">
                {BOBA_DROPS_DETAILS.udaanCollaboration.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#131620] border border-neutral-800/80">
                    <span className="text-amber-400 font-bold">•</span>
                    <span className="leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar: What to Bring & RSVP Form */}
        <div className="space-y-6">
          {/* What to Bring Card */}
          <div className="p-6 rounded-3xl bg-[#131620] border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold uppercase">
              <Laptop className="w-4 h-4" />
              <span>WHAT TO BRING</span>
            </div>
            <h3 className="text-lg font-bold text-white">Prerequisites &amp; Gear</h3>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {BOBA_DROPS_DETAILS.whatToBringList.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 space-y-1">
              <div className="font-semibold text-neutral-200">Perks &amp; Refreshments</div>
              <div>Free drinks, snacks, official stickers, and a small surprise gift included!</div>
            </div>
          </div>

          {/* Dedicated RSVP & Seating Form */}
          <div
            id="rsvp-section"
            className="p-6 rounded-3xl bg-[#141724] border border-orange-500/40 space-y-5 shadow-xl relative"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-orange-400">
                  SEAT REGISTRATION
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Reserve Workshop Seat
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Free RSVP
              </span>
            </div>

            {isSubmitted ? (
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 space-y-3 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Seat Confirmed!</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Thanks <strong>{rsvpName}</strong>! We've saved your spot for <strong>3 October, 2:00 PM</strong> at Mahagun Club 1. Remember to bring your charged laptop!
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleDownloadCalendar}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-emerald-900/60 border border-emerald-500/40 text-emerald-200 hover:bg-emerald-900 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Calendar Event (.ics)</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitRSVP} className="space-y-4 text-xs">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Age (13–18) *
                    </label>
                    <select
                      value={rsvpAge}
                      onChange={(e) => setRsvpAge(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="13">13 years old</option>
                      <option value="14">14 years old</option>
                      <option value="15">15 years old</option>
                      <option value="16">16 years old</option>
                      <option value="17">17 years old</option>
                      <option value="18">18 years old</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Bringing Laptop? *
                    </label>
                    <select
                      value={rsvpLaptop}
                      onChange={(e) => setRsvpLaptop(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="yes">Yes, charged laptop</option>
                      <option value="need-outlet">Yes, will need power plug</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Email / WhatsApp Contact *
                  </label>
                  <input
                    type="text"
                    required
                    value={rsvpContact}
                    onChange={(e) => setRsvpContact(e.target.value)}
                    placeholder="alex@gmail.com or 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1 flex items-center justify-between">
                    <span>Seating / Society Notes</span>
                    <span className="text-[10px] text-neutral-500 font-normal">Optional</span>
                  </label>
                  <input
                    type="text"
                    value={rsvpSeatingNote}
                    onChange={(e) => setRsvpSeatingNote(e.target.value)}
                    placeholder="e.g. Tower B Flat 402, coming with a friend"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all transform active:scale-95 ${palette.buttonGradient}`}
                >
                  Confirm Free Workshop Registration
                </button>
                <p className="text-[11px] text-neutral-400 text-center">
                  100% Free • Seating arranged in collaboration with Udaan
                </p>
              </form>
            )}
          </div>

          {/* Organizer Card */}
          <div className="p-5 rounded-2xl bg-[#131620] border border-neutral-800 space-y-2">
            <div className="text-xs font-mono text-neutral-400">ORGANIZED BY</div>
            <div className="text-sm font-bold text-white">Mike (Lead Organizer)</div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Questions about the workshop or partnering with NYRO? Reach out through the club contact form or send a message directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
