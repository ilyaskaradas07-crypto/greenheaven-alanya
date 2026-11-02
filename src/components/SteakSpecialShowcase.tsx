import React, { useState } from 'react';
import { Calendar, ArrowRight, Sparkles, Flame, Check } from 'lucide-react';
import { officialFoodMenu, steakSauces, FoodMenuItem } from '../data/menuData';

interface SteakSpecialShowcaseProps {
  onBookSteakTable: (steakName?: string) => void;
}

export const SteakSpecialShowcase: React.FC<SteakSpecialShowcaseProps> = ({ onBookSteakTable }) => {
  const steakItems = officialFoodMenu.filter((item) => item.category === 'Steak Specials');
  const [selectedCut, setSelectedCut] = useState<FoodMenuItem>(steakItems[0]);
  const [selectedDoneness, setSelectedDoneness] = useState<string>('Saignant (Medium Rare)');

  // Cut-specific details for the 8 authentic cuts (39 - 46)
  const cutDetails: Record<number, { cutGram: string; marbling: string; aging: string; pairing: string; image: string }> = {
    39: {
      cutGram: '350g',
      marbling: 'BMS 7+ (Rich Intramuscular Ribeye Cap)',
      aging: '35-Day Himalayan Rock Salt Dry-Aged',
      pairing: 'Green Peppercorn Cognac Glaze & Full-Bodied Cabernet',
      image: '/src/assets/images/michelin_prime_ribeye_steak_1793658924853.jpg',
    },
    40: {
      cutGram: '300g',
      marbling: 'BMS 6+ (Firm Striploin with Golden Fat Rim)',
      aging: '28-Day Dry-Aged in Cedar Cellar',
      pairing: 'Wild Forest Mushroom Reduction & Syrah',
      image: '/src/assets/images/michelin_prime_ribeye_steak_1793658924853.jpg',
    },
    41: {
      cutGram: '250g',
      marbling: 'BMS 5 (Center-Cut Tenderloin Fillet)',
      aging: 'Wet-Aged for Supreme Butter-Tender Silky Texture',
      pairing: 'Chef\'s Herb Béarnaise & Aged Merlot',
      image: '/src/assets/images/michelin_prime_ribeye_steak_1793658924853.jpg',
    },
    42: {
      cutGram: '500g',
      marbling: 'BMS 7 (Dual Striploin & Tenderloin on Bone)',
      aging: '42-Day Bone-In Dry-Aged',
      pairing: 'Rich Bone Marrow Gravy & Draught Stout',
      image: '/src/assets/images/michelin_tomahawk_board_1793658926040.jpg',
    },
    43: {
      cutGram: '320g',
      marbling: 'BMS 6 (Flavored on Scorched Oak Plank)',
      aging: 'Traditional Swedish-British Plankstek Service with Duchesse Potato',
      pairing: 'Homemade House Sauce & Pinot Noir',
      image: '/src/assets/images/michelin_prime_ribeye_steak_1793658924853.jpg',
    },
    44: {
      cutGram: '1100g',
      marbling: 'BMS 8+ (Long-Bone Grand Rib Steak for 2 Pax)',
      aging: '45-Day Whole-Rib Dry-Aged',
      pairing: 'Tableside Peppercorn Flambé & Reserve Malbec',
      image: '/src/assets/images/michelin_tomahawk_board_1793658926040.jpg',
    },
    45: {
      cutGram: '400g',
      marbling: 'BMS 8 (Master Butcher\'s Hand-Selected Cut)',
      aging: 'Chef\'s Daily Special Selection & Herb-Basting',
      pairing: 'Bespoke Truffle Jus & Turkish Öküzgözü Reserve',
      image: '/src/assets/images/michelin_prime_ribeye_steak_1793658924853.jpg',
    },
    46: {
      cutGram: '600g',
      marbling: 'BMS 7 (Center Chateaubriand Double Fillet for 2)',
      aging: 'Ultra-Tender Center Cut for Tableside Carving',
      pairing: 'Classical Béarnaise & Red Wine Reduction',
      image: '/src/assets/images/michelin_tomahawk_board_1793658926040.jpg',
    },
  };

  const donenessLevels = [
    { name: 'Bleu (Rare)', temp: '48°C · Cool red center, delicate texture' },
    { name: 'Saignant (Medium Rare)', temp: '52°C · Warm red center, supreme juiciness (Chef Choice)' },
    { name: 'À Point (Medium)', temp: '56°C · Velvety warm pink throughout' },
    { name: 'Cuit (Medium Well)', temp: '62°C · Faint pink core, charred mahogany crust' },
    { name: 'Bien Cuit (Well Done)', temp: '68°C · Thoroughly caramelized exterior' },
  ];

  const currentDetail = cutDetails[selectedCut.number] || cutDetails[39];

  return (
    <section id="steaks" className="py-28 bg-[#09100C] relative overflow-hidden">
      {/* Subtle Hairline Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            La Carte des Viandes · Items 39 to 46
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-5 leading-tight">
            The Master Butcher's Dry-Aged Cuts
          </h2>

          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed max-w-2xl mx-auto font-serif-luxury italic">
            "Sourced from prime Anatolian highlands and British heritage breeds, aged in our Himalayan salt chamber, and seared over open oakwood embers."
          </p>
        </div>

        {/* Master Showcase Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20 bg-[#0D1B15] border border-[#C5A059]/25 p-6 sm:p-10 shadow-2xl">
          
          {/* Left Column: Stately Cut Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#C5A059]/20">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                  Official Menu Cuts
                </span>
                <span className="text-[11px] text-[#E5DDD0]/60">
                  8 Bespoke Selections
                </span>
              </div>

              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {steakItems.map((item) => {
                  const isSelected = selectedCut.number === item.number;
                  const itemDetail = cutDetails[item.number];
                  return (
                    <button
                      key={item.number}
                      onClick={() => setSelectedCut(item)}
                      className={`w-full text-left p-3.5 border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#12241C] border-[#C5A059] shadow-lg'
                          : 'bg-[#09100C] border-[#C5A059]/15 hover:border-[#C5A059]/50 hover:bg-[#0E1B15]'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <span className="font-serif-luxury text-sm font-semibold text-[#C5A059] w-6 shrink-0">
                          {item.number < 10 ? `0${item.number}` : item.number}.
                        </span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-serif-luxury text-base text-[#F5EFE4] font-medium">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] uppercase tracking-widest text-[#070B09] bg-[#C5A059] px-1.5 py-0.5 font-bold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[#E5DDD0]/60 block line-clamp-1 font-light">
                            {itemDetail?.cutGram || 'Prime Cut'} · {item.description}
                          </span>
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isSelected ? 'text-[#C5A059] translate-x-1' : 'text-[#E5DDD0]/20'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#E5DDD0]/70">
              <span>All steaks served with seasonal vegetables &amp; fries</span>
              <span className="text-[#C5A059] font-medium">Choice of 4 Sauces</span>
            </div>
          </div>

          {/* Right Column: Selected Cut Culinary Visual & Tasting Notes */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* High-Fidelity Culinary Plating Visual */}
            <div className="relative aspect-[16/10] overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <img
                src={currentDetail.image}
                alt={selectedCut.name}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09100C] via-transparent to-transparent opacity-85" />

              {/* Stately Metadata Overlay */}
              <div className="absolute top-4 left-4 flex items-center space-x-2 text-[11px]">
                <span className="bg-[#070B09]/90 border border-[#C5A059]/40 text-[#C5A059] px-3 py-1 font-mono tracking-wider">
                  Item #{selectedCut.number}
                </span>
                <span className="bg-[#070B09]/90 border border-[#C5A059]/30 text-[#E5DDD0] px-3 py-1 font-mono">
                  {currentDetail.cutGram}
                </span>
                {selectedCut.isGlutenFree && (
                  <span className="bg-[#070B09]/90 border border-[#C5A059]/30 text-[#C5A059] px-2.5 py-1">
                    Gluten-Free
                  </span>
                )}
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#F5EFE4] mb-1 font-normal">
                  {selectedCut.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#E5DDD0]/80 font-light max-w-xl">
                  {selectedCut.description}
                </p>
              </div>
            </div>

            {/* Sommelier & Gastronomic Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#09100C] p-4 border border-[#C5A059]/20">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A059] block font-semibold mb-0.5">
                  Dry-Aging &amp; Provenance
                </span>
                <span className="text-[#E5DDD0]/85 font-light">
                  {currentDetail.aging} · {currentDetail.marbling}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A059] block font-semibold mb-0.5">
                  Sommelier Cellar Suggestion
                </span>
                <span className="text-[#E5DDD0]/85 font-light">
                  {currentDetail.pairing}
                </span>
              </div>
            </div>

            {/* Doneness Selector */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#C5A059] font-medium">
                  Chef's Temperature Cuisson:
                </span>
                <span className="text-[#E5DDD0]/60 text-[11px] font-mono">
                  {selectedDoneness}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {donenessLevels.map((lvl) => (
                  <button
                    key={lvl.name}
                    onClick={() => setSelectedDoneness(lvl.name)}
                    className={`text-left p-2 border transition-colors cursor-pointer ${
                      selectedDoneness === lvl.name
                        ? 'bg-[#C5A059] text-[#070B09] border-[#C5A059] font-semibold'
                        : 'bg-[#09100C] text-[#E5DDD0]/70 border-[#C5A059]/20 hover:border-[#C5A059]/50'
                    }`}
                  >
                    <span className="text-[11px] block font-medium leading-tight">
                      {lvl.name.split(' ')[0]}
                    </span>
                    <span className="text-[9px] opacity-80 block truncate">
                      {lvl.temp.split('·')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Reserve Button */}
            <button
              onClick={() => onBookSteakTable(selectedCut.name)}
              className="w-full inline-flex items-center justify-center space-x-2.5 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.2em] py-4 shadow-xl transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table For {selectedCut.name}</span>
            </button>

          </div>

        </div>

        {/* The 4 Classical British Sauces Card */}
        <div className="bg-[#0D1B15] border border-[#C5A059]/25 p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#C5A059]/20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
                Accompagnements
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5EFE4] font-normal">
                The 4 Classical Steakhouse Reductions
              </h3>
            </div>
            <span className="text-xs text-[#E5DDD0]/60 hidden sm:block">
              Complimentary with every prime cut
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steakSauces.map((sauce, idx) => (
              <div
                key={idx}
                className="bg-[#09100C] p-4 border border-[#C5A059]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-serif-luxury text-lg text-[#F5EFE4] font-medium">
                      {sauce.name}
                    </h4>
                    <span className="text-[#C5A059] text-xs font-serif-luxury">
                      #{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#E5DDD0]/70 leading-relaxed font-light">
                    {sauce.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
