import React from 'react';
import { ArrowRight } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface FoodGalleryProps {
  onExploreMenu: () => void;
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ onExploreMenu }) => {
  const showcaseImages = [
    {
      title: 'Grand Tomahawk & Charcoal Flame',
      subtitle: 'Charcoal-scorched prime bone-in rib cut with cognac peppercorn reduction',
      image: restaurantData.tomahawkHeroUrl,
      span: 'md:col-span-2 aspect-[16/10]',
    },
    {
      title: 'Live Football Match Day Cheering',
      subtitle: 'Supporters gathering for Premier League & European football on terrace big screens',
      image: '/src/assets/images/football_fans_match_day_1793659790725.jpg',
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Group Celebrations & Holiday Toasts',
      subtitle: 'Friends toasting cold draught beers and cocktails over sizzling steak cuts',
      image: '/src/assets/images/group_terrace_celebration_1793659792414.jpg',
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Every Evening Live Music & Karaoke',
      subtitle: 'Acoustic singers, stage shows, and lively terrace karaoke under the night stars',
      image: '/src/assets/images/karaoke_live_entertainment_1793659791419.jpg',
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Sizzling Mixed Grill Skillet',
      subtitle: 'Smoking platter with lamb chops, marinated skewers, and steak cuts',
      image: '/src/assets/images/sizzling_mixed_grill_platter_1793659792922.jpg',
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Family Terrace Dining & Playground',
      subtitle: 'Relaxed garden dining while children play safely in the adjoining playground',
      image: '/src/assets/images/family_dining_kids_play_1793659793524.jpg',
      span: 'md:col-span-2 aspect-[16/9]',
    },
  ];

  return (
    <section className="py-28 bg-[#070B09] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
              Tableaux Gastronomiques · Visual Portfolio
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-3">
              The Epicurean Canvas
            </h2>
            <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light max-w-xl font-serif-luxury italic">
              "An intimate photographic glimpse into the dry-aging, cellar craft, and veranda evenings of Green Heaven."
            </p>
          </div>

          <button
            onClick={onExploreMenu}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#C5A059] hover:text-[#F5EFE4] border-b border-[#C5A059] pb-1.5 transition-colors cursor-pointer self-start md:self-auto font-medium"
          >
            <span>Explore The 67 Dishes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Magazine Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group border border-[#C5A059]/25 bg-[#0D1B15] ${img.span}`}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[9px] text-[#C5A059] uppercase tracking-[0.2em] font-semibold block mb-1">
                  Green Heaven · Türkler
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F5EFE4] font-normal">
                  {img.title}
                </h3>
                <p className="text-xs text-[#E5DDD0]/75 mt-0.5 font-light">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
