import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Utensils, Wine, Download } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface OriginalMenuModalProps {
  initialType: 'food' | 'drinks' | null;
  onClose: () => void;
}

export const OriginalMenuModal: React.FC<OriginalMenuModalProps> = ({ initialType, onClose }) => {
  const [activeType, setActiveType] = useState<'food' | 'drinks'>('food');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    if (initialType) {
      setActiveType(initialType);
      setZoomLevel(1);
    }
  }, [initialType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!initialType) return null;

  const currentImageUrl =
    activeType === 'food'
      ? restaurantData.foodMenuPhotoUrl
      : restaurantData.drinksMenuPhotoUrl;

  const currentTitle =
    activeType === 'food'
      ? 'Official Printed Food Carte (Items 1 – 67)'
      : 'Official Printed Cocktails, Beers & Cellar Spirits';

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between bg-[#070B09] border border-[#C5A059]/40 p-3 sm:px-6 shadow-2xl z-10 gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-4">
          <div className="border border-[#C5A059]/40 p-1 flex space-x-1 bg-[#09100C]">
            <button
              onClick={() => {
                setActiveType('food');
                setZoomLevel(1);
              }}
              className={`flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-[0.16em] px-4 py-2 transition-colors cursor-pointer ${
                activeType === 'food'
                  ? 'bg-[#C5A059] text-[#070B09]'
                  : 'text-[#E5DDD0]/70 hover:text-[#F5EFE4]'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Food Board</span>
            </button>

            <button
              onClick={() => {
                setActiveType('drinks');
                setZoomLevel(1);
              }}
              className={`flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-[0.16em] px-4 py-2 transition-colors cursor-pointer ${
                activeType === 'drinks'
                  ? 'bg-[#C5A059] text-[#070B09]'
                  : 'text-[#E5DDD0]/70 hover:text-[#F5EFE4]'
              }`}
            >
              <Wine className="w-3.5 h-3.5" />
              <span>Drinks Board</span>
            </button>
          </div>

          <h3 className="hidden md:block font-serif-luxury text-base text-[#F5EFE4] font-normal truncate max-w-sm">
            {currentTitle}
          </h3>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-[#09100C] text-[#C5A059] hover:bg-[#12241C] border border-[#C5A059]/30 transition-colors cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-[#09100C] text-[#C5A059] hover:bg-[#12241C] border border-[#C5A059]/30 transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            className="p-2 bg-[#09100C] text-[#C5A059] hover:bg-[#12241C] border border-[#C5A059]/30 transition-colors cursor-pointer"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <a
            href={currentImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 bg-[#09100C] text-[#C5A059] hover:bg-[#12241C] border border-[#C5A059]/30 transition-colors"
            title="Open Original Photo in Tab"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="p-2 bg-[#C5A059] text-[#070B09] hover:bg-[#DFC28D] font-bold transition-colors cursor-pointer ml-2"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport with Pan & Zoom */}
      <div
        className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 my-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="transition-transform duration-200 origin-center max-w-full flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={currentImageUrl}
            alt={currentTitle}
            className="max-h-[82vh] w-auto max-w-full object-contain shadow-2xl border border-[#C5A059]/40"
          />
        </div>
      </div>

      {/* Bottom Hint */}
      <div
        className="bg-[#070B09] border border-[#C5A059]/20 py-2.5 px-6 text-center text-xs text-[#E5DDD0]/70 z-10 max-w-md mx-auto font-light"
        onClick={(e) => e.stopPropagation()}
      >
        Archival photograph preserved from Green Heaven venue in Türkler, Alanya.
      </div>
    </div>
  );
};
