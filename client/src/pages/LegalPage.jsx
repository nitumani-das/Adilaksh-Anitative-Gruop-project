import Seo from '../components/common/Seo';

export default function LegalPage({ title, description, children }) {
  return (
    <>
      <Seo title={title} description={description} />
      <section className="max-w-3xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <h1 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium mb-8">
          {title}
        </h1>
        <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-forest-900 prose-a:text-gold-600">
          {children}
        </div>
      </section>
    </>
  );
}
