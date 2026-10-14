import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
const [selectedColor, setSelectedColor] = useState<string | undefined>(
  product?.colors?.[0]
);
const { dispatch } = useCart();
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
{product.colors && (
  <div className="mt-3 flex gap-2">
    {product.colors.map((color) => (
      <button
        key={color}
        className="rounded border px-3 py-1"
        onClick={() => setSelectedColor(color)}
      >
        {color}
      </button>
    ))}
  </div>
)}
<p className="mt-2 text-sm">Selected: {selectedColor}</p>
<button
  className="mt-4 w-full rounded bg-green-600 py-2 text-white"
  onClick={() =>
    dispatch({
      type: 'ADD_ITEM',
      product,
      selectedColor,
    })
  }
>
  Add to Cart
</button>
    </div>
  );
}
