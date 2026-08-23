import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Ship, Factory } from 'lucide-react';

const REASONS = [
  {
    icon: Leaf,
    title: 'Source-Verified Purity',
    description: 'Every ingredient is traceable to the estate it was grown on — no unnamed middlemen in the chain.',
  },
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    description: 'Cleaning, grading, grinding, and packaging all happen under one roof, under one quality standard.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified & Compliant',
    description: 'FSSAI, ISO 22000, and Spices Board certified, with lab reports available on request.',
  },
  {
    icon: Ship,
    title: 'Export-Ready Logistics',
    description: 'Documentation, phytosanitary certificates, and freight handled end-to-end for import partners.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-leaf-100/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium">
            Built for partners who can't afford inconsistency.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-cream-100 rounded-2xl p-7 shadow-soft hover:shadow-lift transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-forest-900 flex items-center justify-center mb-5">
                <reason.icon size={22} className="text-gold-400" />
              </div>
              <h3 className="font-display text-lg text-forest-900 font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
