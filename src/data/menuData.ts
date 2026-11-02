export interface FoodMenuItem {
  number: number;
  name: string;
  category: 'Steak Specials' | 'Starters' | 'Fresh Salad' | 'Italian Pasta' | 'Pizzas' | 'Sea Food' | 'Vegetarian & Vegan' | 'Mexican Cuisine' | 'Turkish Cuisine' | 'Burgers' | 'Indian Menu';
  description: string;
  isGlutenFree?: boolean;
  isVegetarian?: boolean;
  servesPax?: number;
  badge?: string;
  popular?: boolean;
}

export interface DrinkMenuItem {
  category: 'Beer & Draught' | 'Signature Cocktails' | 'Dirty Cocktails' | 'Aquarium & Sharing Bowls' | 'Frozen Cocktails & Mojitos' | 'Power Mixes' | 'Whiskey & Spirits' | 'Hot Coffee Drinks & Teas' | 'Mocktails & Softs' | 'Shots';
  name: string;
  description?: string;
  badge?: string;
}

export const foodCategories = [
  'All',
  'Steak Specials',
  'Turkish Cuisine',
  'Starters',
  'Burgers',
  'Sea Food',
  'Italian Pasta',
  'Pizzas',
  'Mexican Cuisine',
  'Indian Menu',
  'Vegetarian & Vegan',
  'Fresh Salad',
] as const;

export const steakSauces = [
  { name: 'Peppercorn Sauce', desc: 'Cracked green & black peppercorns in rich reduced cognac cream' },
  { name: 'Mushroom Sauce', desc: 'Sautéed wild woodland mushrooms in velvety garlic butter sauce' },
  { name: 'Gravy Sauce', desc: 'Traditional British pub-style savory roast meat gravy' },
  { name: 'Homemade Sauce (Recommended)', desc: 'Chef’s signature secret steakhouse butter & herb emulsion' },
];

