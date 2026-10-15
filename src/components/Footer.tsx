import { Link } from 'react-router-dom';
import { contact } from '../data/contact';

export default function Footer() {
  return (
    <footer className="mt-8 border-t bg-gray-50 p-4 text-sm">
      <p className="font-bold text-green-700">HAEZ SHOP</p>
      <p className="mt-1 text-gray-600">
        Phones, laptops and headphones at great prices.
      </p>

      <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-green-700">
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/help">Help</Link>
        <Link to="/about">About</Link>
      </nav>

      <p className="mt-3 text-gray-600">
       Call us:{' '}
     <a href={`tel:${contact.phone}`} className="text-green-700 underline">
    {contact.phone}
  </a>
</p>
      <p className="mt-4 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} HAEZ SHOP. All rights reserved.
      </p>
    </footer>
  );
}
