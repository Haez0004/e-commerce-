import { Routes, Route, Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import { Toaster } from 'react-hot-toast';
import { ShoppingBasket } from 'lucide-react';
import Orders from './pages/Orders';

export default function App() {
  const { items } = useCart();
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Toaster position="top-center" />
      <header className="flex items-center justify-between p-4 font-bold">
        <Link to="/" className="rounded border-2 border-green-600 px-3 py-1 text-green-600">
          Home
         </Link>
         <Link to="/orders" className="rounded border-2 border-green-600 px-3 py-1 text-sm font-bold text-green-600">
            Orders
         </Link>
        <Link to="/cart" className="relative p-2" aria-label={`Cart, ${count} items`}>
         <ShoppingBasket size={28} />
          {count > 0 && (
           <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-xs text-white">
      {count}
    </span>
  )}
</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}
