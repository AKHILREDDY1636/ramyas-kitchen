// ============================================
// PRODUCT CATALOG
// To add a new product, just add an object to the array below.
// Set 'available: false' to temporarily hide a product.
// ============================================

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  pricePerUnit: number;
  unitWeight: number;
  unit: string;
  emoji: string;
  image?: string;
  bgColor?: string;
  badge: string;
  features: string[];
  available: boolean;
}

export const products: Product[] = [
  {
    id: 'chilli-powder',
    name: 'Homemade Chilli Powder',
    subtitle: 'Traditional Andhra-style, stone-pounded',
    pricePerUnit: 150,
    unitWeight: 250,
    unit: 'g',
    emoji: '🌶️',
    image: '/chilli.png',
    bgColor: 'from-[#D63A26] to-[#8B1A0E]',
    badge: 'FRESH BATCH',
    features: [
      'Sun-dried Guntur chillies',
      'Stone-pounded, never machine-ground',
      'Zero preservatives or additives',
      'Made fresh every week',
      'Sealed in food-safe aluminum packets',
    ],
    available: true,
  },
  {
    id: 'turmeric-powder',
    name: 'Homemade Turmeric Powder',
    subtitle: 'Pure, hand-pounded, golden goodness',
    pricePerUnit: 125,
    unitWeight: 250,
    unit: 'g',
    emoji: '🟡',
    image: '/turmeric.png',
    bgColor: 'from-[#F4B942] to-[#C68B12]',
    badge: 'NEW!',
    features: [
      'Pure Salem turmeric roots',
      'Sun-dried, stone-pounded',
      'High curcumin, deep golden color',
      'No artificial color or additives',
      'Sealed in food-safe aluminum packets',
    ],
    available: true,
  },
];

// ============ BUSINESS CONFIG ============
export const BUSINESS_CONFIG = {
  whatsappNumber: '919676079027', // ← Change to mom's WhatsApp number
  phoneNumber: '+919676079027',
  ownerName: 'Ramya',
  businessName: "Ramya's Kitchen",
  location: 'Hyderabad',
  deliveryArea: 'Within Hyderabad',
};