export interface GalleryItem {
  id: string;
  title: string;
  category: 'Live Sports & Matches' | 'Evening Entertainment' | 'Group Gatherings' | 'British Steakhouse' | 'Official Menus';
  description: string;
  imageUrl: string;
  isAuthenticAsset?: boolean;
}

export const galleryCategories = [
  'All',
  'Live Sports & Matches',
  'Evening Entertainment',
  'Group Gatherings',
  'British Steakhouse',
  'Official Menus',
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-real-terrace',
    title: 'Green Heaven Outdoor Terrace & Neon Pub',
    category: 'Group Gatherings',
    description: 'The authentic bustling outdoor terrace in Türkler with neon "GREEN HEAVEN STEAK HOUSE PUB" and evening entertainment banner.',
    imageUrl: '/public/assets/aistudio/603752475_1472498971549952_7593596984536932200_n__1__0493efb5.jpg',
    isAuthenticAsset: true,
  },
  {
    id: 'gal-football-fans-match',
    title: 'Premier League & Match Day Cheering',
    category: 'Live Sports & Matches',
    description: 'International supporters and British fans gathered around the garden terrace watching big-screen live football matches with cold pints.',
    imageUrl: '/src/assets/images/football_fans_match_day_1793659790725.jpg',
  },
  {
    id: 'gal-karaoke-night-show',
    title: 'Every Evening Live Entertainment & Karaoke',
    category: 'Evening Entertainment',
    description: 'Acoustic singers, karaoke nights, and professional dance shows under glowing festoon string lights on the terrace.',
    imageUrl: '/src/assets/images/karaoke_live_entertainment_1793659791419.jpg',
  },
  {
    id: 'gal-group-celebration-toast',
    title: 'Group Celebrations & Holiday Gatherings',
    category: 'Group Gatherings',
    description: 'Friends and families toasting cold draught beers and signature cocktails over sizzling steak cuts and burgers.',
    imageUrl: '/src/assets/images/group_terrace_celebration_1793659792414.jpg',
  },
  {
    id: 'gal-sizzling-mixed-grill',
    title: 'Sizzling Mixed Grill & Steak Skillet Feast',
    category: 'British Steakhouse',
    description: 'Smoking skillet with lamb skewers, prime steak slices, roasted tomatoes, and seasoned steakhouse fries.',
    imageUrl: '/src/assets/images/sizzling_mixed_grill_platter_1793659792922.jpg',
  },
  {
    id: 'gal-family-dinner-play',
    title: 'Family Garden Dining & Children\'s Playground',
    category: 'Group Gatherings',
    description: 'Parents unwinding with prime steaks and fine wine while children play safely in the adjacent playground with slides and swings.',
    imageUrl: '/src/assets/images/family_dining_kids_play_1793659793524.jpg',
  },
  {
    id: 'gal-real-food-menu',
    title: 'Official Printed Food Menu Board (Items 1–67)',
    category: 'Official Menus',
    description: 'The physical menu board preserved from Türkler listing Steak Specials, Seafood, Turkish grills, and Indian specialties.',
    imageUrl: '/public/assets/aistudio/632933134_1520100843456431_7241556113060499993_n_452e020b.jpg',
    isAuthenticAsset: true,
  },
  {
    id: 'gal-real-drinks-menu',
    title: 'Official Printed Drinks & Cocktails Board',
    category: 'Official Menus',
    description: 'The physical drinks board with Draught Guinness, European beers, 24+ signature cocktails, and party aquariums.',
    imageUrl: '/public/assets/aistudio/658773953_1559876412812207_2444740381900634416_n_4739a148.jpg',
    isAuthenticAsset: true,
  },
  {
    id: 'gal-prime-ribeye',
    title: '35-Day Himalayan Salt-Aged Ribeye',
    category: 'British Steakhouse',
    description: 'Carved thick on black slate with rich bone marrow reduction, charred garlic, and coarse sea salt flakes.',
    imageUrl: '/src/assets/images/michelin_prime_ribeye_steak_1793658924853.jpg',
  },
  {
    id: 'gal-tomahawk-cut',
    title: 'Grand Tomahawk & Chateaubriand Reserve',
    category: 'British Steakhouse',
    description: 'Charcoal-grilled bone-in tomahawk and carved tenderloin basted with cognac green peppercorn glaze.',
    imageUrl: '/src/assets/images/michelin_tomahawk_board_1793658926040.jpg',
  },
  {
    id: 'gal-draught-pints',
    title: 'Cellar Draught Guinness & Single Malts',
    category: 'Live Sports & Matches',
    description: 'Poured at pristine 6°C cellar temperature alongside curated Scotch malts on polished antique mahogany.',
    imageUrl: '/src/assets/images/michelin_cellar_cocktails_1793658927891.jpg',
  },
  {
    id: 'gal-twilight-terrace',
    title: 'Twilight Veranda Dining Under Palm Canopy',
    category: 'Group Gatherings',
    description: 'Candlelit white tablecloth dining overlooking Mediterranean sea breezes with live evening acoustics.',
    imageUrl: '/src/assets/images/michelin_luxury_terrace_1793658927565.jpg',
  },
  {
    id: 'gal-real-logo',
    title: 'Official Green Heaven Crest & Brand Emblem',
    category: 'Official Menus',
    description: 'The gold palm and sunset insignia of Green Heaven Restaurant Steak House Sport Bar.',
    imageUrl: '/public/assets/aistudio/662062279_1565494492250399_5201436733719656398_n_7b0b9a48.jpg',
    isAuthenticAsset: true,
  },
];
