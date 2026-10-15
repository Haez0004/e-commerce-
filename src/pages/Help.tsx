import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { contact } from '../data/contact';

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
        <p className="font-semibold">Contact us</p>
        <p className="mt-1 text-gray-600">
          Still need help? Reach us any of these ways.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <a
            href={`tel:${contact.phone}`}
            className="rounded border border-green-600 py-2 text-center font-semibold text-green-700"
          >
            Call {contact.phone}
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-green-600 py-2 text-center font-semibold text-white"
          >
            Chat on WhatsApp
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded border border-green-600 py-2 text-center font-semibold text-green-700"
          >
            Email us
          </a>
        </div>
        <p className="mt-3 text-gray-600">
          You can also check your{' '}
          <Link to="/orders" className="text-green-700 underline">
            orders
          </Link>{' '}
          for the status of a purchase.
        </p>
      </div>
    </div>
  );
}
