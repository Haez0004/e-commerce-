import type { Order } from '../types';

const KEY = 'orders';

export function getOrders(): Order[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order): void {
  const orders = getOrders();
  localStorage.setItem(KEY, JSON.stringify([order, ...orders]));
}

export function cancelOrder(id: string): void {
  const orders = getOrders().map((o) =>
    o.id === id && o.status === 'success'
      ? { ...o, status: 'cancelled' as const }
      : o
  );
  localStorage.setItem(KEY, JSON.stringify(orders));
}
