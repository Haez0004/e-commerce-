import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Samsung Galaxy A15',
    price: 500,
    category: 'Cellphone',
    image: '/images/samsung-a15.jpeg',
    rating: 4.3,
    reviewCount: 128,
    colors: ['Black', 'Blue'],
  },
  {
    id: 2,
    name: 'Lenovo ThinkPad T14',
    price: 1000,
    category: 'Laptop',
    image: '/images/lenovo-t14.jpeg',
    rating: 4.2,
    reviewCount: 127,
    colors: ['Black', 'Silver'],
  },
  {
    id: 3,
    name: 'JBL Tune 530BT',
    price: 45,
    category: 'Headphone',
    image: '/images/JBL530BT.jpeg',
    rating: 4.5,
    reviewCount: 223,
    colors: ['Gray', 'White'],
  },
];
