import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from '../../data/faqData';
import Accordion from '../common/Accordion';

export default function FaqPreview() {
  return (
    <section className="bg-leaf-100/50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium">
            Frequently asked questions
          </h2>
        </div>

        <div className="bg-cream-100 rounded-2xl px-6 sm:px-8 shadow-soft">
          <Accordion items={FAQ_ITEMS.slice(0, 4)} />
        </div>

        <div className="text-center mt-8">
          <Link
            to="/faq"
            className="text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
