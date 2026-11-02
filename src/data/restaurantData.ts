export interface RestaurantInfo {
  name: string;
  tagline: string;
  descriptor: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  logoUrl: string;
  realTerracePhotoUrl: string;
  foodMenuPhotoUrl: string;
  drinksMenuPhotoUrl: string;
  ribeyeHeroUrl: string;
  tomahawkHeroUrl: string;
  cellarHeroUrl: string;
  terraceHeroUrl: string;
  address: {
    street: string;
    site: string;
    district: string;
    town: string;
    province: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDirectUrl: string;
  emailContact: string;
  openingHours: string;
  openingHoursDetails: Array<{ days: string; hours: string }>;
  rating: number;
  reviewCount: number;
  reviewSource: string;
  mapsUrl: string;
  socials: {
    instagram: string;
    facebook: string;
  };
  steakSauces: string[];
  amenities: string[];
}

export const restaurantData: RestaurantInfo = {
  name: "GREEN HEAVEN",
  tagline: "HAUTE STEAKHOUSE & MEDITERRANEAN GRILL",
  descriptor: "Prime Beef Dry-Aging · Mediterranean Catch · Private Cellar",
  eyebrow: "MCMXCIV · TÜRKLER · ALANYA",
  headline: "THE ART OF DRY-AGED BEEF & MEDITERRANEAN GASTRONOMY",
  subheadline: "An extraordinary gastronomic sanctuary where 45-day Himalayan salt-aged British cuts, tableside carving mastery, and Mediterranean seafood converge under twilight Turkish skies.",
  logoUrl: "/public/assets/aistudio/662062279_1565494492250399_5201436733719656398_n_7b0b9a48.jpg",
  realTerracePhotoUrl: "/public/assets/aistudio/603752475_1472498971549952_7593596984536932200_n__1__0493efb5.jpg",
  foodMenuPhotoUrl: "/public/assets/aistudio/632933134_1520100843456431_7241556113060499993_n_452e020b.jpg",
  drinksMenuPhotoUrl: "/public/assets/aistudio/658773953_1559876412812207_2444740381900634416_n_4739a148.jpg",
  ribeyeHeroUrl: "/src/assets/images/michelin_prime_ribeye_steak_1793658924853.jpg",
  tomahawkHeroUrl: "/src/assets/images/michelin_tomahawk_board_1793658926040.jpg",
  cellarHeroUrl: "/src/assets/images/michelin_cellar_cocktails_1793658927891.jpg",
  terraceHeroUrl: "/src/assets/images/michelin_luxury_terrace_1793658927565.jpg",
  address: {
    street: "Atatürk Caddesi",
    site: "Pazar Sitesi No: 5H D:F",
    district: "Türkler Mahallesi",
    town: "Alanya",
    province: "Antalya",
    postalCode: "07407",
    country: "Türkiye",
    fullFormatted: "Atatürk Caddesi, Pazar Sitesi No: 5H D:F, Türkler, 07407 Alanya / Antalya, Türkiye",
  },
  phoneDisplay: "+90 539 944 32 04",
  phoneRaw: "905399443204",
  whatsappDirectUrl: "https://wa.me/905399443204?text=Hello%20Green%20Heaven!%20I%20would%20like%20to%20request%20a%20table%20reservation.",
  emailContact: "concierge@greenheaven-turkler.com",
  openingHours: "Open Daily: 08:30 – 02:00",
  openingHoursDetails: [
    { days: "The Dining Room & Terrace", hours: "11:30 – 01:00" },
    { days: "The Cellar, Pub & Spirits", hours: "Until 02:00" },
    { days: "Private Resort Chauffeur", hours: "Complimentary Upon Reservation" },
    { days: "Evening Entertainment", hours: "Acoustics, Live Shows & DJ Sets" },
  ],
  rating: 4.8,
  reviewCount: 185,
  reviewSource: "Google Maps & Restaurant Guru (Türkler)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Green+Heaven+Restaurant+Pub+Sport+Bar+Turkler+Alanya",
  socials: {
    instagram: "https://www.instagram.com/explore/locations/green-heaven-restaurant-turkler/",
    facebook: "https://www.facebook.com/greenheaventurkler/",
  },
  steakSauces: [
    "Green Peppercorn Cognac Glaze",
    "Wild Forest Mushroom Reduction",
    "Slow-Simmered Bone Marrow Gravy",
    "Chef's Secret Herb Béarnaise (Recommended)",
  ],
  amenities: [
    "Himalayan Salt Dry-Aged Cuts (Items 39–46)",
    "White-glove tableside carving and presentation",
    "Choice of 4 classical house sauces & herb butter",
    "Cellar-poured Draught Guinness, European beers & single malts",
    "Complimentary private resort chauffeur across Türkler",
    "Curated 67-dish Carte Gastronomique & gluten-free options",
    "Candlelit open-air garden terrace & covered veranda",
    "Archival physical menu boards available to inspect",
    "Enclosed private play area for dining peace of mind",
  ],
};
