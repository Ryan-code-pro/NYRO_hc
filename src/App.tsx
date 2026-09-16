import React, { useState } from 'react';
import { PageId } from './types';
import { SOLAR_PALETTE, EVENTS_DATA, BOBA_DROPS_DETAILS } from './data/clubData';
import { LivingBackground } from './components/LivingBackground';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { UpcomingEvents } from './components/UpcomingEvents';
import { BobaDropsPage } from './components/BobaDropsPage';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import {
  Code2,
  Calendar,
  Mail,
  ArrowRight,
  ChevronRight,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  // Locked exclusively to Solar theme
  const currentPalette = SOLAR_PALETTE;

  return (
    <div
      id="club-app-root"
      className="min-h-screen bg-[#0a0c10] text-neutral-100 font-sans antialiased selection:bg-amber-900/50 selection:text-white relative overflow-x-hidden"
    >
      {/* Living Ambient Animated Mesh Orbs - Solar Flare Palette */}
      <LivingBackground
        palette={currentPalette}
        isAliveAnimation={true}
      />

      {/* Main Navbar - Simplified, functional */}
      <Navbar
        activePage={activePage}
        onPageChange={setActivePage}
        currentPalette={currentPalette}
        onOpenJoinModal={() => setJoinModalOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
        {/* ========================================================================= */}
        {/* HOME / OVERVIEW PAGE                                                      */}
        {/* ========================================================================= */}
        {activePage === 'home' && (
          <div className="space-y-16">
            {/* Solar Hero Section */}
            <section
              id="hero-banner"
              className="relative rounded-3xl bg-[#12151e]/90 border border-neutral-800 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl backdrop-blur-xl group"
            >
              {/* Solar Accent Top Edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500" />

              {/* Glowing Ambient Backdrop Orb inside Hero */}
              <div
                className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-15 transition-all duration-[3000ms] ease-in-out"
                style={{ backgroundColor: currentPalette.colors[0] }}
              />
              <div
                className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10 transition-all duration-[3000ms] ease-in-out"
                style={{ backgroundColor: currentPalette.colors[1] }}
              />

              <div className="relative z-10 max-w-3xl space-y-6">
                {/* Single-line headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Where Coders Connect &amp; Build
                </h1>

                <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
                  The student-led coding club affiliated with Hack Club. Zero boring theory: join hands-on workshops like Boba Drops, build real projects, and learn alongside fellow teenagers.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    id="hero-events-btn"
                    onClick={() => setActivePage('events')}
                    className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold transform active:scale-95 transition-all ${currentPalette.buttonGradient}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>View Upcoming Events</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    id="hero-about-btn"
                    onClick={() => setActivePage('about')}
                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#1a1e2a] border border-neutral-700 text-white hover:border-amber-400/60 transition-all shadow-md"
                  >
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>About Our Club</span>
                  </button>

                  <button
                    id="hero-contact-btn"
                    onClick={() => setActivePage('contact')}
                    className="px-5 py-3.5 rounded-xl text-sm font-semibold text-neutral-400 hover:text-amber-300 transition-colors"
                  >
                    Contact Organizers →
                  </button>
                </div>
              </div>
            </section>

            {/* Quick-Jump Section Cards */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Explore NYRO
                  </h2>
                </div>
                <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                  Click any card to explore
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. About Us Card */}
                <div
                  id="card-nav-about"
                  onClick={() => setActivePage('about')}
                  className="p-6 rounded-3xl bg-[#151822]/90 border border-amber-500/30 hover:border-amber-400/80 transition-all cursor-pointer group flex flex-col justify-between space-y-5 shadow-lg backdrop-blur-sm relative overflow-hidden"
                >
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity bg-amber-400 pointer-events-none"
                  />
                  <div className="space-y-3 relative z-10">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold bg-amber-950/60 border border-amber-500/40 text-amber-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      About Us
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Our mission under Hack Club, core community pillars, project learning tracks (AI, Web, Game Dev, Systems), and club FAQs.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 font-mono relative z-10">
                    <span>Read Club Story</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* 2. Flagship Boba Drops Card */}
                <div
                  id="card-nav-boba-drops"
                  onClick={() => setActivePage('boba-drops')}
                  className="p-6 rounded-3xl bg-[#151822]/90 border border-orange-500/30 hover:border-orange-400/80 transition-all cursor-pointer group flex flex-col justify-between space-y-5 shadow-lg backdrop-blur-sm relative overflow-hidden"
                >
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity bg-orange-500 pointer-events-none"
                  />
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold bg-orange-950/60 border border-orange-500/40 text-orange-400">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-300 font-semibold">
                        3 Oct · Free RSVP
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                      Hack Club Boba Drops Workshop
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Hands-on coding workshop at Mahagun Club 1 for teenagers (13–18) in collaboration with Udaan. Learn practical coding, build a project, and earn stickers!
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 font-mono relative z-10">
                    <span>View Workshop &amp; RSVP</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* 3. Upcoming Events Card */}
                <div
                  id="card-nav-events"
                  onClick={() => setActivePage('events')}
                  className="p-6 rounded-3xl bg-[#151822]/90 border border-rose-500/30 hover:border-rose-400/80 transition-all cursor-pointer group flex flex-col justify-between space-y-5 shadow-lg backdrop-blur-sm relative overflow-hidden"
                >
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity bg-rose-500 pointer-events-none"
                  />
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold bg-rose-950/60 border border-rose-500/40 text-rose-400">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 font-semibold">
                        {EVENTS_DATA.length === 1 ? '1 Scheduled' : `${EVENTS_DATA.length} Listed`}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                      Upcoming Events
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Browse scheduled workshop sessions, dates, agendas, and venue details for our community gatherings.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 font-mono relative z-10">
                    <span>View Calendar &amp; Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* 4. Contact Form Card */}
                <div
                  id="card-nav-contact"
                  onClick={() => setActivePage('contact')}
                  className="p-6 rounded-3xl bg-[#151822]/90 border border-amber-500/30 hover:border-amber-400/80 transition-all cursor-pointer group flex flex-col justify-between space-y-5 shadow-lg backdrop-blur-sm relative overflow-hidden"
                >
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity bg-amber-500 pointer-events-none"
                  />
                  <div className="space-y-3 relative z-10">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold bg-amber-950/60 border border-amber-500/40 text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      Contact &amp; Inquiries
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Reach out to club organizers, ask questions about upcoming sessions, or connect with us on Discord.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 font-mono relative z-10">
                    <span>Open Contact Dispatch</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </section>

            {/* Parent Organization Section: Hack Club */}
            <section
              id="hack-club-section"
              className="p-6 sm:p-8 rounded-3xl bg-[#131620]/90 border border-neutral-800 hover:border-red-500/40 transition-all shadow-xl relative overflow-hidden backdrop-blur-sm group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://imgs.search.brave.com/bxZZXuZ5g3SivBORYE0-f-IFZtvpATUndb_zsVvGSP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS85/NTJlMTljYWJmMDhm/OGI2YjE4MWRlZjNl/OWM3NDc2ZDNiNTBl/ZTY2NjhmMGFmMWU5/MzkzMWQ4ZjQwODJj/ZTBmLzY4NzQ3NDcw/NzMzYTJmMmY2MTcz/NzM2NTc0NzMyZTY4/NjE2MzZiNjM2Yzc1/NjIyZTYzNmY2ZDJm/NjY2YzYxNjcyZDcz/NzQ2MTZlNjQ2MTZj/NmY2ZTY1MmU3Mzc2/Njc"
                      alt="Hack Club Logo"
                      className="h-9 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-red-950/60 border border-red-500/40 text-red-300">
                      PARENT ORGANISATION
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Affiliated with Hack Club
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    NYRO operates under the global umbrella of Hack Club, a worldwide 501(c)(3) nonprofit network of high school and collegiate coding clubs. Hack Club equips student hackers with open-source tools, mentorship, project grants, and a vibrant community dedicated to learning by building real software and hardware.
                  </p>
                </div>

                <a
                  href="https://hackclub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="visit-hack-club-btn"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 active:scale-95 transition-all shadow-[0_0_20px_rgba(239,68,68,0.35)] flex items-center gap-2 shrink-0 group"
                >
                  <span>Visit Hack Club</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </section>

            {/* Next Flagship Event Banner - Hack Club Boba Drops Workshop */}
            <section className="p-6 sm:p-8 rounded-3xl bg-[#151822]/90 border border-orange-500/40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 pointer-events-none"
              />

              <div className="space-y-3 max-w-2xl relative z-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-orange-950/80 border border-orange-500/40 text-orange-400">
                    NEXT UPCOMING WORKSHOP • 3 OCTOBER
                  </span>
                  <span className="text-xs font-mono text-neutral-300">
                    NYRO × Udaan Collaboration
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {BOBA_DROPS_DETAILS.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Hands-on coding workshop for teenagers aged 13–18 at Mahagun Club 1. Build a project from scratch, learn practical tech skills, and enjoy snacks, drinks, goodies, and Hack Club stickers!
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-300 pt-1">
                  <div className="flex items-center gap-1 text-orange-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>3 October (Saturday)</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>2:00 PM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1 text-rose-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Mahagun Club 1</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto relative z-10 shrink-0">
                <button
                  onClick={() => setActivePage('boba-drops')}
                  className={`px-5 py-3 rounded-xl text-xs font-bold whitespace-nowrap flex items-center justify-center gap-2 ${currentPalette.buttonGradient}`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Workshop Page &amp; RSVP</span>
                </button>
                <button
                  onClick={() => setActivePage('events')}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white text-center transition-colors"
                >
                  All Club Events
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 1. ABOUT US PAGE                                                          */}
        {/* ========================================================================= */}
        {activePage === 'about' && (
          <AboutUs
            palette={currentPalette}
            isAliveAnimation={true}
            onNavigateEvents={() => setActivePage('events')}
            onNavigateContact={() => setActivePage('contact')}
          />
        )}

        {/* ========================================================================= */}
        {/* 2. UPCOMING EVENTS PAGE                                                   */}
        {/* ========================================================================= */}
        {activePage === 'events' && (
          <UpcomingEvents
            palette={currentPalette}
            onNavigateBobaDrops={() => setActivePage('boba-drops')}
          />
        )}

        {/* ========================================================================= */}
        {/* BOBA DROPS WORKSHOP PAGE (DEDICATED)                                     */}
        {/* ========================================================================= */}
        {activePage === 'boba-drops' && (
          <BobaDropsPage
            palette={currentPalette}
            onNavigateBack={() => setActivePage('events')}
            onOpenJoinModal={() => setJoinModalOpen(true)}
          />
        )}

        {/* ========================================================================= */}
        {/* CONTACT FORM PAGE                                                         */}
        {/* ========================================================================= */}
        {activePage === 'contact' && (
          <ContactForm
            palette={currentPalette}
            onOpenJoinModal={() => setJoinModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        palette={currentPalette}
        onNavigate={setActivePage}
        onOpenJoinModal={() => setJoinModalOpen(true)}
      />

      {/* Join Club Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        palette={currentPalette}
      />
    </div>
  );
}
