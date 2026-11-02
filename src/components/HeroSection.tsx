import React from 'react';
import { Calendar, UtensilsCrossed, ChevronDown, Eye, Compass, Wine, Car } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreMenuClick: () => void;
  onViewMenuBoard: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onExploreMenuClick,
  onViewMenuBoard,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#070B09]"
    >
      {/* Background Image: Authentic Atmosphere with Deep Cinematic Obsidian & British Racing Green Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantData.realTerracePhotoUrl}
          alt="Green Heaven Restaurant & Steak House in Türkler, Alanya"
          className="w-full h-full object-cover object-center brightness-[0.28] filter contrast-125"
        />
        {/* Layered Vignettes for Solemn Michelin Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-[#070B09]/80 to-[#070B09]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070B09_90%)]" />
      </div>

      {/* Subtle Warm Brass Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Authentic Crest Emblem in Royal Brass Medal Frame */}
        <div className="mb-6 relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C5A059]/80 shadow-2xl p-0.5 bg-[#070B09]">
            <img
              src={restaurantData.logoUrl}
              alt="Green Heaven Official Crest"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Unboxed Metadata Eyebrow (Zero-Pill Discipline) */}
        <div className="flex items-center space-x-3 text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C5A059] font-medium mb-5">
          <span>Türkler · Alanya</span>
          <span aria-hidden="true" className="text-[#C5A059]/40">·</span>
          <span>Haute Steakhouse &amp; Mediterranean Catch</span>
          <span aria-hidden="true" className="text-[#C5A059]/40">·</span>
          <span>Est. 1994</span>
        </div>

        {/* Stately Monumental Headline: Green Heaven Türkler */}
        <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F5EFE4] leading-[1.05] mb-5 tracking-[0.06em] uppercase">
          GREEN HEAVEN <span className="text-[#C5A059] block sm:inline">TÜRKLER</span>
        </h1>

        {/* Refined Smaller Description Below */}
        <p className="text-sm sm:text-base lg:text-lg text-[#E5DDD0]/85 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-serif-luxury italic">
          Premier British Steak House, Draught Cellar &amp; Live Sports Terrace in Türkler, Alanya. Famed for 35-day dry-aged prime cuts, match-day electric atmosphere, evening live entertainment, and complimentary resort chauffeur service.
        </p>

        {/* Primary Michelin Luxury CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 shadow-xl transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Your Table</span>
          </button>

          <button
            onClick={onExploreMenuClick}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#0D1B15] hover:bg-[#12241C] text-[#F5EFE4] font-medium text-xs uppercase tracking-[0.18em] px-7 py-4 border border-[#C5A059]/40 hover:border-[#C5A059] transition-all duration-200 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C5A059]" />
            <span>The 67-Dish Carte</span>
          </button>

          <button
            onClick={onViewMenuBoard}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#0D1B15]/80 text-[#C5A059] font-medium text-xs uppercase tracking-[0.16em] px-6 py-4 border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-200 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Archival Menu Boards</span>
          </button>
        </div>

        {/* 3 Stately Pillars (Unboxed, Sophisticated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-8 border-t border-[#C5A059]/20 text-left">
          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold flex items-center space-x-2">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>01. Dry-Aged Beef Sanctum</span>
            </div>
            <p className="text-xs text-[#E5DDD0]/70 leading-relaxed font-light">
              Himalayan salt-aged Ribeye, Tomahawk &amp; Chateaubriand with 4 classical reductions.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold flex items-center space-x-2">
              <Wine className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>02. The Veranda &amp; Cellar</span>
            </div>
            <p className="text-xs text-[#E5DDD0]/70 leading-relaxed font-light">
              Candlelit garden dining, cellar draught Guinness at 6°C, and evening live acoustics.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold flex items-center space-x-2">
              <Car className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>03. Private Resort Chauffeur</span>
            </div>
            <p className="text-xs text-[#E5DDD0]/70 leading-relaxed font-light">
              Door-to-door complimentary luxury transfer from hotels across Türkler upon booking.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#steaks"
          className="mt-12 inline-flex flex-col items-center text-xs tracking-[0.25em] uppercase text-[#C5A059]/70 hover:text-[#C5A059] transition-colors focus:outline-none"
          aria-label="Scroll to cuts"
        >
          <span className="text-[10px] mb-1">Discover The Cuts</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>

      </div>
    </section>
  );
};