export const officialFoodMenu: FoodMenuItem[] = [
  // STEAK SPECIALS (Items 39-46) - Highlighted for British Steak House
  {
    number: 39,
    name: 'Ribeye Steak',
    category: 'Steak Specials',
    description: 'Juicy ribeye, full of flavor and grilled to your preference. Served with vegetables and french fries with choice of sauce.',
    isGlutenFree: true,
    badge: 'Steakhouse Classic',
    popular: true,
  },
  {
    number: 40,
    name: 'Sirloin Steak',
    category: 'Steak Specials',
    description: 'Tender sirloin with a perfect sear, served with vegetables, golden french fries and artisan steak sauce.',
    isGlutenFree: true,
    badge: 'Prime Cut',
    popular: true,
  },
  {
    number: 41,
    name: 'Tenderloin (Fillet Steak)',
    category: 'Steak Specials',
    description: 'Soft, ultra-lean fillet steak, cooked to your liking. Melt-in-the-mouth texture with vegetables and fries.',
    isGlutenFree: true,
    badge: 'Chef Choice',
    popular: true,
  },
  {
    number: 42,
    name: 'T-Bone Steak',
    category: 'Steak Specials',
    description: 'Classic generous T-bone with a rich flavor and tender texture combining striploin and tenderloin on the bone.',
    isGlutenFree: true,
    badge: 'Bestseller',
    popular: true,
  },
  {
    number: 43,
    name: 'Plank Steak',
    category: 'Steak Specials',
    description: 'Steak served sizzling on a traditional oak wooden plank for a unique visual and aromatic presentation.',
    isGlutenFree: true,
    badge: 'Signature Presentation',
  },
  {
    number: 44,
    name: 'Tomahawk Steak',
    category: 'Steak Specials',
    description: 'Large bone-in ribeye steak, ultra juicy and deeply flavorful. Perfect for sharing or for serious steak enthusiasts.',
    isGlutenFree: true,
    servesPax: 2,
    badge: 'Showstopper',
    popular: true,
  },
  {
    number: 45,
    name: "Chef's Special Steak",
    category: 'Steak Specials',
    description: "Today's chef-selected special steak, hand-trimmed and flame-grilled to perfection.",
    isGlutenFree: true,
    badge: 'Special Selection',
  },
  {
    number: 46,
    name: 'Chateaubriand (2 Pax)',
    category: 'Steak Specials',
    description: 'Prestigious centre-cut tenderloin designed for two persons. Served with garden vegetables, fries, and twin gravies.',
    isGlutenFree: true,
    servesPax: 2,
    badge: 'Luxury For Two',
    popular: true,
  },

  // BURGERS (Items 61-63)
  {
    number: 61,
    name: 'Buggi Burger',
    category: 'Burgers',
    description: 'Prime 100% beef burger with fresh vegetables, melted cheese, and signature house sauce in a soft toasted bun.',
    badge: 'Pub Classic',
    popular: true,
  },
  {
    number: 62,
    name: 'Chicken Burger',
    category: 'Burgers',
    description: 'Grilled or crispy golden chicken patty with crisp salad toppings and garlic mayo in a bun with fries.',
  },
  {
    number: 63,
    name: 'Chef Burger',
    category: 'Burgers',
    description: 'Signature stacked burger with special sauce, aged cheese, caramelized relishes, and fresh toppings.',
    badge: 'House Special',
    popular: true,
  },

  // STARTERS (Items 1-13)
  {
    number: 1,
    name: 'Fried Shrimps',
    category: 'Starters',
    description: 'Crispy golden shrimp served with a tangy dipping sauce and lemon.',
    popular: true,
  },
  {
    number: 2,
    name: 'Fried Calamari',
    category: 'Starters',
    description: 'Lightly fried squid rings served with a zesty dipping sauce.',
    popular: true,
  },
  {
    number: 3,
    name: 'Home Made Garlic Bread',
    category: 'Starters',
    description: 'Freshly baked bread brushed with garlic butter for a warm, savory start.',
  },
  {
    number: 4,
    name: 'Garlic Bread with Cheese',
    category: 'Starters',
    description: 'Toasted bread with garlic butter, topped with melted golden cheese for extra flavor.',
    popular: true,
  },
  {
    number: 5,
    name: 'Soup of the Day',
    category: 'Starters',
    description: "Chef's freshly prepared soup of the day, made with seasonal ingredients.",
    isGlutenFree: true,
  },
  {
    number: 6,
    name: 'Bruschetta',
    category: 'Starters',
    description: 'Toasted bread topped with diced tomatoes, garlic, basil, and virgin olive oil.',
    isVegetarian: true,
  },
  {
    number: 7,
    name: 'Mushroom Pane',
    category: 'Starters',
    description: 'Breaded and fried mushrooms, golden and crispy on the outside, tender inside.',
    isVegetarian: true,
  },
  {
    number: 8,
    name: 'Crispy Chicken',
    category: 'Starters',
    description: 'Tender chicken pieces coated in a crispy golden batter, perfect as a starter.',
    popular: true,
  },
  {
    number: 9,
    name: 'Nuggets',
    category: 'Starters',
    description: 'Bite-sized breaded chicken pieces, crunchy and juicy inside.',
  },
  {
    number: 10,
    name: 'Hummus',
    category: 'Starters',
    description: 'Creamy chickpea dip with virgin olive oil, served with fresh vegetables or gluten-free bread.',
    isGlutenFree: true,
    isVegetarian: true,
  },
  {
    number: 11,
    name: 'Nachos Supreme (Chicken)',
    category: 'Starters',
    description: 'Tortilla chips topped with grilled chicken, cheese, jalapeños, and fresh toppings.',
    isGlutenFree: true,
    badge: 'Match Day Hit',
    popular: true,
  },
  {
    number: 12,
    name: 'Mixed Starter Platter (Sharing)',
    category: 'Starters',
    description: 'Assorted selection of starters including fried, grilled, and fresh items for the table.',
    isGlutenFree: true,
    badge: 'For Sharing',
    popular: true,
  },
  {
    number: 13,
    name: 'Onion Rings',
    category: 'Starters',
    description: 'Crunchy battered onion rings, fried until golden brown.',
    isVegetarian: true,
  },

  // TURKISH CUISINE (Items 49-60)
  {
    number: 49,
    name: 'Lamb Shank',
    category: 'Turkish Cuisine',
    description: 'Slow-cooked lamb shank falling off the bone with rich, savory Anatolian pan juices.',
    isGlutenFree: true,
    badge: 'Specialty',
    popular: true,
  },
  {
    number: 50,
    name: 'Beef Chops',
    category: 'Turkish Cuisine',
    description: 'Tender grilled beef chops, seasoned and flame-seared to perfection.',
    isGlutenFree: true,
  },
  {
    number: 51,
    name: 'Lamb Chops',
    category: 'Turkish Cuisine',
    description: 'Juicy, char-grilled lamb cutlets seasoned with thyme and sea salt.',
    isGlutenFree: true,
    popular: true,
  },
  {
    number: 52,
    name: 'Ottoman Kebab',
    category: 'Turkish Cuisine',
    description: 'Traditional historic Turkish kebab simmered with fragrant aromatic spices and herbs.',
    isGlutenFree: true,
    badge: 'Authentic',
  },
  {
    number: 53,
    name: 'Mixed Grill',
    category: 'Turkish Cuisine',
    description: 'Sumptuous selection of grilled meats including tender lamb, chicken, and beef cuts.',
    isGlutenFree: true,
    badge: 'Top Pick',
    popular: true,
  },
  {
    number: 54,
    name: 'Authentic Chicken Shish Kebab',
    category: 'Turkish Cuisine',
    description: 'Marinated chicken skewers, char-grilled with sweet peppers and onions.',
    isGlutenFree: true,
    popular: true,
  },
  {
    number: 55,
    name: 'Authentic Meat Shish Kebab',
    category: 'Turkish Cuisine',
    description: 'Marinated prime meat skewers, char-grilled to tender juiciness.',
    isGlutenFree: true,
  },
  {
    number: 56,
    name: 'Authentic Mix Shish Kebab',
    category: 'Turkish Cuisine',
    description: 'Combination of tender chicken and prime meat skewers grilled side by side.',
    isGlutenFree: true,
  },
  {
    number: 57,
    name: 'Testi Kebab (2 Pax)',
    category: 'Turkish Cuisine',
    description: 'Famous Turkish meat and vegetables slow-cooked in a sealed Anatolian clay pot, cracked open tableside.',
    isGlutenFree: true,
    servesPax: 2,
    badge: 'Clay Pot Show',
    popular: true,
  },
  {
    number: 58,
    name: 'Chicken Wings',
    category: 'Turkish Cuisine',
    description: 'Seasoned wings, grilled over glowing embers or baked golden.',
    isGlutenFree: true,
  },
  {
    number: 59,
    name: 'Grilled Chicken',
    category: 'Turkish Cuisine',
    description: 'Marinated chicken grilled, served with fresh garden vegetables and bulgur/fries.',
    isGlutenFree: true,
  },
  {
    number: 60,
    name: 'Chicken Schnitzel',
    category: 'Turkish Cuisine',
    description: 'Breaded and golden fried chicken fillet with crisp french fries.',
  },

  // SEA FOOD (Items 30-34)
  {
    number: 30,
    name: 'Grilled Salmon',
    category: 'Sea Food',
    description: 'Fresh salmon fillet grilled to perfection, served with seasonal vegetables and lemon butter.',
    isGlutenFree: true,
    popular: true,
  },
  {
    number: 31,
    name: 'Grilled Jumbo Shrimps',
    category: 'Sea Food',
    description: 'Large Mediterranean shrimps, lightly seasoned and char-grilled for a smoky flavor.',
    isGlutenFree: true,
    badge: 'Chef Special',
    popular: true,
  },
  {
    number: 32,
    name: 'Fish of the Day',
    category: 'Sea Food',
    description: "Chef's daily catch selection of fresh Mediterranean fish, grilled or baked, with vegetables.",
    isGlutenFree: true,
  },
  {
    number: 33,
    name: 'British Fish and Chips',
    category: 'Sea Food',
    description: 'Beer-battered golden fish fillet, fried until crunchy golden, served with steakhouse chips and tartar sauce.',
    badge: 'British Pub Classic',
    popular: true,
  },
  {
    number: 34,
    name: 'Mixed Seafood Plate (Sharing)',
    category: 'Sea Food',
    description: 'Assorted grilled seafood including fresh fish, tender shrimp, and calamari.',
    isGlutenFree: true,
    badge: 'For Sharing',
  },

  // ITALIAN PASTA (Items 18-23)
  {
    number: 18,
    name: 'Penne Seafood Lagunese',
    category: 'Italian Pasta',
    description: 'Penne pasta tossed with tender shrimp, calamari, and seafood in a luxurious creamy sauce.',
    popular: true,
  },
  {
    number: 19,
    name: 'Spaghetti Bolognese',
    category: 'Italian Pasta',
    description: 'Classic spaghetti with slow-cooked minced meat in rich San Marzano tomato sauce.',
  },
  {
    number: 20,
    name: 'Spaghetti Carbonara',
    category: 'Italian Pasta',
    description: 'Spaghetti in creamy sauce with crispy bacon and aged grated parmesan.',
  },
  {
    number: 21,
    name: 'Penne Arrabbiata',
    category: 'Italian Pasta',
    description: 'Spicy tomato sauce with fragrant garlic and chili, tossed with penne pasta.',
    isVegetarian: true,
  },
  {
    number: 22,
    name: 'Fettuccine Chicken',
    category: 'Italian Pasta',
    description: 'Fettuccine pasta with tender chicken pieces in a rich, velvety cream sauce.',
  },
  {
    number: 23,
    name: 'Lasagne (Oven Baked)',
    category: 'Italian Pasta',
    description: 'Layered pasta with savory minced beef, béchamel, and cheese baked to golden bubbly perfection.',
    popular: true,
  },

  // PIZZAS (Items 24-29)
  {
    number: 24,
    name: 'Pizza Kebab',
    category: 'Pizzas',
    description: 'Pizza topped with seasoned kebab meat, onions, peppers, mozzarella, and special sauce.',
    popular: true,
  },
  {
    number: 25,
    name: 'Pizza Tuna',
    category: 'Pizzas',
    description: 'Pizza with tender tuna chunks, mozzarella, sweetcorn, and garden vegetables.',
  },
  {
    number: 26,
    name: 'Pizza Margherita',
    category: 'Pizzas',
    description: 'Classic Italian pizza with rich tomato sauce, mozzarella, and fresh sweet basil.',
    isVegetarian: true,
  },
  {
    number: 27,
    name: 'Funghi Pizza',
    category: 'Pizzas',
    description: 'Stone-baked pizza with fresh mushrooms and melted mozzarella.',
    isVegetarian: true,
  },
  {
    number: 28,
    name: 'Pepperoni Pizza',
    category: 'Pizzas',
    description: 'Pizza topped with spicy beef pepperoni slices and gooey melted cheese.',
    popular: true,
  },
  {
    number: 29,
    name: 'Mexicana Pizza',
    category: 'Pizzas',
    description: 'Fiery pizza with spicy minced meat, bell peppers, onions, and jalapeños.',
  },

  // MEXICAN CUISINE (Items 47-48)
  {
    number: 47,
    name: 'Burrito (Chicken / Beef / Mixed)',
    category: 'Mexican Cuisine',
    description: 'Warm flour tortilla packed with seasoned meat, spiced rice, refried beans, cheese, and salsa.',
    popular: true,
  },
  {
    number: 48,
    name: 'Fajita (Chicken / Beef / Mixed)',
    category: 'Mexican Cuisine',
    description: 'Sizzling cast-iron skillet strips of meat with peppers and onions; served with tortillas, guacamole, sour cream and salsa.',
    isGlutenFree: true,
    badge: 'Sizzling Platter',
    popular: true,
  },

  // INDIAN MENU (Items 64-67)
  {
    number: 64,
    name: 'Naan Bread',
    category: 'Indian Menu',
    description: 'Soft, warm Indian flatbread freshly baked in the tandoor oven with butter.',
    isVegetarian: true,
  },
  {
    number: 65,
    name: 'Chicken Tikka Masala',
    category: 'Indian Menu',
    description: 'Tandoori-grilled chicken chunks in a rich, creamy tomato and aromatic spice sauce.',
    isGlutenFree: true,
    badge: 'Guest Favourite',
    popular: true,
  },
  {
    number: 66,
    name: 'Tandoori Chicken',
    category: 'Indian Menu',
    description: 'Bone-in chicken marinated in spiced yogurt and ginger-garlic, roasted in a clay tandoor oven.',
    isGlutenFree: true,
  },
  {
    number: 67,
    name: 'Chicken Curry',
    category: 'Indian Menu',
    description: 'Classic Indian chicken curry gently simmered with aromatic ground spices and basmati rice.',
    isGlutenFree: true,
  },

  // VEGETARIAN & VEGAN (Items 35-38)
  {
    number: 35,
    name: 'Vegetable Penne',
    category: 'Vegetarian & Vegan',
    description: 'Penne pasta tossed with fresh seasonal Mediterranean vegetables in a light herb sauce.',
    isVegetarian: true,
  },
  {
    number: 36,
    name: 'Vegetable Casserole',
    category: 'Vegetarian & Vegan',
    description: 'Oven-baked vegetables with herbs and melted cheese in an earthenware dish.',
    isGlutenFree: true,
    isVegetarian: true,
  },
  {
    number: 37,
    name: 'Vegetarian Burger',
    category: 'Vegetarian & Vegan',
    description: 'Plant-based savory patty with fresh vegetables and house dressing, served in a bun with fries.',
    isVegetarian: true,
  },
  {
    number: 38,
    name: 'Vegan Salad Bowl',
    category: 'Vegetarian & Vegan',
    description: 'Mixed greens, fresh crisp vegetables, and seeds, fully vegan and gluten-free.',
    isGlutenFree: true,
    isVegetarian: true,
  },

  // FRESH SALAD (Items 14-17)
  {
    number: 14,
    name: 'Mediterranean Salad',
    category: 'Fresh Salad',
    description: 'Fresh mixed greens, cucumbers, tomatoes, Kalamata olives, and feta cheese with extra virgin olive oil.',
    isGlutenFree: true,
    isVegetarian: true,
  },
  {
    number: 15,
    name: 'Green Heaven House Salad',
    category: 'Fresh Salad',
    description: 'Assorted fresh greens with carrots, cucumbers, sweet cherry tomatoes, and secret house dressing.',
    isGlutenFree: true,
    badge: 'Signature Salad',
  },
  {
    number: 16,
    name: 'Caesar Salad',
    category: 'Fresh Salad',
    description: 'Crisp romaine lettuce tossed with classic Caesar dressing, parmesan shavings, and garlic croutons.',
  },
  {
    number: 17,
    name: 'Tuna Fish Salad',
    category: 'Fresh Salad',
    description: 'Fresh greens topped with flaked tuna, sweet cherry tomatoes, cucumbers, and a light citrus dressing.',
    isGlutenFree: true,
  },
];

