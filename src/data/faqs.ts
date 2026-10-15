export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How do I place an order?',
    answer: 'Add items to your basket, open the basket, tap Proceed to Checkout, fill in your details and tap Place Order.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'After you place an order, we call you to confirm delivery. Delivery times depend on your location.',
  },
  {
    question: 'Can I cancel an order?',
    answer: 'Yes. Open Orders, find the successful order and tap Cancel order. Failed and cancelled orders cannot be cancelled again.',
  },
  {
    question: 'What if my payment fails?',
    answer: 'You will see a red message at checkout. Your basket is kept, so you can try again. Failed attempts appear in Orders.',
  },
  {
    question: 'Are my details saved?',
    answer: 'Details you save on the Account page stay on this phone only. Use Sign out to remove them.',
  },
];
