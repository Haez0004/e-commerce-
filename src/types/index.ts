export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  colors?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  selectedColor?: string;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'success' | 'failed' | 'cancelled';
}

export interface Profile {
  name: string;
  phone: string;
  address: string;
}
