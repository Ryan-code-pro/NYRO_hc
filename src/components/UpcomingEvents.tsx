import React, { useState } from 'react';
import { LivingPalette, ClubEvent } from '../types';
import { EVENTS_DATA } from '../data/clubData';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Search,
  Share2,
  Check,
  Zap,
} from 'lucide-react';

interface UpcomingEventsProps {
  palette: LivingPalette;
  onNavigateBobaDrops?: () => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ palette, onNavigateBobaDrops }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [rsvps, setRsvps] = useState<Record<string, boolean>>({});
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);

  const categories = [
    { label: 'All', color: '#00f0ff' },
    { label: 'Hackathon', color: '#ec4899' },
    { label: 'Workshop', color: '#a855f7' },
    { label: 'Tech Talk', color: '#f59e0b' },
    { label: 'Social & Jam', color: '#10b981' },
  ];

  const toggleRsvp = (eventId: string) => {
    setRsvps((prev) => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  const handleShareEvent = (event: ClubEvent) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `NYRO Event: ${event.title} on ${event.date} at ${event.location}. Check it out!`
      );
      setCopiedEventId(event.id);
      setTimeout(() => setCopiedEventId(null), 2500);
    }
  };

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory =
      selectedCategory === 'All' || event.category === selectedCategory;
    const matchesQuery =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div id="events-section" className="space-y-8">
      {/* Page Header */}
      <div className="border-b border-neutral-800/80 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Upcoming Events
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
            Hands-on workshops, 48-hour hackathons, and collaborative sprint sessions. All sessions are 100% free with compute credits, mentorship, and meals provided.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161822] border border-neutral-800 text-xs font-mono text-neutral-300">
          <span>{filteredEvents.length} Events Scheduled</span>
        </div>
      </div>

      {/* Filter Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Colorful Category Pills */}
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-neutral-800 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white bg-[#151821]/80 border-neutral-800 hover:border-neutral-700'
                }`}
                style={
                  isSelected
                    ? {
                        borderColor: cat.color,
                        boxShadow: `0 0 12px ${cat.color}30`,
                        color: cat.color,
                      }
                    : {}
                }
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search events, topics, tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#151821]/90 border border-neutral-800 focus:border-neutral-600 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
          />
        </div>
      </div>

      {/* Events List with Distinct Neon Identities */}
      <div className="space-y-4">
        {filteredEvents.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#151821] border border-neutral-800 space-y-3">
            <p className="text-neutral-400 text-sm">No events found matching your search filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-cyan-400 underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredEvents.map((event) => {
            const isRsvpd = rsvps[event.id];
            const remainingSpots = isRsvpd ? event.spotsLeft - 1 : event.spotsLeft;
            const percentFilled = Math.round(
              ((event.totalSpots - remainingSpots) / event.totalSpots) * 100
            );

            return (
              <div
                key={event.id}
                id={`event-card-${event.id}`}
                className="p-6 rounded-2xl bg-[#151821]/90 border transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative overflow-hidden group backdrop-blur-sm"
                style={{
                  borderColor: `${event.colorAccent}35`,
                  boxShadow: `0 4px 20px -10px ${event.colorAccent}25`,
                }}
              >
                {/* Accent glow corner */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-15 transition-opacity group-hover:opacity-30"
                  style={{ backgroundColor: event.colorAccent }}
                />

                {event.isFeatured && (
                  <div
                    className="absolute top-0 right-0 px-3.5 py-1 text-[10px] font-mono font-bold uppercase rounded-bl-xl border-b border-l flex items-center"
                    style={{
                      backgroundColor: `${event.colorAccent}20`,
                      borderColor: `${event.colorAccent}50`,
                      color: event.colorAccent,
                    }}
                  >
                    <span>Flagship Event</span>
                  </div>
                )}

                <div className="space-y-3 flex-1 relative z-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold border"
                      style={{
                        backgroundColor: `${event.colorAccent}15`,
                        borderColor: `${event.colorAccent}40`,
                        color: event.colorAccent,
                      }}
                    >
                      {event.category}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800">
                      {event.level}
                    </span>
                    {event.instructor && (
                      <span className="text-xs text-neutral-400">
                        • Host: {event.instructor}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-100">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-300 pt-1 font-mono">
                    <div className="flex items-center gap-1.5" style={{ color: event.colorAccent }}>
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold text-white">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="w-4 h-4 text-neutral-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <MapPin className="w-4 h-4 text-neutral-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* RSVP and Actions Side */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 min-w-[210px] pt-4 lg:pt-0 border-t lg:border-t-0 border-neutral-800/80 relative z-10">
                  <div className="text-right">
                    <div className="text-xs font-mono text-neutral-300">
                      <span style={{ color: event.colorAccent }} className="font-bold">
                        {remainingSpots}
                      </span>{' '}
                      of {event.totalSpots} spots left
                    </div>
                    <div className="w-36 bg-neutral-900 h-2 rounded-full overflow-hidden mt-1.5 border border-neutral-800">
                      <div
                        className="h-full transition-all duration-300"
                        style={{
                          width: `${percentFilled}%`,
                          backgroundColor: event.colorAccent,
                          boxShadow: `0 0 10px ${event.colorAccent}`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {event.id === 'ev-boba-drops' && onNavigateBobaDrops && (
                      <button
                        onClick={onNavigateBobaDrops}
                        className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-orange-950/60 border border-orange-500/50 text-orange-300 hover:bg-orange-900/60 transition-all flex items-center gap-1.5"
                      >
                        <span>Workshop Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => handleShareEvent(event)}
                      className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                      title="Copy Event Info"
                    >
                      {copiedEventId === event.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      id={`rsvp-btn-${event.id}`}
                      onClick={() => toggleRsvp(event.id)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                        isRsvpd
                          ? 'bg-neutral-800 border border-neutral-700 text-white'
                          : 'text-black font-bold'
                      }`}
                      style={
                        isRsvpd
                          ? { color: event.colorAccent, borderColor: event.colorAccent }
                          : {
                              backgroundColor: event.colorAccent,
                              boxShadow: `0 0 16px ${event.colorAccent}50`,
                            }
                      }
                    >
                      {isRsvpd ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Spot Reserved</span>
                        </>
                      ) : (
                        <>
                          <span>Reserve Spot</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
