import React from 'react';
import { Users, Wine, Trophy, HeartHandshake } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

export const ExperienceHighlights: React.FC = () => {
  const experiences = [
    {
      title: 'Dry-Aged Beef Mastery',
      tagline: '35 to 45 days in Himalayan salt chambers.',
      description: 'Hand-cut Ribeye, Tomahawk, and Chateaubriand steaks seared over open oak embers, basted with herb marrow butter and served with four classical reductions.',
      image: restaurantData.ribeyeHeroUrl,
      icon: Users,
    },
    {
      title: 'Cellar Draughts & Single Malts',
      tagline: 'Cellar-poured Guinness and rare Scotch.',
      description: 'Chilled draught stout served at 6°C alongside single malts, reserve cocktails, and fine Mediterranean vintages on polished mahogany.',
      image: restaurantData.cellarHeroUrl,
      icon: Wine,
    },
    {
      title: 'The Veranda Salon & Screenings',
      tagline: 'Match day camaraderie and evening acoustics.',
      description: 'High-definition stadium clarity broadcasts across our open-air terrace with live evening performances, dance showcases, and DJ performances.',
      image: restaurantData.realTerracePhotoUrl,
      icon: Trophy,
    },
    {
      title: 'White-Glove Hospitality',
      tagline: 'Complimentary private resort transfers.',
      description: 'Door-to-door luxury shuttle service across all Türkler hotels, enclosed children’s garden playground, and genuine Turkish Mediterranean care.',
      image: restaurantData.terraceHeroUrl,
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="highlights" className="py-28 bg-[#09100C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            L'Excellence · Four Pillars of Hospitality
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4">
            Curated For Distinguished Evenings
          </h2>
          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "Every facet of Green Heaven in Türkler is orchestrated for uncompromising culinary pleasure and relaxed coastal grandeur."
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="group bg-[#0D1B15] border border-[#C5A059]/25 hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col shadow-xl"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#070B09]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B15] via-transparent to-transparent opacity-85" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 bg-[#070B09]/90 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-semibold block mb-1">
                      0{idx + 1}. Pillar
                    </span>
                    <h3 className="font-serif-luxury text-xl font-normal text-[#F5EFE4] group-hover:text-[#C5A059] transition-colors mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-[#C5A059] mb-3 leading-snug font-serif-luxury italic">
                      "{exp.tagline}"
                    </p>
                    <p className="text-xs text-[#E5DDD0]/75 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
