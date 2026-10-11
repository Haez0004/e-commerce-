export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  colors?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}
