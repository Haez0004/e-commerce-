import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">About HAEZ SHOP</h1>
      <p className="mt-2 text-slate-300">
        HAEZ SHOP is an online store for phones, laptops and headphones.
        We keep things simple: clear prices, honest product details and an
        easy way to order.
      </p>

      <h2 className="mt-6 font-semibold">What we sell</h2>
      <ul className="mt-2 list-disc pl-5 text-slate-300">
        <li>Phones</li>
        <li>Laptops</li>
        <li>Headphones</li>
      </ul>

      <h2 className="mt-6 font-semibold">How ordering works</h2>
      <p className="mt-2 text-slate-300">
        Add items to your basket, check out with your name, phone number and
        address, and we call you to confirm delivery. You can follow every
        purchase on the Orders page.
      </p>

      <Link
        to="/"
        className="mt-6 block rounded bg-cyan-400 py-2 text-center text-slate-900"
      >
        Start shopping
      </Link>
    </div>
  );
}
