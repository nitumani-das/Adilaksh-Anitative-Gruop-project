import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const CERTS = ['FSSAI Licensed', 'ISO 22000:2018', 'Spices Board India', 'APEDA Registered', 'HACCP Compliant'];

export default function CertificationsPreview() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
      <div className="rounded-3xl bg-forest-900 text-cream-100 px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="font-display text-2xl lg:text-3xl font-medium mb-2">
            Certified to the standards your compliance team expects.
          </h2>
          <Link
            to="/certifications"
            className="text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
          >
            View all certificates →
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CERTS.map((cert, i) => (
            <motion.span
              key={cert}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-4 py-2 text-xs font-medium"
            >
              <ShieldCheck size={14} className="text-gold-400" />
              {cert}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
