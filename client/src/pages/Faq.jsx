import Seo from '../components/common/Seo';
import Accordion from '../components/common/Accordion';
import { FAQ_ITEMS } from '../data/faqData';

export default function Faq() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about wholesale minimums, private labeling, export destinations, certifications, and payment terms."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ_ITEMS.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <section className="bg-forest-950 text-cream-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Support
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-medium max-w-2xl">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <div className="bg-cream-100 rounded-2xl px-6 sm:px-8 shadow-soft">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>
    </>
  );
}
