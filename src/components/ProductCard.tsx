import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
const { dispatch } = useCart();
  return (
    <div className="rounded-xl border p-3 shadow-sm">
      
    <img
      className="aspect-square w-full rounded-lg object-cover"
       src={product.image}
       alt={product.name}
       loading="lazy"
     />
      <h3 className="mt-2 font-semibold">
        <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
      <p className="text-sm text-gray-500">{product.category}</p>
    <p className="text-sm text-amber-500" aria-label={`Rated ${product.rating} out of 5`}>
  {'\u2605'.repeat(Math.round(product.rating))}
  <span className="text-gray-300">
    {'\u2605'.repeat(5 - Math.round(product.rating))}
   </span>
      <span className="ml-1 text-gray-500">({product.reviewCount})</span>
     </p>
      <p className="font-bold text-green-600">
  {product.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
</p>
<button
  className="mt-2 w-full rounded-lg bg-green-600 py-2 text-white"
  onClick={() => {
  dispatch({ type: 'ADD_ITEM', product });
  toast.success('Added to cart');
}}
>
  Add to cart
</button>
    </div>
  );
}
