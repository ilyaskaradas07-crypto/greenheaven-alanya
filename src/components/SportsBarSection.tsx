import React from 'react';
import { Tv, Trophy, Users, Beer, Calendar, ShieldCheck, Flame } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface SportsBarSectionProps {
  onBookMatchDay: () => void;
  onPlanVisit: () => void;
}

export const SportsBarSection: React.FC<SportsBarSectionProps> = ({
  onBookMatchDay,
  onPlanVisit,
}) => {
  const sportsFeatures = [
    {
      title: 'Cellar Draught Guinness at 6°C',
      desc: 'Poured with traditional two-part technique alongside chilled continental lagers: Efes, Tuborg, Carlsberg, Heineken, and Corona.',
      icon: Beer,
    },
    {
      title: 'Private Lounge Screenings',
      desc: 'Dedicated high-definition screens across the open-air garden terrace and indoor air-conditioned parlor with premium match audio.',
      icon: Tv,
    },
    {
      title: 'Curated Scotch & Single Malts',
      desc: 'Extensive whiskey reserve including Jack Daniel\'s, Chivas Regal, Jameson, Black Label, Ballantine\'s, and artisan cocktails.',
      icon: Trophy,
    },
    {
      title: 'International Match Atmosphere',
      desc: 'An inviting, dignified environment where supporters of all premier sporting clubs gather to enjoy camaraderie and culinary excellence.',
      icon: Users,
    },
  ];

  const popularLeagues = [
    'Premier League',
    'UEFA Champions League',
    'La Liga',
    'Formula 1 Grand Prix',
    'Six Nations Rugby',
    'EuroLeague Basketball',
    'International Friendlies',
  ];

  return (
    <section id="sports-bar" className="py-28 bg-[#09100C] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            The Cellar &amp; Parlor · Draughts &amp; Screenings
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4 leading-tight">
            The Cellar Reserve &amp; Sports Salon
          </h2>

          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "A distinguished British club sanctuary where cellar-poured stouts, single malts, and world championship broadcasts unfold in Türkler."
          </p>
        </div>

        {/* Dual Visual Showcase: Match-Day Football Crowds & Evening Live Entertainment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Live Football & Match-Day Cheering */}
          <div className="relative border border-[#C5A059]/40 shadow-2xl overflow-hidden bg-[#070B09] group min-h-[360px] flex flex-col justify-end">
            <img
              src="/src/assets/images/football_fans_match_day_1793659790725.jpg"
              alt="Premier League & European Football Match Day at Green Heaven Türkler"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-[#070B09]/50 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-8">
              <div className="inline-flex items-center space-x-2 bg-[#C5A059] text-[#070B09] text-[10px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 mb-3">
                <Trophy className="w-3 h-3" />
                <span>Premier League &amp; UCL Live</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#F5EFE4] mb-2">
                Live Football Match Day Atmosphere
              </h3>
              <p className="text-xs text-[#E5DDD0]/85 font-light leading-relaxed max-w-md">
                Cheer your club with international fans on our open terrace. Multiple high-clarity big screens, pristine match sound, and ice-cold draught pints delivered straight to your table.
              </p>
            </div>
          </div>

          {/* Card 2: Evening Live Entertainment, Singer & Karaoke */}
          <div className="relative border border-[#C5A059]/40 shadow-2xl overflow-hidden bg-[#070B09] group min-h-[360px] flex flex-col justify-end">
            <img
              src="/src/assets/images/karaoke_live_entertainment_1793659791419.jpg"
              alt="Live Music, Evening Entertainment and Karaoke at Green Heaven"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-[#070B09]/50 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-8">
              <div className="inline-flex items-center space-x-2 bg-[#0D1B15] border border-[#C5A059] text-[#C5A059] text-[10px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 mb-3">
                <Users className="w-3 h-3" />
                <span>Every Evening · Shows &amp; Karaoke</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#F5EFE4] mb-2">
                Live Music, Dance &amp; Group Gatherings
              </h3>
              <p className="text-xs text-[#E5DDD0]/85 font-light leading-relaxed max-w-md">
                Acoustic musicians, professional stage shows, lively karaoke nights, and birthday toasts beneath glowing festoon lights on the palm veranda.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {sportsFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1B15] border border-[#C5A059]/25 p-5 shadow-lg hover:border-[#C5A059]/50 transition-colors"
              >
                <div className="w-9 h-9 bg-[#070B09] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-serif-luxury text-base text-[#F5EFE4] mb-1.5 font-medium">
                  {feat.title}
                </h4>
                <p className="text-xs text-[#E5DDD0]/75 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Competitions Broadcasted */}
        <div className="bg-[#0D1B15] border border-[#C5A059]/25 p-6 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#C5A059] font-medium shrink-0">
              <Flame className="w-3.5 h-3.5" />
              <span>Broadcast Calendar:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {popularLeagues.map((league) => (
                <span
                  key={league}
                  className="text-xs bg-[#070B09] text-[#E5DDD0]/80 px-3 py-1 border border-[#C5A059]/15 font-light"
                >
                  {league}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Match Day CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookMatchDay}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs tracking-[0.18em] uppercase px-8 py-4 shadow-xl transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve For Match Day</span>
          </button>

          <button
            onClick={onPlanVisit}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#0D1B15] text-[#F5EFE4] font-medium text-xs tracking-[0.16em] uppercase px-8 py-4 border border-[#C5A059]/30 transition-colors cursor-pointer"
          >
            <span>Inquire Group &amp; Terrace Booths</span>
          </button>
        </div>

      </div>
    </section>
  );
};
