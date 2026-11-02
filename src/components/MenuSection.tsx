import React, { useState, useMemo } from 'react';
import { Search, Utensils, Wine, Eye, ChevronRight } from 'lucide-react';
import {
  officialFoodMenu,
  officialDrinksMenu,
  foodCategories,
  FoodMenuItem,
  steakSauces,
} from '../data/menuData';

interface MenuSectionProps {
  onBookTable: (dishName?: string) => void;
  onOpenMenuModal: (type: 'food' | 'drinks') => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onBookTable, onOpenMenuModal }) => {
  const [activeMenuTab, setActiveMenuTab] = useState<'food' | 'drinks'>('food');
  const [selectedFoodCategory, setSelectedFoodCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [glutenFreeOnly, setGlutenFreeOnly] = useState(false);

  // Filter food items
  const filteredFoodItems = useMemo(() => {
    return officialFoodMenu.filter((item) => {
      const matchesCategory =
        selectedFoodCategory === 'All' || item.category === selectedFoodCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.number.toString().includes(searchQuery);

      const matchesGlutenFree = !glutenFreeOnly || item.isGlutenFree;

      return matchesCategory && matchesSearch && matchesGlutenFree;
    });
  }, [selectedFoodCategory, searchQuery, glutenFreeOnly]);

  // Filter drinks items
  const filteredDrinkItems = useMemo(() => {
    return officialDrinksMenu.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }, [searchQuery]);

  return (
    <section id="menu" className="py-28 bg-[#070B09] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-[#0D1B15] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            La Grande Carte · Complete Transcription
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4">
            The 67-Dish Carte Gastronomique
          </h2>
          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "Transcribed faithfully from our physical menu boards in Türkler, featuring aged steaks, Mediterranean catches, and classic British cellar draughts."
          </p>
        </div>

        {/* Archival Banner: Inspect Original Menu Boards */}
        <div className="max-w-4xl mx-auto bg-[#0D1B15] border border-[#C5A059]/35 p-6 mb-14 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#070B09] border border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-normal text-[#F5EFE4]">
                Archival Physical Menu Boards
              </h3>
              <p className="text-xs text-[#E5DDD0]/70 font-light">
                Inspect high-resolution photographs of the actual printed Food and Drinks boards displayed at our venue.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenMenuModal('food')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.16em] px-5 py-3 shadow transition-all cursor-pointer"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Food Board</span>
            </button>

            <button
              onClick={() => onOpenMenuModal('drinks')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#12241C] text-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] font-medium text-xs uppercase tracking-[0.16em] px-5 py-3 transition-colors cursor-pointer"
            >
              <Wine className="w-3.5 h-3.5" />
              <span>Drinks Board</span>
            </button>
          </div>
        </div>

        {/* Major Switcher: Food vs Cellar & Drinks */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-[#C5A059]/30 p-1 bg-[#09100C]">
            <button
              onClick={() => {
                setActiveMenuTab('food');
                setSearchQuery('');
              }}
              className={`flex items-center space-x-2.5 px-7 py-3 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                activeMenuTab === 'food'
                  ? 'bg-[#C5A059] text-[#070B09] font-bold shadow'
                  : 'text-[#E5DDD0]/70 hover:text-[#F5EFE4]'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>La Carte (Items 01–67)</span>
            </button>

            <button
              onClick={() => {
                setActiveMenuTab('drinks');
                setSearchQuery('');
              }}
              className={`flex items-center space-x-2.5 px-7 py-3 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                activeMenuTab === 'drinks'
                  ? 'bg-[#C5A059] text-[#070B09] font-bold shadow'
                  : 'text-[#E5DDD0]/70 hover:text-[#F5EFE4]'
              }`}
            >
              <Wine className="w-3.5 h-3.5" />
              <span>The Cellar &amp; Pub Drinks</span>
            </button>
          </div>
        </div>

        {/* Search & Dietary Controls */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 text-[#C5A059] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                activeMenuTab === 'food'
                  ? 'Search by dish number (#39), steak cut, seafood, lamb, pasta...'
                  : 'Search Guinness, single malt, cocktail, champagne...'
              }
              className="w-full bg-[#0D1B15] border border-[#C5A059]/25 focus:border-[#C5A059] text-[#F5EFE4] placeholder-[#E5DDD0]/40 text-xs tracking-wide pl-11 pr-4 py-3.5 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#E5DDD0]/60 hover:text-[#F5EFE4]"
              >
                Clear
              </button>
            )}
          </div>

          {activeMenuTab === 'food' && (
            <label className="flex items-center space-x-2 text-xs text-[#E5DDD0] bg-[#0D1B15] border border-[#C5A059]/25 px-5 py-3.5 cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={glutenFreeOnly}
                onChange={(e) => setGlutenFreeOnly(e.target.checked)}
                className="h-3.5 w-3.5 accent-[#C5A059]"
              />
              <span className="text-[#C5A059] font-medium tracking-wider">Gluten-Free Only</span>
            </label>
          )}
        </div>

        {/* FOOD MENU VIEW */}
        {activeMenuTab === 'food' && (
          <div>
            {/* Category Navigation (Zero-Pill Discipline: Text items with active gold indicator) */}
            <div className="flex items-center justify-start sm:justify-center space-x-1 sm:space-x-3 overflow-x-auto pb-4 mb-10 border-b border-[#C5A059]/20">
              {foodCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFoodCategory(cat)}
                  className={`text-xs uppercase tracking-[0.15em] px-3 py-2 whitespace-nowrap transition-colors relative cursor-pointer ${
                    selectedFoodCategory === cat
                      ? 'text-[#C5A059] font-bold'
                      : 'text-[#E5DDD0]/60 hover:text-[#F5EFE4]'
                  }`}
                >
                  {cat}
                  {selectedFoodCategory === cat && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
                  )}
                </button>
              ))}
            </div>

            {/* Advisory Strip */}
            <div className="bg-[#09100C] border border-[#C5A059]/20 p-4 mb-10 text-xs text-[#E5DDD0]/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-[#C5A059]">
                <span className="font-semibold uppercase tracking-wider">
                  Grill &amp; Steak Accompaniment:
                </span>
                <span className="text-[#E5DDD0]/70 font-light">
                  Served with market vegetables &amp; fries
                </span>
              </div>
              <div className="text-[#C5A059] font-medium font-serif-luxury italic text-sm">
                Sauces: Peppercorn Cognac · Wild Mushroom · Rich Bone Marrow Gravy · Homemade Béarnaise
              </div>
            </div>

            {/* Food Grid */}
            {filteredFoodItems.length === 0 ? (
              <div className="text-center py-16 bg-[#0D1B15] border border-[#C5A059]/20 max-w-md mx-auto p-8">
                <Utensils className="w-8 h-8 text-[#C5A059]/50 mx-auto mb-3" />
                <h4 className="font-serif-luxury text-lg text-[#F5EFE4]">No dishes match your query</h4>
                <p className="text-xs text-[#E5DDD0]/60 mt-1 mb-5 font-light">
                  Try searching with a dish number or reset active criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFoodCategory('All');
                    setGlutenFreeOnly(false);
                  }}
                  className="text-xs bg-[#070B09] border border-[#C5A059] text-[#C5A059] px-4 py-2 uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFoodItems.map((item) => (
                  <div
                    key={item.number}
                    className="bg-[#0D1B15] p-6 border border-[#C5A059]/20 hover:border-[#C5A059]/55 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                  >
                    <div>
                      {/* Top Bar: Item Number & Dietary Mark */}
                      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#C5A059]/15">
                        <div className="flex items-center space-x-2">
                          <span className="font-serif-luxury text-sm font-semibold text-[#C5A059]">
                            #{item.number < 10 ? `0${item.number}` : item.number}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.16em] text-[#E5DDD0]/50 font-medium">
                            {item.category}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          {item.isGlutenFree && (
                            <span className="text-[10px] text-[#C5A059] tracking-wider uppercase">
                              Gluten-Free
                            </span>
                          )}
                          {item.badge && (
                            <span className="text-[9px] bg-[#C5A059] text-[#070B09] px-1.5 py-0.5 font-bold uppercase tracking-wider">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Name */}
                      <h4 className="font-serif-luxury text-xl font-normal text-[#F5EFE4] group-hover:text-[#C5A059] transition-colors mb-2">
                        {item.name}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-[#E5DDD0]/75 leading-relaxed font-light mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-3 border-t border-[#C5A059]/15 flex items-center justify-between">
                      {item.servesPax ? (
                        <span className="text-[11px] text-[#C5A059] font-medium font-serif-luxury italic">
                          Created for {item.servesPax} Guests
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#E5DDD0]/50 font-light">
                          Prepared à la minute
                        </span>
                      )}

                      <button
                        onClick={() => onBookTable(item.name)}
                        className="text-xs text-[#C5A059] hover:text-[#F5EFE4] uppercase tracking-wider font-semibold inline-flex items-center space-x-1 transition-colors cursor-pointer"
                      >
                        <span>Reserve</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DRINKS VIEW */}
        {activeMenuTab === 'drinks' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrinkItems.map((drink, idx) => (
                <div
                  key={idx}
                  className="bg-[#0D1B15] p-6 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#C5A059]/15">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">
                        {drink.category}
                      </span>
                      {drink.badge && (
                        <span className="text-[9px] bg-[#C5A059] text-[#070B09] px-1.5 py-0.5 font-bold uppercase tracking-wider">
                          {drink.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif-luxury text-xl font-normal text-[#F5EFE4] mb-2">
                      {drink.name}
                    </h4>

                    {drink.description && (
                      <p className="text-xs text-[#E5DDD0]/75 leading-relaxed font-light mb-6">
                        {drink.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#C5A059]/15 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#E5DDD0]/50 font-light">
                      Cellar Poured
                    </span>
                    <button
                      onClick={() => onBookTable(`Cellar / ${drink.name}`)}
                      className="text-[#C5A059] hover:text-[#F5EFE4] uppercase tracking-wider font-semibold text-xs cursor-pointer"
                    >
                      Reserve Table
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-14 pt-8 border-t border-[#C5A059]/20 flex flex-wrap items-center justify-center gap-8 text-xs text-[#E5DDD0]/60">
          <span className="text-[#C5A059] uppercase tracking-wider font-semibold">Carte Legend:</span>
          <span>Gluten-Free Options Available</span>
          <span>(2 Pax) = Designed for Two</span>
          <span>4 Classical Steak Reductions Included</span>
          <span>100% Halal-Certified Kitchen</span>
        </div>

      </div>
    </section>
  );
};
