import React from 'react';
import { MessageSquare, Phone, Calendar, HeartHandshake, Wine, Sparkles } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface JamesLetterSectionProps {
  onBookTable: () => void;
}

export const JamesLetterSection: React.FC<JamesLetterSectionProps> = ({ onBookTable }) => {
  return (
    <section id="james-letter" className="py-24 bg-[#060907] relative overflow-hidden border-t border-[#C5A059]/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-[#0D1B15] rounded-full blur-[150px] pointer-events-none opacity-60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Parchment / Dark Basalt Letter Frame with Double Gold Inlay */}
        <div className="bg-[#0A1410] border-2 border-[#C5A059]/40 p-8 sm:p-14 lg:p-16 shadow-2xl relative">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]" />

          {/* Letter Header with Official Crest */}
          <div className="text-center pb-8 mb-8 border-b border-[#C5A059]/20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 border-2 border-[#C5A059] p-0.5 bg-[#070B09] shadow-lg">
              <img
                src={restaurantData.logoUrl}
                alt="Green Heaven Seal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] font-semibold mb-2">
              A Personal Invitation &amp; Closing Words
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#F5EFE4] font-normal tracking-wide">
              A Message from James
            </h2>
            <div className="text-xs text-[#E5DDD0]/60 font-light mt-1 tracking-wider uppercase">
              Proprietor &amp; General Host · Green Heaven Türkler
            </div>
          </div>

          {/* Eloquent English Restaurant Address */}
          <div className="space-y-6 text-[#E5DDD0]/90 font-serif-luxury text-base sm:text-lg leading-relaxed sm:leading-loose">
            <p className="italic text-[#F5EFE4] text-lg sm:text-xl font-normal">
              Dear Guests, Friends, and Fellow Travellers,
            </p>

            <p>
              When we first opened the doors of <span className="text-[#C5A059] font-medium">Green Heaven</span> here in Türkler, our vision was simple yet unwavering: to build a true sanctuary of British steakhouse excellence and genuine coastal hospitality along the sun-blessed Turkish Riviera.
            </p>

            <p>
              To us, dining is never merely about food. It is about the shared laughter of friends gathered around the outdoor terrace, the thunderous cheers during Saturday afternoon Premier League matches, the acoustic melodies and lively karaoke beneath the evening stars, and the peace of mind knowing your children are playing safely in our garden while you savor a rare vintage.
            </p>

            <p>
              Every cut that leaves our kitchen — from our 35-day Himalayan salt dry-aged Ribeye and grand Tomahawk to our authentic lamb skewers and sizzling fajitas — is seasoned with uncompromising pride. And because true hospitality begins at your hotel lobby, our complimentary private chauffeur remains at your service to bring you to our tables and return you safely at night.
            </p>

            <p>
              Whether you are discovering Alanya for the very first time or returning to us as cherished family, my team and I hold our table ready for you. Come as guests, leave as lifelong friends.
            </p>
          </div>

          {/* Valediction & Signature */}
          <div className="mt-10 pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-medium mb-1">
                Warmest Personal Regards,
              </p>
              <div className="font-serif-luxury text-2xl sm:text-3xl text-[#F5EFE4] italic font-normal">
                James &amp; the Green Heaven Family
              </div>
              <p className="text-[11px] text-[#E5DDD0]/60 mt-1">
                Atatürk Caddesi, Pazar Sitesi No: 5H D:F, Türkler Mahallesi, Alanya
              </p>
            </div>

            {/* Direct Host Reservation CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onBookTable}
                className="inline-flex items-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.16em] px-5 py-3 shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve with James</span>
              </button>

              <a
                href={restaurantData.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs uppercase tracking-[0.14em] px-5 py-3 shadow-lg transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp (+90 539 944 32 04)</span>
              </a>

              <a
                href={`tel:${restaurantData.phoneRaw}`}
                className="inline-flex items-center space-x-2 bg-[#070B09] hover:bg-[#0D1B15] text-[#C5A059] border border-[#C5A059]/40 font-medium text-xs uppercase tracking-[0.14em] px-4 py-3 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
