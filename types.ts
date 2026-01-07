
export interface Room {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  amenities: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: 'breakfast' | 'main' | 'drinks' | 'snacks';
  description: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
