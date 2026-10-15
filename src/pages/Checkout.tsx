import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { saveOrder } from '../utils/orders';
import type { Order } from '../types';
import { getProfile } from '../utils/profile';

export default function Checkout() {
  const { items, dispatch } = useCart();
const [form, setForm] = useState(
  () => getProfile() ?? { name: '', phone: '', address: '' }
);

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setForm({ ...form, [e.target.name]: e.target.value });
}
const [errors, setErrors] = useState<Record<string, string>>({});
const [placed, setPlaced] = useState(false);
const [loading, setLoading] = useState(false);
const [paymentError, setPaymentError] = useState('');

function validate() {
  const newErrors: Record<string, string> = {};
  if (form.name.trim().length < 2) newErrors.name = 'Enter your full name';
  if (!/^0\d{10}$/.test(form.phone)) newErrors.phone = 'Enter a valid 11-digit phone number';
  if (form.address.trim().length < 5) newErrors.address = 'Enter your delivery address';
  return newErrors;
}
function fakePayment(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error('Payment failed. Please try again.'));
      } else {
        resolve();
      }
    }, 2000);
  });
}

function buildOrder(status: Order['status']): Order {
  return {
    id: `ORD-${Date.now()}`,
    date: new Date().toISOString(),
    items: items.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
      selectedColor: item.selectedColor,
    })),
    total,
    status,
  };
}

async function handleSubmit() {
  const newErrors = validate();
  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  setLoading(true);
  setPaymentError('');
  try {
    await fakePayment();
  saveOrder(buildOrder('success'));
    dispatch({ type: 'CLEAR' });
    setPlaced(true);
  } catch (err) {
  saveOrder(buildOrder('failed'));
    setPaymentError(
      err instanceof Error ? err.message : 'Something went wrong.'
    );
  } finally {
    setLoading(false);
  }
}

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

if (placed) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold text-green-600">Order placed! 🎉</h1>
      <p className="mt-2">
        Thank you, {form.name}. We will call you on {form.phone} to confirm
        delivery.
      </p>
      <Link
        to="/"
        className="mt-4 block w-full rounded bg-green-600 py-2 text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Checkout</h1>
      <h2 className="mt-4 font-semibold">Order summary</h2>
      {items.map((item) => (
        <p
          key={`${item.product.id}-${item.selectedColor}`}
          className="text-sm"
        >
{item.product.name}{item.selectedColor ? ` (${item.selectedColor})` : ''} x {item.quantity}
        </p>
      ))}
      <p className="mt-3 font-bold">
        Total:{' '}
        {total.toLocaleString('en-NG', {
          style: 'currency',
          currency: 'NGN',
        })}
      </p>
<div className="mt-6 flex flex-col gap-3">
  <input
    className="rounded border p-2"
    name="name"
    placeholder="Full name"
    value={form.name}
    onChange={handleChange}
  />
{errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
  <input
    className="rounded border p-2"
    name="phone"
    placeholder="Phone number"
    value={form.phone}
    onChange={handleChange}
  />
{errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
  <input
    className="rounded border p-2"
    name="address"
    placeholder="Delivery address"
    value={form.address}
    onChange={handleChange}
  />
{errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
{paymentError && (
  <p className="rounded bg-red-100 p-2 text-sm text-red-600">
    {paymentError}
  </p>
)}
<button
  className="rounded bg-green-600 py-2 text-white disabled:opacity-50"
  onClick={handleSubmit}
  disabled={loading}
>
  {loading ? 'Processing...' : 'Place Order'}
</button>

</div>
    </div>
  );
}
