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

        <div className="pt-14 pb-10 lg:pt-20 lg:pb-12 text-center">

          {/* Logo */}
          <Link
            to="/"
            className="inline-flex flex-col items-center group"
          >

            {/* Logo container */}
            <div
              className="
                relative
                w-28 h-28
                sm:w-32 sm:h-32
                lg:w-36 lg:h-36
                rounded-3xl
                bg-white
                p-4 sm:p-5
                flex items-center justify-center
                shadow-[0_20px_50px_rgba(0,0,0,0.20)]
                ring-1 ring-white/10
                group-hover:-translate-y-1
                transition-all duration-300
              "
            >

              <img
                src={logoUrl}
                alt={`${BRAND.name} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />

            </div>


            {/* Company name */}
            <h2
              className="
                mt-5
                font-display
                text-2xl
                sm:text-3xl
                font-semibold
                tracking-wide
                text-white
              "
            >
              Aninative Group
            </h2>


            {/* Tagline */}
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-400">
              Natural • Authentic • Trusted
            </p>

          </Link>


          {/* Brand description */}
          <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-relaxed text-cream-100/50">
            Building trusted Indian brands inspired by nature, quality and
            the timeless goodness of natural ingredients.
          </p>


          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">

            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-gold-400/50" />

            <div className="w-2 h-2 rounded-full bg-gold-400" />

            <Leaf
              size={15}
              className="text-gold-400"
            />

            <div className="w-2 h-2 rounded-full bg-gold-400" />

            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-gold-400/50" />

          </div>

        </div>


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

                <a
                  href={SITE_CONFIG.social.facebook}
                  aria-label="Facebook"
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
                  <Globe size={17} />
                </a>


                <a
                  href={SITE_CONFIG.social.instagram}
                  aria-label="Instagram"
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
                  <Camera size={17} />
                </a>


                <a
                  href={SITE_CONFIG.social.linkedin}
                  aria-label="LinkedIn"
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
                  <Briefcase size={17} />
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