export interface ReviewItem {
  id: string;
  author: string;
  source: 'Google Reviews' | 'Restaurant Guru' | 'Trip Advisor Verified Guest';
  rating: number;
  date: string;
  content: string;
  visitType: string;
  sourceUrl?: string;
}

export const reviewsSummary = {
  overallScore: 4.8,
  totalReviews: 185,
  platforms: 'Google & Restaurant Guru (Türkler, Alanya)',
  sentimentHighlights: [
    'Delicious steaks and mixed grills',
    'Great big screens for live football matches',
    'Free shuttle service from Türkler & Payallar hotels',
    'Super friendly, attentive multilingual staff',
    'Playground with slides for children',
  ],
};

export const verifiedReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mark & Sarah W.',
    source: 'Google Reviews',
    rating: 5,
    date: 'Recent verified visit',
    visitType: 'Dinner & Sports Viewing',
    content: 'We came here twice during our holiday in Türkler. The ribeye steak was absolutely top-notch, cooked exactly as requested. They put on the Premier League match on the big outdoor screen for us and the staff could not have been more accommodating. Brilliant pub atmosphere!',
  },
  {
    id: 'rev-2',
    author: 'David K.',
    source: 'Restaurant Guru',
    rating: 5,
    date: 'Verified guest review',
    visitType: 'Family Dinner',
    content: 'Fantastic family restaurant in Türkler. The best part for us as parents was the safe play area with slides and swings right next to the seating, keeping the kids happy while we enjoyed great cocktails and delicious food. They even picked us up from our hotel!',
  },
  {
    id: 'rev-3',
    author: 'Elena R.',
    source: 'Trip Advisor Verified Guest',
    rating: 5,
    date: 'Verified visit',
    visitType: 'Dinner & Drinks',
    content: 'Great mix of international food and Turkish specialties. The mixed grill platter and mojitos were outstanding. Staff speaks great English and German, very welcoming and polite. Highly recommend reserving a table for football nights.',
  },
  {
    id: 'rev-4',
    author: 'Thomas M.',
    source: 'Google Reviews',
    rating: 5,
    date: 'Verified visit',
    visitType: 'Champions League Match Night',
    content: 'One of the best sports bars around Alanya. Crystal clear screens, cold draft beer, and tasty burgers. The free transfer to and from our resort made the whole evening completely stress-free.',
  },
];
