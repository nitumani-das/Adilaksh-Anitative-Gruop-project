import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Sourcing & Harvest',
    description: 'Partner farms hand-pick at peak maturity for maximum oil content and aroma.',
  },
  {
    number: '02',
    title: 'Cleaning & Grading',
    description: 'Multi-stage sieving and optical sorting remove impurities and grade by size.',
  },
  {
    number: '03',
    title: 'Processing',
    description: 'Steam sterilization, grinding, or extraction — depending on the product line.',
  },
  {
    number: '04',
    title: 'Quality Testing',
    description: 'In-house lab checks moisture, volatile oil content, and microbial safety.',
  },
  {
    number: '05',
    title: 'Packaging & Dispatch',
    description: 'Nitrogen-flushed, moisture-proof packaging sized for retail through export pallets.',
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="bg-forest-950 text-cream-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            How It's Made
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-medium">
            From farm gate to finished pack, five checkpoints.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-0 md:pl-0"
            >
              <span className="font-display text-4xl text-gold-500/40 font-semibold">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-cream-100/65 leading-relaxed">{step.description}</p>
              {i < STEPS.length - 1 && (
                <span className="hidden md:block absolute top-5 -right-2 w-4 h-px bg-cream-100/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
