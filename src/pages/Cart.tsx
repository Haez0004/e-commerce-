import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, dispatch } = useCart();

  if (items.length === 0) {
    return <p className="p-4">Your cart is empty.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Your cart</h1>
      {items.map((item) => (
        <div key={item.product.id} className="mt-3 border-b pb-3">
          <p className="font-semibold">{item.product.name}</p>
          <p className="text-sm text-gray-500">qty: {item.quantity}</p>
   <div className="mt-2 flex gap-2">
      <button
        className="rounded border px-3"
          onClick={() => dispatch({ type: 'INCREASE_ITEM', id: item.product.id })}
           > +
        </button>
        <button
          className="rounded border px-3"
            onClick={() => dispatch({type: 'DECREASE_ITEM', id: item.product.id})}
          > -
        </button>
        <button
          className="rounded border px-3"
            onClick={() => dispatch({type: 'REMOVE_ITEM', id: item.product.id})}
            >
             Remove
         </button>
        </div>
        </div>
      ))}
    </div>
  );
}
