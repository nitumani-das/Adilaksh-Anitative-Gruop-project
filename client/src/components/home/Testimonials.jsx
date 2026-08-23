import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  {
    quote:
      "Consistency is the thing. Every container we've received over three years has matched the spec sheet exactly.",
    name: 'Elena Marsh',
    role: 'Procurement Lead, Northwind Foods (UK)',
  },
  {
    quote:
      'Their team handled our private-label packaging redesign without a single missed deadline. Rare in this industry.',
    name: 'Raj Malhotra',
    role: 'Founder, Spicewell Retail (India)',
  },
  {
    quote:
      'Export documentation arrives complete and on time, every shipment. That alone has saved us weeks of back-and-forth.',
    name: 'Johan Kessler',
    role: 'Import Manager, Kessler Gourmet (Germany)',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
      <div className="max-w-2xl mb-14">
        <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Trusted By Partners
        </p>
        <h2 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium">
          What our distributors and retailers say.
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {TESTIMONIALS.map((t) => (
          <SwiperSlide key={t.name}>
            <div className="h-full bg-leaf-100/50 rounded-2xl p-8 flex flex-col">
              <Quote size={28} className="text-gold-500 mb-5" />
              <p className="text-charcoal-900 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-forest-900 text-sm">{t.name}</p>
                <p className="text-xs text-charcoal-400 mt-0.5">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
