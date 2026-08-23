import Seo from '../components/common/Seo';
import ContactSection from '../components/home/ContactSection';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Verdant Roots for retail, wholesale, bulk, or export enquiries. Our sales team responds within one business day."
      />

      <section className="bg-forest-950 text-cream-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Contact
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-medium max-w-2xl">
            We'd love to hear what you're sourcing.
          </h1>
        </div>
      </section>

      <ContactSection
        title="Send us a message"
        subtitle="Retail sample requests, wholesale pricing, bulk orders, or export enquiries — all welcome."
      />
    </>
  );
}
