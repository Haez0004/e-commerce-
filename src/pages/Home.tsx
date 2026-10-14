import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
const categories = ['All', ...new Set(products.map((p) => p.category))];

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const filtered = products.filter((p) => {
  const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
  const matchesCategory = category === 'All' || p.category === category;
  return matchesSearch && matchesCategory;
});

  return (
    <div className="p-4">
<section className="mb-4 rounded-xl bg-green-600 p-6 text-white">
  <h1 className="text-2xl font-bold">
   Welcome to HAEZ SHOP
  </h1>
  <p className="mt-2 text-sm">
    Phones, laptops and headphones at great prices.
  </p>
<button
  onClick={() =>
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }
  className="mt-4 rounded-lg bg-white px-5 py-2 font-semibold text-green-700"
>
  Shop now
</button>
</section>
      <input
       id="products"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="mb-4 w-full rounded-lg border p-2"
      />
     <div className="mb-4 flex flex-wrap gap-2">
  {categories.map((c) => (
    <button
      key={c}
      onClick={() => setCategory(c)}
      className={`whitespace-nowrap rounded-full border px-4 py-1 text-sm ${
        category === c ? 'bg-green-600 text-white' : 'bg-white'
      }`}
    >
      {c}
    </button>
  ))}
</div>
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
