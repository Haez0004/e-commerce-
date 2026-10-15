import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';

export default function Help() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Help center</h1>
      <p className="mt-1 text-gray-600">Answers to common questions.</p>

      <div className="mt-4 flex flex-col gap-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl border p-3">
            <summary className="cursor-pointer font-semibold">
              {faq.question}
            </summary>
            <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm">
        <p className="font-semibold">Still need help?</p>
        <p className="mt-1 text-gray-600">
          Check your{' '}
          <Link to="/orders" className="text-green-700 underline">
            orders
          </Link>{' '}
          for the status of a purchase.
        </p>
      </div>
    </div>
  );
}
