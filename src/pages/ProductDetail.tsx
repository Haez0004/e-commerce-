import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="p-4">Product not found.</p>;
  }

  return (
    <div className="p-4">
      <img className="w-full rounded-lg" src={product.image} alt={product.name} />
      <h1 className="mt-3 text-xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.category}</p>
      <p className="font-bold text-green-600">
{product.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
     </p>  
    </div>
  );
}
