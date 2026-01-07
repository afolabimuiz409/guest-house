
import React from 'react';
import { Coffee, Wifi, Shield, Zap, Wind, Tv } from 'lucide-react';
import { Room, MenuItem, Review } from './types';

export const BUSINESS_INFO = {
  name: "Ifeanyi Lovers Guest House",
  address: "CRMF+QM8, Babana 912106, Niger State",
  phone: "0905 830 7512",
  rating: 3.5,
  plusCode: "CRMF+QM8, Babana",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Ifeanyi+Lovers+Guest+House+Babana+Niger+State"
};

export const AMENITIES_ICONS: Record<string, React.ReactNode> = {
  "WiFi": <Wifi className="w-4 h-4" />,
  "24h Power": <Zap className="w-4 h-4" />,
  "Security": <Shield className="w-4 h-4" />,
  "Air Conditioning": <Wind className="w-4 h-4" />,
  "Television": <Tv className="w-4 h-4" />,
  "Breakfast": <Coffee className="w-4 h-4" />
};

export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Executive Suite',
    description: 'Our most spacious room featuring a king-sized bed, premium linens, and a dedicated workspace.',
    price: 'Contact for Rate',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
    amenities: ['WiFi', '24h Power', 'Air Conditioning', 'Television']
  },
  {
    id: '2',
    name: 'Standard Deluxe',
    description: 'Perfect for solo travelers or couples, offering a cozy environment with modern essentials.',
    price: 'Contact for Rate',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    amenities: ['WiFi', '24h Power', 'Security']
  },
  {
    id: '3',
    name: 'Lovers Retreat',
    description: 'A specially curated space for couples looking for a quiet and romantic getaway.',
    price: 'Contact for Rate',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=800',
    amenities: ['24h Power', 'Air Conditioning', 'Television', 'Breakfast']
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Traditional Jollof Rice',
    description: 'Smoky, authentic Nigerian Jollof served with choice of protein.',
    price: '₦2,500',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1632778149975-40046e10948e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Grilled Pepper Fish',
    description: 'Freshly caught and grilled with local spices and served with plantain.',
    price: '₦4,000',
    category: 'main',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Full English Breakfast',
    description: 'The perfect way to start your day at our guest house.',
    price: '₦2,000',
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Samuel K.',
    rating: 4,
    comment: 'Great hospitality and very clean rooms. The food was surprisingly good for the area!',
    date: '2 months ago'
  },
  {
    id: '2',
    author: 'Miriam O.',
    rating: 3.5,
    comment: 'Comfortable stay and very friendly staff. Recommended for travelers through Babana.',
    date: '1 month ago'
  }
];
