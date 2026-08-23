import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import ContactForm from '../forms/ContactForm';

export default function ContactSection({ title = 'Get in touch', subtitle }) {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Contact Us
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-charcoal-700 mb-8 max-w-md leading-relaxed">{subtitle}</p>}

          <ul className="space-y-4 mb-10">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5 text-gold-600" />
              <span className="text-sm text-charcoal-700">{SITE_CONFIG.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 mt-0.5 text-gold-600" />
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-sm text-charcoal-700 hover:text-forest-900">
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 mt-0.5 text-gold-600" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-charcoal-700 hover:text-forest-900">
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 mt-0.5 text-gold-600" />
              <span className="text-sm text-charcoal-700">{SITE_CONFIG.workingHours}</span>
            </li>
          </ul>

          <div className="rounded-2xl overflow-hidden shadow-soft aspect-video">
            <iframe
              title="Our location on Google Maps"
              src={SITE_CONFIG.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-cream-100 rounded-2xl p-7 sm:p-9 shadow-soft h-fit">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
