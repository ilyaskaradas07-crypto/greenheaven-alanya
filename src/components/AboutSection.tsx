import React from 'react';
import { Compass, Wine, Music, MapPin, ArrowRight, ShieldCheck, Car } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface AboutSectionProps {
  onDiscoverClick: () => void;
  onOpenMenuModal: (type: 'food' | 'drinks') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverClick, onOpenMenuModal }) => {
  return (
    <section id="about" className="py-28 bg-[#070B09] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0D1B15] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Restaurant Terrace Photograph in Stately Gold Border */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Authentic Photo with Evening Veranda Atmosphere */}
              <div className="relative overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[4/5] bg-[#070B09]">
                <img
                  src={restaurantData.realTerracePhotoUrl}
                  alt="Green Heaven Steak House & Pub outdoor terrace in Türkler, Alanya"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-80" />
                
                {/* Entertainment & Veranda Inscription */}
                <div className="absolute top-4 left-4 right-4 bg-[#070B09]/90 backdrop-blur-md p-4 border border-[#C5A059]/30">
                  <div className="flex items-center space-x-2 text-[#C5A059] mb-1">
                    <Music className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">
                      Evening Veranda Salon
                    </span>
                  </div>
                  <p className="text-xs text-[#F5EFE4] font-medium leading-relaxed font-serif-luxury">
                    Acoustics · Live Performances · DJ Sets · Match Day Screenings
                  </p>
                </div>

                {/* Location & Distinction Marker */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#070B09]/95 backdrop-blur-md p-4 border border-[#C5A059]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] block font-medium">
                      The Veranda · Türkler, Alanya
                    </span>
                    <span className="text-sm font-serif-luxury text-[#F5EFE4]">
                      4.8 / 5.0 Rated Across 180+ Reviews
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-[#E5DDD0]/80">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                    <span>Atatürk Cad.</span>
                  </div>
                </div>
              </div>

              {/* Private Chauffeur Marker */}
              <div className="absolute -bottom-5 -right-4 bg-[#0D1B15] border border-[#C5A059]/40 p-4 shadow-2xl max-w-[220px] hidden sm:block">
                <div className="flex items-center space-x-2 text-[#C5A059] mb-1">
                  <Car className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Private Chauffeur
                  </span>
                </div>
                <p className="text-[11px] text-[#E5DDD0]/80 leading-snug font-light">
                  Complimentary resort pickup &amp; return across Türkler &amp; Payallar
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Michelin Heritage & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
              L'Art de la Table · The Philosophy
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F5EFE4] mb-5 leading-tight">
              A Stately Convergence of British Beef &amp; Mediterranean Terroir
            </h2>

            <p className="text-base text-[#E5DDD0]/90 leading-relaxed mb-6 font-serif-luxury italic">
              "At Green Heaven, every cut of beef is treated with the reverence of a grand chophouse. Our kitchen honors ancient dry-aging traditions while celebrating the vibrant, sea-kissed bounty of the Turkish Riviera."
            </p>

            <p className="text-xs sm:text-sm text-[#E5DDD0]/70 leading-relaxed mb-8 font-light">
              Situated in the tranquil coastal sanctuary of Türkler, Alanya, Green Heaven is curated for discerning travelers and epicures. From thick-sliced 35-day ribeyes seared over open oak embers to cellar-poured Draught Guinness, 24 artisanal cocktails, and complimentary private resort transfers, our mission is uncompromised culinary dignity and heartfelt Turkish hospitality.
            </p>

            {/* 3 Stately Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0D1B15] border border-[#C5A059]/20 p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block font-semibold mb-1">
                  01. The Beef
                </span>
                <h3 className="font-serif-luxury text-sm text-[#F5EFE4] mb-1">Salt Dry-Aged</h3>
                <p className="text-[11px] text-[#E5DDD0]/60 leading-relaxed font-light">
                  8 prime cuts basted with herb marrow butter.
                </p>
              </div>

              <div className="bg-[#0D1B15] border border-[#C5A059]/20 p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block font-semibold mb-1">
                  02. The Cellar
                </span>
                <h3 className="font-serif-luxury text-sm text-[#F5EFE4] mb-1">6°C Draught Stout</h3>
                <p className="text-[11px] text-[#E5DDD0]/60 leading-relaxed font-light">
                  Poured cold alongside single malts and wine.
                </p>
              </div>

              <div className="bg-[#0D1B15] border border-[#C5A059]/20 p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block font-semibold mb-1">
                  03. The Veranda
                </span>
                <h3 className="font-serif-luxury text-sm text-[#F5EFE4] mb-1">Live Twilight</h3>
                <p className="text-[11px] text-[#E5DDD0]/60 leading-relaxed font-light">
                  Candlelit terrace dining and evening shows.
                </p>
              </div>
            </div>

            {/* Inspection Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenMenuModal('food')}
                className="inline-flex items-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.18em] px-6 py-3.5 shadow-lg transition-all cursor-pointer"
              >
                <span>Inspect Physical Food Board</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenMenuModal('drinks')}
                className="inline-flex items-center space-x-2 bg-[#0D1B15] hover:bg-[#12241C] text-[#F5EFE4] font-medium text-xs uppercase tracking-[0.16em] px-6 py-3.5 border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors cursor-pointer"
              >
                <span>Inspect Drinks Board</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
