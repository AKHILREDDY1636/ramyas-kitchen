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
  // ============ FUTURE PRODUCTS ============
  // Uncomment and edit when ready:
  //
  // {
  //   id: 'turmeric',
  //   name: 'Pure Turmeric Powder',
  //   subtitle: 'Hand-pounded, deep golden color',
  //   pricePerUnit: 150,
  //   unitWeight: 250,
  //   unit: 'g',
  //   emoji: '🟡',
  //   badge: 'COMING SOON',
  //   features: [
  //     'Organic Salem turmeric',
  //     'Sun-dried for 10 days',
  //     'High curcumin content',
  //     'No artificial color',
  //   ],
  //   available: false,
  // },
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