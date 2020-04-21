export interface Game {
  name: string;
  id: string;
  image?: string;
  description: string;
  price: number;
  rating?: number;
  reviews?: Review[];
}

export interface Test {
  nums: number[];
  strings: string[];
  // comment: boolean[];
}

export interface Review {
  game: string;
  rating: number;
  content: string;
}

export interface CartItem {
  game: string;
  quantity: number;
}
