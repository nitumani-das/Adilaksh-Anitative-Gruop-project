import { Link } from 'react-router-dom';

import {
  Globe,
  Camera,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Leaf,
  Send,
} from 'lucide-react';

import { FOOTER_LINKS, BRAND } from '../../constants/navigation';
import { SITE_CONFIG } from '../../config/site';
import NewsletterForm from '../forms/NewsletterForm';

export default function Footer() {
  const year = new Date().getFullYear();

  const logoUrl =
    'https://res.cloudinary.com/dqrdt5dqz/image/upload/adilkh_logo_orif6c.png';

  return (
    <footer className="relative overflow-hidden bg-forest-950 text-cream-100">

      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-gold-400/[0.045] blur-3xl pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-emerald-400/[0.04] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            BRAND HEADER
        ====================================================== */}

      

        {/* =====================================================
            MAIN FOOTER SECTIONS
        ====================================================== */}

        <div className="border-t border-white/[0.08]">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-10
              lg:gap-12
              py-12
              lg:py-14
            "
          >

            {/* =================================================
                COMPANY
            ================================================== */}

            <div>

              <h3 className="font-display text-base font-semibold text-gold-400 mb-6">
                Company
              </h3>

              <ul className="space-y-3">

                {FOOTER_LINKS.company.map((link) => (

                  <li key={link.path}>

                    <Link
                      to={link.path}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-1.5
                        text-sm
                        text-cream-100/60
                        hover:text-white
                        transition-colors
                      "
                    >

                      <span>{link.label}</span>

                      <ArrowUpRight
                        size={13}
                        className="
                          opacity-0
                          -translate-x-1
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          transition-all
                        "
                      />

                    </Link>

                  </li>

                ))}

              </ul>

            </div>


            {/* =================================================
                GET IN TOUCH
            ================================================== */}

            <div>

              <h3 className="font-display text-base font-semibold text-gold-400 mb-6">
                Get in Touch
              </h3>

              <ul className="space-y-4 text-sm">

                {/* Address */}
                <li className="flex items-start gap-3">

                  <span className="w-9 h-9 shrink-0 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">

                    <MapPin
                      size={15}
                      className="text-gold-400"
                    />

                  </span>

                  <span className="text-cream-100/60 leading-relaxed pt-1">
                    {SITE_CONFIG.address}
                  </span>

                </li>


                {/* Phone */}
                <li className="flex items-start gap-3">

                  <span className="w-9 h-9 shrink-0 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">

                    <Phone
                      size={15}
                      className="text-gold-400"
                    />

                  </span>

                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-cream-100/60 hover:text-white transition-colors pt-2"
                  >
                    {SITE_CONFIG.phone}
                  </a>

                </li>


                {/* Email */}
                <li className="flex items-start gap-3">

                  <span className="w-9 h-9 shrink-0 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">

                    <Mail
                      size={15}
                      className="text-gold-400"
                    />

                  </span>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-cream-100/60 hover:text-white transition-colors pt-2 break-all"
                  >
                    {SITE_CONFIG.email}
                  </a>

                </li>

              </ul>

            </div>


            {/* =================================================
                CONNECT
            ================================================== */}

            <div>

              <h3 className="font-display text-base font-semibold text-gold-400 mb-6">
                Connect With Us
              </h3>

              <p className="text-sm text-cream-100/50 leading-relaxed">
                Follow us for natural product stories, new launches,
                ingredients and updates from our journey.
              </p>


              {/* Social buttons */}
              <div className="flex gap-3 mt-6">

                {/* Facebook */}
                <a
                  href={SITE_CONFIG.social.facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-white/[0.05]
                    border border-white/[0.08]
                    flex items-center justify-center
                    text-white/60
                    hover:bg-gold-400
                    hover:text-forest-950
                    hover:border-gold-400
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <span className="font-bold text-lg leading-none">
                    f
                  </span>
                </a>


                {/* Instagram */}
                <a
                  href={SITE_CONFIG.social.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-white/[0.05]
                    border border-white/[0.08]
                    flex items-center justify-center
                    text-white/60
                    hover:bg-gold-400
                    hover:text-forest-950
                    hover:border-gold-400
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <Camera size={18} />
                </a>


                {/* YouTube */}
                <a
                  href={SITE_CONFIG.social.youtube}
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    rounded-xl
                    bg-white/[0.05]
                    border border-white/[0.08]
                    flex items-center justify-center
                    text-white/60
                    hover:bg-gold-400
                    hover:text-forest-950
                    hover:border-gold-400
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <span className="relative flex items-center justify-center">
                    <span className="w-5 h-4 rounded-[5px] border-2 border-current flex items-center justify-center">
                      <span className="ml-0.5 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-current" />
                    </span>
                  </span>
                </a>

              </div>


              <div className="flex items-center gap-2 mt-6 text-xs text-white/30">

                <Leaf
                  size={13}
                  className="text-gold-400"
                />

                Inspired by nature

              </div>

            </div>


            {/* =================================================
                NEWSLETTER
            ================================================== */}

            <div>

              <div
                className="
                  rounded-2xl
                  border border-gold-400/15
                  bg-white/[0.045]
                  p-5
                  sm:p-6
                  shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                "
              >

                {/* Header */}
                <div className="flex items-start gap-3 mb-5">

                  <div
                    className="
                      w-10 h-10
                      shrink-0
                      rounded-xl
                      bg-gold-400/10
                      border border-gold-400/20
                      flex items-center justify-center
                    "
                  >

                    <Send
                      size={16}
                      className="text-gold-400"
                    />

                  </div>

                  <div>

                    <h3 className="font-display text-lg font-semibold text-white">
                      Stay Informed
                    </h3>

                    <p className="text-xs text-white/40 mt-1">
                      Get the latest from us.
                    </p>

                  </div>

                </div>


                <p className="text-xs sm:text-sm leading-relaxed text-white/50 mb-5">
                  Receive new product updates, natural ingredient stories and
                  occasional news directly in your inbox.
                </p>


                {/* Newsletter */}
                <div className="w-full">

                  <NewsletterForm dark />

                </div>


                <p className="text-[10px] text-white/25 mt-3">
                  We respect your inbox. No unnecessary emails.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="border-t border-white/[0.08]">

          <div
            className="
              py-6
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
            "
          >

            <p className="text-[11px] sm:text-xs text-white/30 text-center sm:text-left">
              © {year} {BRAND.name}. All rights reserved.
            </p>


            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">

              {FOOTER_LINKS.legal.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[11px] sm:text-xs text-white/30 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </Link>

              ))}

            </div>


            <div className="flex items-center gap-2 text-[11px] text-white/25">

              <span>Made with</span>

              <span className="text-gold-400">
                ♥
              </span>

              <span>for natural living</span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}