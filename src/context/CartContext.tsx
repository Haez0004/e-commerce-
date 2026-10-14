import { createContext, useContext, useEffect, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; selectedColor?: string }
  | { type: 'REMOVE_ITEM'; id: number; selectedColor?: string }
  | { type: 'INCREASE_ITEM'; id: number; selectedColor?: string }
| { type: 'DECREASE_ITEM'; id: number; selectedColor?: string }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
        case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) =>
          item.product.id === action.product.id &&
          item.selectedColor === action.selectedColor
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id &&
            item.selectedColor === action.selectedColor
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            product: action.product,
            quantity: 1,
            selectedColor: action.selectedColor,
          },
        ],
      };
    }
    case 'REMOVE_ITEM':
      return {
            items: state.items.filter(
      (item) =>
        !(
          item.product.id === action.id &&
          item.selectedColor === action.selectedColor
        )
    ),
  };
    case 'INCREASE_ITEM':
  return {
    items: state.items.map((item) =>
      item.product.id === action.id &&
      item.selectedColor === action.selectedColor
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  };
  case 'DECREASE_ITEM':
  return {
    items: state.items
      .map((item) =>
        item.product.id === action.id &&
        item.selectedColor === action.selectedColor
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0),
  };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}
interface CartContextValue {
  items: CartItem[];
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

function loadCart(initial: CartState): CartState {
  try {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : initial;
  } catch {
    return initial;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] }, loadCart);
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(state));
}, [state]);
  return (
    <CartContext.Provider value={{ items: state.items, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
   throw new Error ( 'useCart must be used inside CartProvider');
  }
  return context;
}
