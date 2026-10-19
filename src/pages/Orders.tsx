import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getOrders, cancelOrder } from '../utils/orders';

function money(n: number) {
  return n.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
}

const BADGE = {
  success: { label: 'Successful', style: 'bg-cyan-400/10 text-cyan-400' },
  failed: { label: 'Failed', style: 'bg-red-100 text-red-600' },
  cancelled: { label: 'Cancelled', style: 'bg-slate-700 text-slate-300' },
};

export default function Orders() {
  const [orders, setOrders] = useState(getOrders);

  function handleCancel(id: string) {
    if (window.confirm('Cancel this order?')) {
      cancelOrder(id);
      setOrders(getOrders());
      toast('Order cancelled');
    }
  }

  if (orders.length === 0) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">My orders</h1>
        <p className="mt-2 text-slate-400">You have no orders yet.</p>
        <Link to="/" className="mt-4 block rounded bg-cyan-400 py-2 text-slate-900">
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">My orders</h1>
      <div className="mt-4 flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="rounded-xl border p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                {new Date(order.date).toLocaleString('en-NG', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${BADGE[order.status].style}`}
              >
                {BADGE[order.status].label}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">{order.id}</p>
            {order.items.map((item, i) => (
              <p key={i} className="mt-1 text-sm">
                {item.name}
                {item.selectedColor ? ` (${item.selectedColor})` : ''} x {item.quantity}
              </p>
            ))}
            <p className="mt-2 font-bold">Total: {money(order.total)}</p>
            {order.status === 'success' && (
              <button
                onClick={() => handleCancel(order.id)}
                className="mt-3 w-full rounded border border-red-500 py-2 text-sm text-red-600"
              >
                Cancel order
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
