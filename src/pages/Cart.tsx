import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function Cart() {
  const { items, dispatch } = useCart();

  if (items.length === 0) {
    return <p className="p-4">Your cart is empty.</p>;
  }
  const total = items.reduce(
     (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Your cart</h1>
      {items.map((item) => (
        <div key={`${item.product.id}-${item.selectedColor}`} className="mt-3 border-b pb-3">
          <p className="font-semibold">{item.product.name}</p>
          <p className="text-sm text-slate-400">qty: {item.quantity}</p>
          {item.selectedColor && <p className="text-sm">Color: {item.selectedColor}</p>}
   <div className="mt-2 flex gap-2">
      <button
        className="h-10 w-10 rounded border text-lg"
          onClick={() => dispatch({ type: 'INCREASE_ITEM', id: item.product.id, selectedColor: item.selectedColor })}
           > +
        </button>
        <button
          className="h-10 w-10 rounded border text-lg"
            onClick={() => dispatch({type: 'DECREASE_ITEM', id: item.product.id, selectedColor: item.selectedColor})}
          > -
        </button>
        <button
          className="rounded border px-3 text-red-600"
            onClick={() => {
              dispatch({ type: 'REMOVE_ITEM', id: item.product.id, selectedColor: item.selectedColor });
               toast('Removed from cart');
              }}
            >
             Remove
         </button>
        </div>
        </div>
      ))}
          <p className="mt-4 text-lg font-bold">
              Total: {total.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
    </p>
<Link
  to="/checkout"
  className="mt-4 block w-full rounded bg-cyan-400 py-2 text-center text-slate-900"
>
  Proceed to Checkout
</Link>
<button
  className="mt-4 w-full rounded border border-red-500 py-2 text-red-500"
  onClick={() => {
  if (window.confirm('Remove all items from your cart?')) {
    dispatch({ type: 'CLEAR' });
    toast('Cart cleared');
  }
}}
>
  Clear Cart
</button>
    </div>
  );
}
