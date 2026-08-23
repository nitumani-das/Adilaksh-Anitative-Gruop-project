import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
  HeartHandshake,
  Globe2,
  PackageCheck,
  Factory,
  BadgeCheck,
} from 'lucide-react';
import Sprig from '../common/Sprig';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const benefits = [
  {
    icon: Leaf,
    title: 'Carefully Selected Ingredients',
    description:
      'We focus on thoughtfully selected herbal ingredients and authentic Indian spices.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Packaging',
    description:
      'Our products are packed with care to help maintain freshness, quality and consistency.',
  },
  {
    icon: BadgeCheck,
    title: 'Premium Quality Standards',
    description:
      'Quality remains at the heart of everything we source, process and deliver.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused',
    description:
      'We believe lasting brands are built through transparency, trust and customer satisfaction.',
  },
  {
    icon: Factory,
    title: 'Trusted by Aninative Group',
    description:
      'Adilaksh is proudly backed by Aninative Group, an Indian company focused on building trusted brands.',
  },
  {
    icon: Globe2,
    title: 'Made in India',
    description:
      'Proudly bringing nature-inspired Indian products to customers across domestic and international markets.',
  },
];

const values = [
  'Purity',
  'Quality',
  'Trust',
  'Sustainability',
  'Customer Satisfaction',
];

