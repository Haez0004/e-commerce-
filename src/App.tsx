import { Routes, Route, Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default function App() {
  const { items } = useCart();
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <header className="flex justify-between p-4 font-bold">
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart ({count})</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
