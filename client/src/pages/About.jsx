import Seo from '../components/common/Seo';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ManufacturingProcess from '../components/home/ManufacturingProcess';
import Sprig from '../components/common/Sprig';

const GALLERY_CATEGORIES = [
  {
    title: 'Manufacturing Floor',
    image: 'https://images.unsplash.com/photo-1607113276054-a7ac72c47c33?w=800&q=80',
  },
  {
    title: 'Warehouse & Storage',
    image: 'https://images.unsplash.com/photo-1553413077-190083ec01ff?w=800&q=80',
  },
  {
    title: 'Packaging Line',
    image: 'https://images.unsplash.com/photo-1591196611293-5c6d54893e5e?w=800&q=80',
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Verdant Roots' three-generation farming heritage, manufacturing process, and global export operations."
      />

      <section className="bg-forest-950 text-cream-100 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Sprig className="w-10 h-10 text-gold-400 mx-auto mb-5" />
          <h1 className="font-display text-4xl lg:text-5xl font-medium mb-5">
            A family farm that grew into a global supplier.
          </h1>
          <p className="text-cream-100/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Every decision we make — from which farms we partner with to how we
            pack a container — is still filtered through the same question our
            founders asked forty years ago: would we serve this to our own family?
          </p>
        </div>
      </section>

      <About />
      <WhyChooseUs />
      <ManufacturingProcess />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Inside Our Facility
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium">
            A look at where it happens.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {GALLERY_CATEGORIES.map((item) => (
            <div key={item.title} className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-cream-100 font-display text-lg font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
