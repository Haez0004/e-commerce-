import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Samsung Galaxy A15',
    price: 500,
    category: 'Cellphone',
    image: 'https://placehold.co/300x300',
    colors: ['Black', 'Blue'],
  },
  {
    id: 2,
    name: 'Lenovo ThinkPad T14',
    price: 1000,
    category: 'Laptop',
    image: 'https://placehold.co/300x300',
    colors: ['Black', 'Silver'],
  },
  {
    id: 3,
    name: 'JBL Tune 530BT',
    price: 45,
    category: 'Headphone',
    image: 'https://placehold.co/300x300',
    colors: ['Gray', 'White'],
  },
];
