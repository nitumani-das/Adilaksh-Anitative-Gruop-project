import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Sparkles,
  Leaf,
} from 'lucide-react';

import Sprig from '../common/Sprig';

export default function Hero() {
  // ============================================================
  // CATEGORY DATA
  // Change only the href if your category routes are different.
  // ============================================================

  const categories = [
    {
      name: 'Herbal Products',
      image:
        'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=90',
      href: '/all-products/herbal-products',
      featured: true,
    },

    {
      name: 'Natural Spices',
      image:
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=90',
      href: '/all-products/natural-spices',
      featured: true,
    },

    {
      name: 'Leaf Powders',
      image:
        'https://images.unsplash.com/photo-1611073766537-8f3f9c2f8c6e?auto=format&fit=crop&w=600&q=90',
      href: '/all-products/leaf-powders',
      featured: false,
    },

    {
      name: 'Seeds & Herbs',
      image:
        'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=90',
      href: '/all-products/seeds-herbs',
      featured: false,
    },

    {
      name: 'Roots & Botanicals',
      image:
        'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=90',
      href: '/all-products/roots-botanicals',
      featured: false,
    },

    {
      name: 'Natural Blends',
      image:
        'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=90',
      href: '/all-products/natural-blends',
      featured: false,
    },
  ];

  // ============================================================
  // CATEGORY ANIMATIONS
  // ============================================================

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-forest-950 text-cream-100">

      {/* ========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Top right glow */}
        <div
          className="
            absolute
            -top-48
            -right-48
            w-[600px]
            h-[600px]
            rounded-full
            bg-gold-400/[0.045]
            blur-3xl
          "
        />

        {/* Left green glow */}
        <div
          className="
            absolute
            top-1/3
            -left-64
            w-[550px]
            h-[550px]
            rounded-full
            bg-emerald-500/[0.045]
            blur-3xl
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-0
            right-1/3
            w-[400px]
            h-[250px]
            rounded-full
            bg-gold-400/[0.025]
            blur-3xl
          "
        />

        {/* Botanical watermark - right */}
        <Sprig
          className="
            absolute
            -right-24
            -top-16
            w-[430px]
            h-[430px]
            text-forest-800/70
            rotate-12
          "
        />

        {/* Botanical watermark - left */}
        <Sprig
          className="
            absolute
            -left-28
            bottom-20
            w-[350px]
            h-[350px]
            text-forest-800/50
            -rotate-[22deg]
          "
        />

      </div>


      {/* ========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          pt-20
          pb-14
          lg:pt-28
          lg:pb-16
        "
      >

        {/* ======================================================
            HERO CONTENT
        ======================================================= */}

        <div className="max-w-4xl">

          {/* ----------------------------------------------------
              EYEBROW
          ----------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex items-center gap-3 mb-6"
          >

            {/* Icon */}
            <div
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                bg-gold-400/10
                border
                border-gold-400/20
              "
            >
              <Leaf
                size={16}
                className="text-gold-400"
              />
            </div>

            {/* Text */}
            <span
              className="
                text-gold-400
                text-xs
                sm:text-sm
                font-semibold
                tracking-[0.2em]
                uppercase
              "
            >
              Welcome to Adilaksh
            </span>

          </motion.div>


          {/* ----------------------------------------------------
              MAIN HEADING
          ----------------------------------------------------- */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.1,
            }}
            className="
              font-display
              text-4xl
              sm:text-5xl
              lg:text-[4.4rem]
              font-medium
              leading-[1.04]
              tracking-tight
              max-w-4xl
            "
          >

            Natural goodness,

            <br />

            <span className="relative inline-block text-gold-400">

              thoughtfully brought to you.

              {/* Decorative underline */}
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  w-full
                  h-px
                  bg-gradient-to-r
                  from-gold-400/80
                  via-gold-400/30
                  to-transparent
                "
              />

            </span>

          </motion.h1>


          {/* ----------------------------------------------------
              DESCRIPTION
          ----------------------------------------------------- */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mt-7
              text-base
              sm:text-lg
              lg:text-xl
              text-cream-100/65
              max-w-2xl
              leading-relaxed
            "
          >
            Adilaksh is a premium Indian brand of herbal products and
            natural spices, proudly owned by Aninative Group. We bring
            carefully selected natural ingredients to everyday life with
            a focus on quality, purity and care.
          </motion.p>


          {/* ----------------------------------------------------
              CTA BUTTONS
          ----------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-9
              flex
              flex-col
              sm:flex-row
              items-stretch
              sm:items-center
              gap-3
            "
          >

            {/* Explore Products */}
            <Link
              to="/all-products"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-gold-500
                text-forest-950
                px-7
                py-3.5
                text-sm
                font-semibold
                shadow-[0_12px_35px_rgba(212,175,55,0.12)]
                hover:bg-gold-400
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >

              Explore Our Products

              <ArrowRight
                size={16}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />

            </Link>


            {/* Contact */}
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-full
                border
                border-cream-100/15
                bg-white/[0.02]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-cream-100
                hover:bg-white/[0.07]
                hover:border-cream-100/30
                transition-all
                duration-300
              "
            >

              <Phone size={16} />

              Contact Sales Team

            </Link>

          </motion.div>


          {/* ----------------------------------------------------
              TRUST POINTS
          ----------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3
              text-xs
              sm:text-sm
              text-cream-100/45
            "
          >

            <span className="flex items-center gap-2">

              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />

              Quality Focused

            </span>


            <span className="hidden sm:block w-px h-4 bg-white/10" />


            <span className="flex items-center gap-2">

              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />

              Natural Ingredients

            </span>


            <span className="hidden sm:block w-px h-4 bg-white/10" />


            <span className="flex items-center gap-2">

              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />

              Indian Roots

            </span>

          </motion.div>

        </div>


        {/* ======================================================
            CATEGORY SECTION
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
          className="mt-16 lg:mt-20"
        >

          {/* ----------------------------------------------------
              CATEGORY HEADER
          ----------------------------------------------------- */}

          <div className="flex items-end justify-between mb-7">

            <div>

              {/* Small heading */}
              <div className="flex items-center gap-2 mb-2">

                <Sparkles
                  size={13}
                  className="text-gold-400"
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    text-gold-400
                    font-semibold
                  "
                >
                  Explore Our Range
                </span>

              </div>


              {/* Main category heading */}
              <h2
                className="
                  font-display
                  text-xl
                  sm:text-2xl
                  text-white
                "
              >
                Discover by category
              </h2>

            </div>


            {/* Desktop View All */}
            <Link
              to="/all-products"
              className="
                hidden
                sm:flex
                items-center
                gap-1.5
                text-xs
                text-cream-100/50
                hover:text-gold-400
                transition-colors
              "
            >

              View all

              <ArrowRight size={13} />

            </Link>

          </div>


          {/* ----------------------------------------------------
              CATEGORIES
          ----------------------------------------------------- */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              flex
              gap-7
              overflow-x-auto
              pb-5
              -mx-5
              px-5
              sm:mx-0
              sm:px-0
              scrollbar-hide
              sm:grid
              sm:grid-cols-3
              lg:grid-cols-6
              sm:gap-8
              sm:overflow-visible
            "
          >

            {categories.map((category, index) => (

              <motion.div
                key={category.name}
                variants={cardVariants}
                className="
                  shrink-0
                  w-[135px]
                  sm:w-auto
                "
              >

                <Link
                  to={category.href}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  {/* ==================================================
                      CIRCULAR IMAGE
                  =================================================== */}

                  <div
                    className={`
                      relative
                      w-[118px]
                      h-[118px]
                      sm:w-[130px]
                      sm:h-[130px]
                      lg:w-[145px]
                      lg:h-[145px]
                      rounded-full
                      overflow-hidden
                      bg-forest-900
                      border
                      ${
                        category.featured
                          ? 'border-gold-400/60 ring-4 ring-gold-400/10'
                          : 'border-white/10'
                      }
                      shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:border-gold-400/70
                      group-hover:ring-4
                      group-hover:ring-gold-400/10
                    `}
                  >

                    {/* Category Image */}
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                    />


                    {/* Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-forest-950/10
                        group-hover:bg-forest-950/0
                        transition-colors
                        duration-500
                      "
                    />


                    {/* Shine Effect */}
                    <div
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        group-hover:translate-x-full
                        transition-transform
                        duration-1000
                        bg-gradient-to-r
                        from-transparent
                        via-white/30
                        to-transparent
                        skew-x-12
                      "
                    />


                    {/* Category Number */}
                    <span
                      className="
                        absolute
                        top-2
                        right-2
                        w-7
                        h-7
                        rounded-full
                        bg-forest-950/70
                        backdrop-blur-md
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-[9px]
                        font-medium
                        text-white/80
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>


                    {/* Featured Badge */}
                    {category.featured && (
                      <span
                        className="
                          absolute
                          bottom-3
                          left-1/2
                          -translate-x-1/2
                          whitespace-nowrap
                          rounded-full
                          bg-gold-400
                          px-2.5
                          py-1
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-forest-950
                          shadow-lg
                        "
                      >
                        Main Category
                      </span>
                    )}

                  </div>


                  {/* ==================================================
                      CATEGORY NAME
                  =================================================== */}

                  <div className="mt-4">

                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-white
                        group-hover:text-gold-400
                        transition-colors
                        duration-300
                      "
                    >
                      {category.name}
                    </h3>


                    {/* Animated underline */}
                    <div
                      className="
                        mx-auto
                        mt-2
                        h-px
                        w-0
                        bg-gold-400
                        group-hover:w-8
                        transition-all
                        duration-300
                      "
                    />

                  </div>

                </Link>

              </motion.div>

            ))}

          </motion.div>


          {/* ----------------------------------------------------
              MOBILE VIEW ALL
          ----------------------------------------------------- */}

          <div className="mt-5 text-center sm:hidden">

            <Link
              to="/all-products"
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                text-gold-400
                hover:text-gold-300
                transition-colors
              "
            >

              View all products

              <ArrowRight size={13} />

            </Link>

          </div>

        </motion.div>

      </div>


      {/* ========================================================
          BOTTOM FADE
      ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-black/10
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}