export const officialDrinksMenu: DrinkMenuItem[] = [
  // BEER & DRAUGHT
  {
    category: 'Beer & Draught',
    name: 'Guinness Draught',
    description: 'Famous creamy Irish stout poured fresh with smooth nitrogen head.',
    badge: 'British Pub Classic',
  },
  {
    category: 'Beer & Draught',
    name: 'Efes Pilsen',
    description: 'Crisp, ice-cold Turkish draft beer poured in frosted glassware.',
    badge: 'Local Favourite',
  },
  {
    category: 'Beer & Draught',
    name: 'Tuborg Beer',
    description: 'Chilled premium golden Danish lager.',
  },
  {
    category: 'Beer & Draught',
    name: 'Carlsberg',
    description: 'Crisp European pilsner on tap.',
  },
  {
    category: 'Beer & Draught',
    name: 'Corona Extra',
    description: 'Served chilled with a wedge of fresh lime.',
  },
  {
    category: 'Beer & Draught',
    name: 'Heineken',
    description: 'Refreshing international pure malt lager.',
  },
  {
    category: 'Beer & Draught',
    name: 'Miller Genuine Draft',
    description: 'Smooth American filtered draft.',
  },
  {
    category: 'Beer & Draught',
    name: 'Budweiser',
    description: 'King of beers, chilled bottle.',
  },

  // SIGNATURE COCKTAILS
  {
    category: 'Signature Cocktails',
    name: 'Green Heaven Special Cocktail',
    description: 'House secret blend hailed as the “Best Drink in ALANYA”!',
    badge: 'Best Drink in ALANYA',
  },
  {
    category: 'Signature Cocktails',
    name: 'Long Island Ice Tea',
    description: 'Bacardi, Vodka, Gin, Tequila, Cointreau, Lemon Juice, Coke, Ice.',
    badge: 'Strong & Classic',
  },
  {
    category: 'Signature Cocktails',
    name: 'Whiskey Sour',
    description: 'Bacardi or Whiskey, Lemon Juice, Egg White, Angostura mist.',
  },
  {
    category: 'Signature Cocktails',
    name: 'Amaretto Sour',
    description: 'Disaronno Amaretto, Lemon Juice, Egg White, silky finish.',
  },
  {
    category: 'Signature Cocktails',
    name: 'Blue Heaven',
    description: 'Bacardi, Amaretto, Blue Curacao, Lime Juice, Pineapple Juice.',
  },
  {
    category: 'Signature Cocktails',
    name: 'Pina Colada',
    description: 'Bacardi, Batida de Coco, Pineapple Juice, Cream.',
  },
  {
    category: 'Signature Cocktails',
    name: 'Margarita',
    description: 'Silver Tequila, Cointreau, Lemon Juice, salted rim.',
  },
  {
    category: 'Signature Cocktails',
    name: 'Tom Collins',
    description: 'Dry Gin, Lemon Juice, Sugar, Soda, Ice.',
  },
  {
    category: 'Signature Cocktails',
    name: 'God Father',
    description: 'Jack Daniel’s Tennessee Whiskey & Amaretto Disaronno.',
  },

  // DIRTY COCKTAILS
  {
    category: 'Dirty Cocktails',
    name: 'Sex On The Beach',
    description: 'Vodka, Archers Peach Schnapps, Tequila, Orange Juice, Grenadine.',
    badge: 'Popular',
  },
  {
    category: 'Dirty Cocktails',
    name: 'Porn Star Martini',
    description: 'Vanilla Vodka, Passion Fruit Liqueur, shot of bubbly.',
    badge: 'Pub Hit',
  },
  {
    category: 'Dirty Cocktails',
    name: 'Espresso Porn Star',
    description: 'Vanilla Vodka, Fresh Espresso, Passion Fruit Puree, Coffee Liqueur.',
  },
  {
    category: 'Dirty Cocktails',
    name: 'Orgasmus',
    description: 'Vodka, Kahlua, Bailey’s Irish Cream, Amaretto, Cream.',
  },
  {
    category: 'Dirty Cocktails',
    name: 'Viagra Cocktail',
    description: 'Vodka, Southern Comfort, Blue Curacao, Lime, Energy Drink.',
  },

  // AQUARIUM & SHARING BOWLS
  {
    category: 'Aquarium & Sharing Bowls',
    name: 'Green Heaven Special Aquarium',
    description: 'Massive cocktail bowl crafted for the entire table with long sharing straws! Ask your waiter.',
    badge: 'Party Aquarium',
  },
  {
    category: 'Aquarium & Sharing Bowls',
    name: 'Green Heaven Fish Bowl',
    description: 'Giant luminous punch bowl loaded with exotic spirits, juices and fresh fruits.',
  },

  // FROZEN COCKTAILS & MOJITOS
  {
    category: 'Frozen Cocktails & Mojitos',
    name: 'Strawberry Daiquiri',
    description: 'Bacardi, Lemon Juice, Sugar, Fresh Strawberries blended with ice.',
    badge: 'Summer Special',
  },
  {
    category: 'Frozen Cocktails & Mojitos',
    name: 'Classic Mojito',
    description: 'Bacardi, Fresh Mint Leaves, Lemon Juice, Crushed Ice, Soda.',
  },
  {
    category: 'Frozen Cocktails & Mojitos',
    name: 'Mojito Strawberry',
    description: 'Bacardi, Fresh Mint, Lemon, Fresh Strawberry Puree, Crushed Ice, Soda.',
  },
  {
    category: 'Frozen Cocktails & Mojitos',
    name: 'Passion Fruit Mojito',
    description: 'Bacardi, Fresh Mint, Passion Fruit, Crushed Ice, Soda.',
  },

  // WHISKEY & SPIRITS
  {
    category: 'Whiskey & Spirits',
    name: "Jack Daniel's Old No.7",
    description: 'Tennessee Sour Mash Whiskey.',
    badge: 'Steakhouse Pairing',
  },
  {
    category: 'Whiskey & Spirits',
    name: 'Jameson Irish Whiskey',
    description: 'Triple-distilled Irish smooth whiskey.',
  },
  {
    category: 'Whiskey & Spirits',
    name: 'Chivas Regal 12Y',
    description: 'Blended Scotch Whisky.',
  },
  {
    category: 'Whiskey & Spirits',
    name: 'Johnnie Walker Black Label',
    description: 'Rich, complex Scotch whisky.',
  },

  // HOT COFFEE DRINKS & TEAS
  {
    category: 'Hot Coffee Drinks & Teas',
    name: 'Irish Coffee',
    description: 'Irish Whiskey, rich hot coffee, brown sugar, floated thick cream.',
    badge: 'British / Irish Pub Classic',
  },
  {
    category: 'Hot Coffee Drinks & Teas',
    name: "Bailey's Coffee",
    description: "Bailey's Irish Cream, hot coffee, brown sugar, fresh whipped cream.",
  },
  {
    category: 'Hot Coffee Drinks & Teas',
    name: 'English Tea',
    description: 'Traditional freshly brewed English breakfast tea served with milk/lemon.',
  },

  // SHOTS
  {
    category: 'Shots',
    name: 'Baby Guinness',
    description: 'Kahlua coffee liqueur layered with smooth Baileys cream.',
    badge: 'Pub Favourite',
  },
  {
    category: 'Shots',
    name: 'B-52',
    description: 'Kahlua, Baileys, Cointreau triple layered.',
  },
  {
    category: 'Shots',
    name: 'Greenheaven Special Shot',
    description: 'House specialty celebratory shooter.',
  },
];