export default function About() {
  return (
    <main className="overflow-hidden bg-cream-50">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[680px] flex items-center bg-forest-950">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1800&q=85"
            alt="Natural Indian spices"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 rounded-full" />
        <div className="absolute top-32 right-24 w-40 h-40 border border-white/10 rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sprig className="w-9 h-9 text-gold-400" />

              <span className="text-gold-400 text-sm font-semibold uppercase tracking-[0.25em]">
                About Adilaksh
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-white font-medium">
              Nature,
              <span className="block text-gold-400">carefully chosen.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-white/75">
              Welcome to Adilaksh — a premium Indian brand bringing carefully
              selected herbal products, natural nutrition powders and authentic
              Indian spices to homes with a focus on quality, purity and trust.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-all duration-300 hover:bg-gold-300 hover:scale-105"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#our-values"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                Our Values
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-cream-50 rounded-t-[50%] translate-y-10" />
      </section>

      {/* =========================================================
          WELCOME / INTRODUCTION
      ========================================================== */}
      <section
        id="our-story"
        className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeLeft}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dqrdt5dqz/image/upload/adilakh_dcuhog.png"
                alt="Natural herbs and spices"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-5 sm:p-6 max-w-[220px]"
            >
              <div className="w-11 h-11 rounded-full bg-leaf-100 flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 text-forest-700" />
              </div>

              <p className="font-display text-xl text-forest-900">
                Inspired by Nature
              </p>

              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                Quality-driven products made with care.
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeRight}
          >
            <div className="flex items-center gap-3 mb-5">
              <Sprig className="w-8 h-8 text-gold-500" />

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-700">
                Welcome to Adilaksh
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-forest-950 font-medium leading-tight">
              Bringing the goodness of nature closer to you.
            </h2>

            <div className="mt-7 space-y-5 text-charcoal-700 leading-relaxed">
              <p>
                At <strong className="text-forest-900">Adilaksh</strong>, we
                believe that nature has always been one of the best sources of
                nutrition and wellness. Our goal is to bring carefully selected
                herbal products and natural Indian spices to every home with a
                focus on quality, purity and hygiene.
              </p>

              <p>
                Adilaksh is a brand of{' '}
                <strong className="text-forest-900">Aninative Group</strong>,
                created with the vision of offering products that customers can
                trust. We work to provide products that are carefully sourced,
                hygienically processed and thoughtfully packed to help preserve
                their natural quality.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-leaf-50 p-5 border border-leaf-100">
                <Sparkles className="w-6 h-6 text-gold-500 mb-3" />
                <h3 className="font-display text-lg text-forest-900">
                  Quality First
                </h3>
                <p className="text-xs text-charcoal-500 mt-1">
                  Carefully selected products
                </p>
              </div>

              <div className="rounded-2xl bg-forest-950 p-5">
                <ShieldCheck className="w-6 h-6 text-gold-400 mb-3" />
                <h3 className="font-display text-lg text-white">
                  Built on Trust
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  Transparent & responsible
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BRAND DESCRIPTION
      ========================================================== */}
      <section className="bg-leaf-100/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700">
              Who We Are
            </span>

            <h2 className="font-display text-4xl lg:text-5xl text-forest-950 mt-4">
              A modern Indian brand rooted in natural goodness.
            </h2>

            <p className="mt-7 text-charcoal-700 leading-relaxed text-lg">
              Aninative Group is an Indian company engaged in marketing premium
              herbal products, natural nutrition powders and high-quality Indian
              spices. We are committed to delivering safe, hygienically
              processed and carefully selected products that meet the needs of
              both domestic and international customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          VISION + MISSION
      ========================================================== */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeLeft}
            className="group relative overflow-hidden rounded-[2rem] bg-forest-950 p-8 sm:p-10 lg:p-12 min-h-[390px]"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-white/10" />
            <div className="absolute right-10 bottom-10 w-32 h-32 rounded-full bg-white/[0.03]" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gold-400 flex items-center justify-center mb-7">
                <Target className="w-7 h-7 text-forest-950" />
              </div>

              <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.25em]">
                Our Vision
              </span>

              <h2 className="font-display text-3xl sm:text-4xl text-white mt-3">
                Building trust, one product at a time.
              </h2>

              <p className="text-white/65 leading-relaxed mt-6 max-w-xl">
                To become one of India's most trusted brands for herbal products
                and natural spices, known for quality, transparency and customer
                satisfaction, while expanding our reach across national and
                international markets.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeRight}
            className="group relative overflow-hidden rounded-[2rem] bg-white border border-leaf-100 shadow-soft p-8 sm:p-10 lg:p-12 min-h-[390px]"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-leaf-100 flex items-center justify-center mb-7">
                <Sparkles className="w-7 h-7 text-forest-700" />
              </div>

              <span className="text-forest-700 text-xs font-bold uppercase tracking-[0.25em]">
                Our Mission
              </span>

              <h2 className="font-display text-3xl sm:text-4xl text-forest-950 mt-3">
                Nature-inspired products for everyday living.
              </h2>

              <ul className="mt-6 space-y-3">
                {[
                  'Deliver premium-quality herbal products and natural spices.',
                  'Maintain hygiene and quality throughout the supply chain.',
                  'Build long-term customer trust through transparency.',
                  'Promote nature-inspired products for everyday living.',
                  'Continuously improve our products and services.',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-charcoal-700"
                  >
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-leaf-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-forest-700" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE ADILAKSH
      ========================================================== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <Sprig className="w-9 h-9 text-gold-500 mx-auto mb-4" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700">
              Why Choose Adilaksh?
            </span>

            <h2 className="font-display text-4xl lg:text-5xl text-forest-950 mt-4">
              Quality you can see. Trust you can feel.
            </h2>

            <p className="text-charcoal-600 leading-relaxed mt-5">
              Every part of our approach is designed around quality,
              responsibility and a better customer experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-leaf-100 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-leaf-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-forest-950">
                    <Icon className="w-6 h-6 text-forest-700 group-hover:text-gold-400 transition-colors" />
                  </div>

                  <h3 className="font-display text-xl text-forest-950">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-charcoal-600 leading-relaxed mt-3">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE VALUES
      ========================================================== */}
      <section id="our-values" className="bg-forest-950">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeLeft}
            >
              <Sprig className="w-9 h-9 text-gold-400 mb-5" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
                Our Core Values
              </span>

              <h2 className="font-display text-4xl lg:text-6xl text-white mt-4 leading-tight">
                Principles that guide everything we do.
              </h2>

              <p className="text-white/65 leading-relaxed mt-6 max-w-xl">
                Our values shape the way we select products, work with partners,
                serve customers and build the Adilaksh brand for the future.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeRight}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <div
                  key={value}
                  className={`rounded-3xl border border-white/10 p-6 sm:p-8 transition-all duration-300 hover:bg-white/10 ${
                    index === values.length - 1
                      ? 'col-span-2'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-gold-400/10 flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-gold-400" />
                    </span>

                    <span className="font-display text-xl sm:text-2xl text-white">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR PROMISE
      ========================================================== */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-leaf-100 px-7 py-16 sm:px-12 lg:px-20 lg:py-20">
          {/* Decorative shapes */}
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-forest-900/10" />
          <div className="absolute -right-5 top-10 w-40 h-40 rounded-full border border-forest-900/10" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative z-10 max-w-4xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-forest-950 flex items-center justify-center mb-7">
              <HeartHandshake className="w-7 h-7 text-gold-400" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-forest-700">
              Our Promise
            </span>

            <h2 className="font-display text-4xl lg:text-6xl text-forest-950 mt-4 leading-tight">
              Every pack carries our promise.
            </h2>

            <p className="text-lg text-charcoal-700 leading-relaxed mt-7 max-w-3xl">
              At Adilaksh, we are committed to providing products that reflect
              our dedication to quality, honesty and responsible business
              practices. Every pack represents our promise to deliver
              nature-inspired products with care and consistency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ANINATIVE GROUP
      ========================================================== */}
      {/* <section className="bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gold-400 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-forest-950" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
                  The Company Behind Adilaksh
                </span>
              </div>

              <h2 className="font-display text-4xl lg:text-5xl text-white">
                About Aninative Group
              </h2>

              <p className="text-white/60 leading-relaxed mt-6 max-w-3xl text-lg">
                <strong className="text-white">Aninative Group</strong> is the
                company behind the Adilaksh brand. We are committed to building
                trusted Indian brands in the herbal products and natural spices
                segment. Our focus is on quality-driven products, customer
                satisfaction and long-term brand value.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="lg:text-right"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />

                <span className="text-sm text-white/70">
                  Building trusted Indian brands
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}


<section className="relative overflow-hidden bg-[#F8F7F2]">
  {/* Soft botanical background accents */}
  <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl" />
  <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

      {/* LEFT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeLeft}
      >

        {/* Label */}
        <div className="flex items-center gap-3 mb-6">

          <div className="w-11 h-11 rounded-xl bg-[#D9B44A] flex items-center justify-center shadow-lg shadow-amber-900/10">
            <Globe2 className="w-5 h-5 text-[#173B2C]" />
          </div>

          <div>
            <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B5620]">
              The Company Behind Adilaksh
            </span>

            <span className="block text-xs text-gray-500 mt-1">
              Rooted in nature • Built on trust
            </span>
          </div>

        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#173B2C] max-w-3xl">
          About{" "}
          <span className="text-[#B28A25]">
            Aninative Group
          </span>
        </h2>

        {/* Decorative line */}
        <div className="flex items-center gap-3 mt-7">
          <div className="w-16 h-px bg-[#D9B44A]" />
          <div className="w-2 h-2 rounded-full bg-[#D9B44A]" />
          <div className="w-8 h-px bg-[#D9B44A]/30" />
        </div>

        {/* Main description */}
        <p className="text-gray-700 leading-relaxed mt-7 max-w-3xl text-lg lg:text-xl">
          <strong className="text-[#173B2C] font-semibold">
            Aninative Group
          </strong>{" "}
          is the company behind the{" "}
          <strong className="text-[#9A7720]">
            Adilaksh
          </strong>{" "}
          brand, bringing together the goodness of nature and the standards
          of modern quality.
        </p>

        <p className="text-gray-500 leading-relaxed mt-4 max-w-3xl">
          From carefully selected herbs and natural ingredients to authentic
          Indian spices, we are building products that are simple, honest and
          made with purpose. Our commitment is to deliver quality you can
          trust — from the source to your everyday life.
        </p>

        {/* Values */}
        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "Natural Ingredients",
            "Quality Focused",
            "Indian Roots",
            "Made With Care",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-[#173B2C]/10 bg-white px-4 py-2.5 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9B44A]" />

              <span className="text-xs sm:text-sm text-[#365347]">
                {item}
              </span>
            </div>
          ))}

        </div>
      </motion.div>


      {/* RIGHT CARD */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeRight}
        className="lg:min-w-[300px]"
      >

        <div className="relative">

          <div className="rounded-3xl border border-[#173B2C]/10 bg-white p-7 lg:p-8 shadow-[0_20px_60px_rgba(23,59,44,0.08)]">

            {/* Header */}
            <div className="flex items-center justify-between mb-7">

              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                Our Philosophy
              </span>

              <div className="w-9 h-9 rounded-full bg-[#F6F1DD] border border-[#D9B44A]/30 flex items-center justify-center">
                <span className="text-[#B28A25] text-sm">
                  ✦
                </span>
              </div>

            </div>


            {/* Quote */}
            <p className="font-display text-2xl lg:text-3xl leading-snug text-[#173B2C]">
              Nature gives us the ingredients.
              <span className="text-[#B28A25]">
                {" "}We bring them to you with care.
              </span>
            </p>


            <div className="w-full h-px bg-gray-100 my-7" />


            {/* Quality */}
            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#EEF5F0] flex items-center justify-center">
                  <span className="text-[#3C7357] text-sm">
                    ✓
                  </span>
                </div>

                <div>
                  <p className="text-sm text-[#173B2C] font-semibold">
                    Quality-Driven
                  </p>

                  <p className="text-xs text-gray-400 mt-0.5">
                    Carefully selected ingredients
                  </p>
                </div>

              </div>


              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-[#F6F1DD] flex items-center justify-center">
                  <span className="text-[#B28A25] text-sm">
                    ✦
                  </span>
                </div>

                <div>
                  <p className="text-sm text-[#173B2C] font-semibold">
                    Naturally Inspired
                  </p>

                  <p className="text-xs text-gray-400 mt-0.5">
                    Inspired by India's rich traditions
                  </p>
                </div>

              </div>

            </div>


            {/* Bottom */}
            <div className="mt-7 pt-5 border-t border-gray-100">

              <div className="flex items-center gap-2">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9B44A] opacity-40" />

                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D9B44A]" />

                </span>

                <span className="text-xs text-gray-500">
                  Building trusted Indian natural brands
                </span>

              </div>

            </div>

          </div>


          {/* Decorative circles */}
          <div className="absolute -z-10 -bottom-5 -right-5 w-24 h-24 rounded-full border border-[#D9B44A]/20" />

          <div className="absolute -z-10 -top-5 -left-5 w-16 h-16 rounded-full border border-[#173B2C]/10" />

        </div>

      </motion.div>

    </div>
  </div>
</section>
      

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-cream-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 py-24 lg:py-32 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Sprig className="w-10 h-10 text-gold-500 mx-auto mb-5" />

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-950">
              Naturally better.
              <span className="block text-forest-700">Thoughtfully delivered.</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-charcoal-600 leading-relaxed">
              Discover Adilaksh — where carefully selected herbal products and
              natural Indian spices come together with quality, care and trust.
            </p>

            <div className="mt-9">
              <a
                href="/all-products"
                className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-forest-800 hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Our Products
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}