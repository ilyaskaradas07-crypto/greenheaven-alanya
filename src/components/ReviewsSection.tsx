import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { verifiedReviews, reviewsSummary } from '../data/reviewsData';
import { restaurantData } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-28 bg-[#070B09] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            Critiques &amp; Guest Accolades
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4">
            Distinguished Guest Impressions
          </h2>
          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "Reflections from international epicures, steak lovers, and British travelers dining at our Türkler tables."
          </p>
        </div>

        {/* Rating Overview Scorecard */}
        <div className="max-w-3xl mx-auto bg-[#0D1B15] p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 border border-[#C5A059] bg-[#070B09] text-[#C5A059] flex flex-col items-center justify-center shrink-0">
              <span className="font-serif-luxury text-2xl font-bold leading-none">4.8</span>
              <span className="text-[9px] uppercase tracking-widest mt-0.5">/ 5.0</span>
            </div>

            <div>
              <div className="flex items-center space-x-1 text-[#C5A059] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-serif-luxury text-[#F5EFE4]">
                Distinction on Google &amp; Restaurant Guru
              </p>
              <p className="text-[11px] text-[#E5DDD0]/60 font-light">
                Documented across 185+ public reviews for Green Heaven in Türkler, Alanya
              </p>
            </div>
          </div>

          <a
            href={restaurantData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] text-[#C5A059] hover:text-[#F5EFE4] border border-[#C5A059]/40 hover:border-[#C5A059] px-5 py-3 transition-colors shrink-0"
          >
            <span>Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {verifiedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0D1B15] p-7 border border-[#C5A059]/20 hover:border-[#C5A059]/45 transition-colors flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#C5A059]/15">
                  <div>
                    <h3 className="font-serif-luxury text-lg text-[#F5EFE4] font-medium">{rev.author}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059] block font-light">{rev.visitType}</span>
                  </div>

                  <div className="flex items-center space-x-1 text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C5A059]" />
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <div className="relative mb-6">
                  <p className="text-xs sm:text-sm text-[#E5DDD0]/80 leading-relaxed font-light italic font-serif-luxury">
                    "{rev.content}"
                  </p>
                </div>
              </div>

              {/* Attribution */}
              <div className="pt-3 border-t border-[#C5A059]/15 flex items-center justify-between text-[11px] text-[#E5DDD0]/50 font-light">
                <span className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] mr-1.5" />
                  Verified via {rev.source}
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guest Highlights Bar (Zero-Pill Discipline: Unboxed text) */}
        <div className="border-t border-[#C5A059]/20 pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E5DDD0]/70 font-light">
          <span className="text-[#C5A059] uppercase tracking-wider font-medium">Guest Accolades:</span>
          {reviewsSummary.sentimentHighlights.map((hl, idx) => (
            <span key={idx} className="flex items-center space-x-2">
              <span>{hl}</span>
              {idx < reviewsSummary.sentimentHighlights.length - 1 && (
                <span aria-hidden="true" className="text-[#C5A059]/40">·</span>
              )}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
