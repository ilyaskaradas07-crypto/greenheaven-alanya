import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '../data/galleryData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [activeLightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-28 bg-[#09100C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            Archival Portfolio · Plates &amp; Salons
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4">
            The Green Heaven Portfolio
          </h2>
          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "A photographic retrospective of dry-aged cuts, the authentic printed menu archives, twilight terrace dining, and cellar pours."
          </p>
        </div>

        {/* Category Tabs (Zero-Pill Discipline) */}
        <div className="flex items-center justify-start sm:justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 mb-12 border-b border-[#C5A059]/20">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-[0.16em] px-3 py-2 whitespace-nowrap transition-colors relative cursor-pointer ${
                selectedCategory === cat
                  ? 'text-[#C5A059] font-bold'
                  : 'text-[#E5DDD0]/60 hover:text-[#F5EFE4]'
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden aspect-[4/3] bg-[#070B09] border border-[#C5A059]/25 cursor-pointer shadow-xl hover:border-[#C5A059]/60 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Hover overlay icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-10 h-10 bg-[#070B09]/90 text-[#C5A059] border border-[#C5A059]/50 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Category tag */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] text-[#C5A059] uppercase tracking-[0.2em] font-semibold block mb-0.5">
                  {item.category}
                </span>
                <p className="text-xs font-serif-luxury text-[#F5EFE4] truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10">
            <div className="text-xs font-mono text-[#E5DDD0]/70">
              <span className="text-[#C5A059] font-bold">
                {activeLightboxIndex + 1}
              </span>{' '}
              / {filteredItems.length}
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 bg-[#070B09] text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-[#070B09] transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-[#070B09] text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-[#070B09] transition-colors z-10 cursor-pointer hidden sm:flex"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-[#070B09] text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-[#070B09] transition-colors z-10 cursor-pointer hidden sm:flex"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image Container */}
          <div
            className="relative max-w-4xl max-h-[75vh] w-full flex flex-col items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeLightboxIndex].imageUrl}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain shadow-2xl border border-[#C5A059]/30"
            />
            
            {/* Caption */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F5EFE4] font-normal">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-[#E5DDD0]/70 mt-1 font-light">
                {filteredItems[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
