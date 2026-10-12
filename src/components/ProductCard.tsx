import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
const { dispatch } = useCart();
  return (
    <div className="rounded-xl border p-3 shadow-sm">
      <img className="w-full rounded-lg" src={product.image} alt={product.name} />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold text-green-600">
  {product.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
</p>
<button
  className="mt-2 w-full rounded-lg bg-green-600 py-2 text-white"
  onClick={() => dispatch({type: 'ADD_ITEM', product})}
>
  Add to cart
</button>
    </div>
  );
}
