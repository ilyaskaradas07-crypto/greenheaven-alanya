import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, UtensilsCrossed } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: (occasion?: string) => void;
  onOpenMenuModal: (type: 'food' | 'drinks') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenMenuModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'steaks', 'about', 'menu', 'sports-bar', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Prime Cuts', href: '#steaks', id: 'steaks' },
    { name: 'Heritage', href: '#about', id: 'about' },
    { name: 'La Carte', href: '#menu', id: 'menu' },
    { name: 'The Cellar', href: '#sports-bar', id: 'sports-bar' },
    { name: 'Portfolio', href: '#gallery', id: 'gallery' },
    { name: 'Concierge', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B09]/95 backdrop-blur-md border-b border-[#C5A059]/25 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#070B09]/95 via-[#070B09]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Element with Royal Crest & Serif Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C5A059]/60 p-0.5 bg-[#070B09] shrink-0 group-hover:border-[#C5A059] transition-colors">
              <img
                src={restaurantData.logoUrl}
                alt="Green Heaven Seal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-serif-luxury text-xl sm:text-2xl font-semibold tracking-[0.2em] text-[#F5EFE4] group-hover:text-[#C5A059] transition-colors">
              GREEN HEAVEN
            </span>
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links with Subtle Hover Underlines */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.16em] transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                  activeSection === link.id
                    ? 'text-[#C5A059] font-semibold'
                    : 'text-[#E5DDD0]/80 hover:text-[#C5A059]'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#C5A059]" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (with Menu Board quick inspect affordance) */}
          <div className="hidden sm:flex items-center space-x-4 shrink-0">
            <button
              onClick={() => onOpenMenuModal('food')}
              className="text-xs uppercase tracking-[0.14em] text-[#E5DDD0]/70 hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center space-x-1.5"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Original Carte</span>
            </button>

            <button
              onClick={() => onOpenReservation()}
              className="px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#070B09] bg-[#C5A059] hover:bg-[#DFC28D] transition-colors whitespace-nowrap shrink-0 shadow-lg cursor-pointer"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenReservation()}
              className="bg-[#C5A059] text-[#070B09] text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 shadow"
            >
              Reserve
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-[#F5EFE4] hover:text-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#070B09]/98 border-b border-[#C5A059]/30 px-6 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  activeSection === link.id
                    ? 'text-[#C5A059] font-semibold'
                    : 'text-[#E5DDD0]/80 hover:text-[#C5A059]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#C5A059]/20 space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMenuModal('food');
                }}
                className="py-2.5 px-3 border border-[#C5A059]/30 text-[#E5DDD0] text-xs font-medium tracking-wider uppercase bg-[#0D1B15] text-center"
              >
                Food Board
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMenuModal('drinks');
                }}
                className="py-2.5 px-3 border border-[#C5A059]/30 text-[#E5DDD0] text-xs font-medium tracking-wider uppercase bg-[#0D1B15] text-center"
              >
                Drinks Board
              </button>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 bg-[#C5A059] text-[#070B09] font-bold text-xs uppercase tracking-[0.2em] shadow"
            >
              Request Table Reservation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
