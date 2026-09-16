import React, { useState } from 'react';
import { PageId, LivingPalette } from '../types';
import {
  Code2,
  Calendar,
  Mail,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
  currentPalette: LivingPalette;
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onPageChange,
  currentPalette,
  onOpenJoinModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Functional navigation items: authentic club pages
  const navItems: { id: PageId; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'about', label: 'About Us', icon: <Code2 className="w-4 h-4" />, color: '#f59e0b' },
    { id: 'events', label: 'Upcoming Events', icon: <Calendar className="w-4 h-4" />, color: '#f97316' },
    { id: 'boba-drops', label: 'Boba Drops Workshop', icon: <Sparkles className="w-4 h-4" />, color: '#f97316' },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" />, color: '#f59e0b' },
  ];

  const handleNavClick = (id: PageId) => {
    onPageChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-[#101217]/95 border-b border-neutral-800/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name with Hack Club Parent Org */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none rounded-xl p-1 transition-transform active:scale-95"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#161922] border border-amber-500/40 flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 bg-clip-text text-transparent font-extrabold">
                  &lt;/&gt;
                </span>
              </div>

              <span className="font-mono font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                NYRO
              </span>
            </button>

            <span className="text-neutral-600 font-light text-base sm:text-lg select-none px-0.5">|</span>

            <a
              href="https://hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-hack-club-link"
              title="Hack Club - Parent Organisation"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="https://imgs.search.brave.com/bxZZXuZ5g3SivBORYE0-f-IFZtvpATUndb_zsVvGSP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS85/NTJlMTljYWJmMDhm/OGI2YjE4MWRlZjNl/OWM3NDc2ZDNiNTBl/ZTY2NjhmMGFmMWU5/MzkzMWQ4ZjQwODJj/ZTBmLzY4NzQ3NDcw/NzMzYTJmMmY2MTcz/NzM2NTc0NzMyZTY4/NjE2MzZiNjM2Yzc1/NjIyZTYzNmY2ZDJm/NjY2YzYxNjcyZDcz/NzQ2MTZlNjQ2MTZj/NmY2ZTY1MmU3Mzc2/Njc"
                alt="Hack Club"
                className="h-7 sm:h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Navigation Links - Single line, functional */}
          <nav aria-label="Desktop navigation" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-neutral-800/90 text-white shadow-md border'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: `${item.color}60`,
                          boxShadow: `0 0 14px ${item.color}25`,
                          color: item.color,
                        }
                      : {}
                  }
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: ONLY the functional Join Club button & Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="join-club-cta-btn"
              onClick={onOpenJoinModal}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all transform active:scale-95 ${currentPalette.buttonGradient}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join Club</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-neutral-800 bg-[#12141c] px-4 pt-3 pb-6 space-y-2 shadow-2xl"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-neutral-800 text-white border'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
                style={isActive ? { borderColor: item.color, color: item.color } : {}}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/50"
                    style={{ color: item.color }}
                  >
                    Active
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${currentPalette.buttonGradient}`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Join NYRO</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
