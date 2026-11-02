import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Calendar,
  Car,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface LocationContactSectionProps {
  onBookTable: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  onBookTable,
}) => {
  return (
    <section id="location" className="py-28 bg-[#09100C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            Concierge &amp; Coordinates · Türkler, Alanya
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4">
            Salon Location &amp; Inquiries
          </h2>
          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "Conveniently situated along Atatürk Caddesi in Türkler, offering direct road access and private chauffeur transfers across the region."
          </p>
        </div>

        {/* Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business & Contact Info */}
          <div className="lg:col-span-5 bg-[#0D1B15] p-8 border border-[#C5A059]/25 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="pb-4 border-b border-[#C5A059]/20">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
                  Haute Steakhouse &amp; Pub
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#F5EFE4]">
                  Green Heaven
                </h3>
                <p className="text-xs text-[#E5DDD0]/60 tracking-wider uppercase font-light">
                  Türkler Mahallesi · Alanya / Antalya
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 bg-[#070B09] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.16em] text-[#C5A059] font-medium mb-1">
                    Geographic Coordinates
                  </h4>
                  <p className="text-xs font-medium text-[#F5EFE4] leading-relaxed">
                    {restaurantData.address.street}, {restaurantData.address.site}
                  </p>
                  <p className="text-xs text-[#E5DDD0]/60 mt-0.5 font-light">
                    {restaurantData.address.district}, {restaurantData.address.postalCode} {restaurantData.address.town} / {restaurantData.address.province}, {restaurantData.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5 pt-3 border-t border-[#C5A059]/15">
                <div className="w-9 h-9 bg-[#070B09] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.16em] text-[#C5A059] font-medium mb-1">
                    Direct Concierge &amp; WhatsApp
                  </h4>
                  <a
                    href={`tel:${restaurantData.phoneRaw}`}
                    className="text-sm font-serif-luxury text-[#F5EFE4] hover:text-[#C5A059] transition-colors block"
                  >
                    {restaurantData.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#E5DDD0]/60 mt-0.5 font-light">
                    English &amp; Turkish speaking reservation desk
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5 pt-3 border-t border-[#C5A059]/15">
                <div className="w-9 h-9 bg-[#070B09] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.16em] text-[#C5A059] font-medium mb-1">
                    Hours of Service
                  </h4>
                  <p className="text-xs font-medium text-[#F5EFE4]">
                    {restaurantData.openingHours}
                  </p>
                  <div className="space-y-0.5 mt-2 text-xs text-[#E5DDD0]/65 font-light">
                    {restaurantData.openingHoursDetails.map((item, idx) => (
                      <div key={idx} className="flex justify-between w-52">
                        <span>{item.days}:</span>
                        <span className="text-[#F5EFE4] font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Free Shuttle Highlight */}
              <div className="p-3.5 bg-[#070B09] border border-[#C5A059]/25 flex items-center space-x-3 text-xs text-[#E5DDD0]/85 font-light">
                <Car className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>
                  Complimentary resort pickup &amp; return across all Türkler hotels upon reservation.
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-[#C5A059]/20 grid grid-cols-2 gap-3 mt-6">
              <a
                href={`tel:${restaurantData.phoneRaw}`}
                className="flex items-center justify-center space-x-2 bg-[#070B09] hover:bg-[#12241C] text-[#C5A059] border border-[#C5A059]/40 font-semibold text-xs uppercase tracking-wider py-3 px-4 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Desk</span>
              </a>

              <a
                href={restaurantData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-wider py-3 px-4 shadow transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>

              <button
                onClick={onBookTable}
                className="col-span-2 flex items-center justify-center space-x-2 bg-transparent hover:bg-[#070B09] text-[#F5EFE4] border border-[#C5A059]/30 font-medium text-xs uppercase tracking-[0.16em] py-3.5 px-4 transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Reserve Salon Table</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="border border-[#C5A059]/25 shadow-2xl h-full min-h-[420px] bg-[#070B09] flex flex-col">
              
              <iframe
                title="Green Heaven Restaurant & Pub Location Map in Türkler Alanya"
                src="https://maps.google.com/maps?q=Ataturk+Caddesi+Pazar+Sitesi+Turkler+Alanya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="p-4 bg-[#0D1B15] border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-2 text-[#E5DDD0]/70 font-light">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Verified Türkler location (Atatürk Cad. Pazar Sitesi No: 5H)</span>
                </div>

                <a
                  href={restaurantData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:text-[#F5EFE4] font-medium flex items-center space-x-1 uppercase tracking-wider"
                >
                  <span>Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
