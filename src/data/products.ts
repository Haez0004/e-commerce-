import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Samsung Galaxy A15',
    description: 'A reliable everyday phone with a 6.5-inch Super AMOLED screen, a 50MP camera and a 5000mAh battery that lasts all day.',
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
    description: 'A durable 14-inch business laptop with a comfortable backlit keyboard, built for work, study and long days on the move.',
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
    description: 'Wireless on-ear headphones with JBL Pure Bass sound, multi-point connection and up to 40 hours of battery life.',
    price: 45,
    category: 'Headphone',
    image: '/images/JBL530BT.jpeg',
    rating: 4.5,
    reviewCount: 223,
    colors: ['Gray', 'White'],
  },
];
