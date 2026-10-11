import ProductCard from './components/ProductCard';
import { products } from './data/products';

export default function App() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
