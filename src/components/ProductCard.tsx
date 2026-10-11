import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-xl border p-3 shadow-sm">
      <img className="w-full rounded-lg" src={product.image} alt={product.name} />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold text-green-600">
  {product.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
</p>
    </div>
  );
}
