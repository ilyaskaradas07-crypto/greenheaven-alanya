import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SteakSpecialShowcase } from './components/SteakSpecialShowcase';
import { AboutSection } from './components/AboutSection';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { MenuSection } from './components/MenuSection';
import { SportsBarSection } from './components/SportsBarSection';
import { FoodGallery } from './components/FoodGallery';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { JamesLetterSection } from './components/JamesLetterSection';
import { Footer } from './components/Footer';
import { OriginalMenuModal } from './components/OriginalMenuModal';

export function App() {
  const [preselectedOccasion, setPreselectedOccasion] = useState<string>('Dinner');
  const [focusTrigger, setFocusTrigger] = useState<number>(0);
  const [menuModalType, setMenuModalType] = useState<'food' | 'drinks' | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReservation = (occasion: string = 'Dinner') => {
    setPreselectedOccasion(occasion);
    setFocusTrigger((prev) => prev + 1);
    scrollToSection('reservation');
  };

  const handleBookSteakTable = (steakName?: string) => {
    setPreselectedOccasion('Dinner');
    setFocusTrigger((prev) => prev + 1);
    scrollToSection('reservation');
  };

  const handleBookMatchDay = () => {
    setPreselectedOccasion('Sports Match');
    setFocusTrigger((prev) => prev + 1);
    scrollToSection('reservation');
  };

  return (
    <div className="min-h-screen bg-[#070B09] text-[#F5EFE4] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#070B09]">
      {/* 1. Sticky Navigation with Crest Logo & Menu Board Links */}
      <Navbar
        onOpenReservation={handleOpenReservation}
        onOpenMenuModal={(type) => setMenuModalType(type)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section with British Steakhouse Heritage */}
        <HeroSection
          onBookClick={() => handleOpenReservation('Dinner')}
          onExploreMenuClick={() => scrollToSection('menu')}
          onViewMenuBoard={() => setMenuModalType('food')}
        />

        {/* 3. Dedicated British Steakhouse Cuts & Sauces Showcase */}
        <SteakSpecialShowcase onBookSteakTable={handleBookSteakTable} />

        {/* 4. Restaurant Introduction with Real Outdoor Terrace Photo */}
        <AboutSection
          onDiscoverClick={() => scrollToSection('highlights')}
          onOpenMenuModal={(type) => setMenuModalType(type)}
        />

        {/* 5. Signature Experience Highlights */}
        <ExperienceHighlights />

        {/* 6. Complete Official Menu (Items 1-67 & Drinks Board) */}
        <MenuSection
          onBookTable={(dishName) => handleOpenReservation(`Dinner - ${dishName || 'Menu Request'}`)}
          onOpenMenuModal={(type) => setMenuModalType(type)}
        />

        {/* 7. Sports Bar & Pub Match Day Lounge */}
        <SportsBarSection
          onBookMatchDay={handleBookMatchDay}
          onPlanVisit={() => scrollToSection('contact')}
        />

        {/* 8. Food & Drinks Magazine Showcase */}
        <FoodGallery onExploreMenu={() => scrollToSection('menu')} />

        {/* 9. Core Reservation System (Table & WhatsApp) */}
        <ReservationSection
          preselectedOccasion={preselectedOccasion}
          focusFormTrigger={focusTrigger}
        />

        {/* 10. Photo Gallery Featuring Authentic Terrace & Menu Photos */}
        <GallerySection />

        {/* 11. Verified Guest Reviews */}
        <ReviewsSection />

        {/* 12. Location & Contact Details with Map */}
        <LocationContactSection onBookTable={() => handleOpenReservation('Dinner')} />

        {/* 13. Personal Closing Address from James (Proprietor & Host) */}
        <JamesLetterSection onBookTable={() => handleOpenReservation('Host Dining Invitation')} />
      </main>

      {/* 14. British Green & Gold Footer */}
      <Footer onOpenReservation={() => handleOpenReservation('Dinner')} />

      {/* 14. High-Resolution Original Menu Boards Lightbox Modal */}
      <OriginalMenuModal
        initialType={menuModalType}
        onClose={() => setMenuModalType(null)}
      />
    </div>
  );
}

export default App;
