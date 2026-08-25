// import Seo from '../components/common/Seo';
// import { useFetch } from '../hooks/useFetch';
// import api from '../services/api';
// import { GridSkeleton } from '../components/common/Skeletons';
// import EmptyState from '../components/common/EmptyState';
// import { ShieldCheck } from 'lucide-react';

// export default function Certifications() {
//   const { data: certificates, isLoading, error } = useFetch(() => api.get('/certificates'), []);

//   return (
//     <>
//       <Seo
//         title="Certifications"
//         description="View Verdant Roots' quality and compliance certifications, including FSSAI, ISO 22000, and export licensing."
//       />

//       <section className="bg-forest-950 text-cream-100 py-16 lg:py-20">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8">
//           <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
//             Compliance
//           </p>
//           <h1 className="font-display text-4xl lg:text-5xl font-medium max-w-2xl">
//             Certifications & Quality Standards
//           </h1>
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
//         {isLoading && <GridSkeleton count={6} />}

//         {!isLoading && error && (
//           <EmptyState title="Couldn't load certificates" message="Please try again shortly." />
//         )}

//         {!isLoading && !error && (!certificates || certificates.length === 0) && (
//           <EmptyState
//             title="Certificates coming soon"
//             message="Our certification documents will be listed here once added by our team."
//           />
//         )}

//         {!isLoading && !error && certificates?.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certificates.map((cert) => (
//               <div key={cert._id} className="rounded-2xl overflow-hidden bg-cream-100 border border-leaf-100 shadow-soft">
//                 <div className="aspect-[4/3] bg-leaf-100">
//                   <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="p-5">
//                   <div className="flex items-center gap-2 mb-1.5">
//                     <ShieldCheck size={16} className="text-gold-600" />
//                     <h3 className="font-display text-base text-forest-900 font-semibold">{cert.title}</h3>
//                   </div>
//                   {cert.issuingBody && (
//                     <p className="text-xs text-charcoal-400">{cert.issuingBody}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// }


import { motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Leaf,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'FSSAI License',
    shortTitle: 'FSSAI',
    category: 'Food Safety',
    issuer: 'Food Safety and Standards Authority of India',
    description:
      'Ensuring our food products meet the required safety, hygiene and quality standards established for the Indian food industry.',
    image:
      '/images/certificates/fssai-certificate.jpg',
    accent: 'gold',
  },
  {
    id: 2,
    title: 'ISO 22000',
    shortTitle: 'ISO 22000',
    category: 'Food Safety Management',
    issuer: 'International Organization for Standardization',
    description:
      'A commitment to systematic food safety management across sourcing, processing, handling and delivery.',
    image:
      '/images/certificates/iso-22000-certificate.jpg',
    accent: 'green',
  },
  {
    id: 3,
    title: 'MSME',
    shortTitle: 'MSME',
    category: 'Quality Assurance',
    issuer: 'Micro, Small and Medium Enterprises',
    description:
      'Our processes are designed around preventive food-safety principles and careful monitoring of critical control points.',
    image:
      '/images/certificates/haccp-certificate.jpg',
    accent: 'gold',
  },
  {
    id: 4,
    title: 'GMP Standards',
    shortTitle: 'GMP',
    category: 'Manufacturing',
    issuer: 'Good Manufacturing Practices',
    description:
      'Following disciplined manufacturing practices to maintain product consistency, cleanliness and quality.',
    image:
      '/images/certificates/gmp-certificate.jpg',
    accent: 'green',
  },
  {
    id: 5,
    title: 'Organic Certification',
    shortTitle: 'ORGANIC',
    category: 'Responsible Sourcing',
    issuer: 'Certified Organic Production',
    description:
      'Supporting responsible cultivation and sourcing practices for naturally grown ingredients and botanical products.',
    image:
      '/images/certificates/organic-certificate.jpg',
    accent: 'gold',
  },
  {
    id: 6,
    title: 'Export Compliance',
    shortTitle: 'EXPORT',
    category: 'Global Trade',
    issuer: 'Export Quality & Compliance',
    description:
      'Built to meet documentation, packaging and quality expectations for customers and partners across global markets.',
    image:
      '/images/certificates/export-certificate.jpg',
    accent: 'green',
  },
];

const QUALITY_POINTS = [
  {
    icon: Leaf,
    title: 'Naturally Sourced',
    text: 'Carefully selected botanical and agricultural ingredients.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Controlled',
    text: 'Quality checks throughout sourcing and production.',
  },
  {
    icon: FileCheck2,
    title: 'Documented Processes',
    text: 'Structured systems for consistency and traceability.',
  },
  {
    icon: Globe2,
    title: 'Global Standards',
    text: 'Processes designed with international expectations in mind.',
  },
];

function CertificateImage({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-forest-900 via-forest-800 to-leaf-900 text-center px-6">
        <div className="w-16 h-16 rounded-full border border-gold-400/40 bg-gold-400/10 flex items-center justify-center mb-4">
          <Award className="text-gold-400" size={30} />
        </div>

        <p className="text-gold-300 text-xs tracking-[0.2em] uppercase font-semibold mb-2">
          Certified
        </p>

        <p className="text-cream-100 font-display text-xl">
          {title}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      onError={() => setFailed(true)}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  );
}

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <main className="bg-cream-50 text-forest-950 overflow-hidden">

      {/* HERO */}
      <section className="relative bg-forest-950 text-cream-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-leaf-500/10 blur-3xl" />

          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '34px 34px',
              }}
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 mb-7"
            >
              <Sparkles size={15} className="text-gold-400" />

              <span className="text-gold-300 text-xs font-semibold tracking-[0.22em] uppercase">
                Trust • Quality • Compliance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[0.98] tracking-tight"
            >
              Certified for
              <span className="block text-gold-400 mt-2">
                Quality & Trust.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-2xl text-cream-200/75 text-base lg:text-lg leading-8"
            >
              Every product we deliver is backed by carefully maintained
              quality systems, responsible sourcing and standards designed
              to protect what matters most — purity, safety and consistency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              <div>
                <p className="text-3xl font-display text-gold-400">06+</p>
                <p className="text-xs text-cream-300/60 uppercase tracking-wider mt-1">
                  Standards
                </p>
              </div>

              <div className="w-px h-12 bg-white/10" />

              <div>
                <p className="text-3xl font-display text-gold-400">100%</p>
                <p className="text-xs text-cream-300/60 uppercase tracking-wider mt-1">
                  Commitment
                </p>
              </div>

              <div className="w-px h-12 bg-white/10" />

              <div>
                <p className="text-3xl font-display text-gold-400">Global</p>
                <p className="text-xs text-cream-300/60 uppercase tracking-wider mt-1">
                  Perspective
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-end">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Our Promise
            </p>

            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-forest-950">
              Standards that
              <span className="block text-leaf-700">
                speak for us.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-charcoal-500 leading-8 text-base lg:text-lg"
          >
            Certifications are more than documents on a wall. They represent
            the systems, discipline and responsibility behind every product.
            From raw material selection to processing and final delivery,
            we continuously work to maintain dependable standards.
          </motion.p>
        </div>
      </section>

      {/* CERTIFICATE GRID */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-24 lg:pb-32">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CERTIFICATIONS.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              className="group bg-white rounded-[24px] border border-leaf-100 overflow-hidden shadow-[0_15px_45px_rgba(20,50,30,0.07)] hover:shadow-[0_25px_60px_rgba(20,50,30,0.13)] transition-all duration-500"
            >

              {/* IMAGE */}
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="relative block w-full aspect-[4/3] overflow-hidden bg-leaf-50 text-left"
              >
                <CertificateImage
                  src={certificate.image}
                  title={certificate.title}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute left-5 bottom-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-forest-900">
                    <FileCheck2 size={14} />
                    View Certificate
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1.5 rounded-full bg-forest-950/80 backdrop-blur-md px-3 py-1.5 text-[10px] text-cream-100 uppercase tracking-wider font-bold">
                    <BadgeCheck size={13} className="text-gold-400" />
                    Verified
                  </span>
                </div>
              </button>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center">
                    <Award size={17} className="text-gold-600" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-charcoal-400">
                    {certificate.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-forest-950">
                  {certificate.title}
                </h3>

                <p className="text-xs text-leaf-700 font-medium mt-1">
                  {certificate.issuer}
                </p>

                <p className="text-sm text-charcoal-500 leading-6 mt-4">
                  {certificate.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors"
                >
                  Explore certificate
                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* QUALITY SYSTEM */}
      <section className="relative bg-forest-950 text-cream-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">

          <div className="max-w-2xl mb-14">
            <p className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Beyond Certification
            </p>

            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Quality is a
              <span className="text-gold-400"> continuous process.</span>
            </h2>

            <p className="mt-5 text-cream-200/65 leading-7">
              Our commitment doesn't stop when a certificate is issued.
              We believe quality must be built into every stage of the
              journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {QUALITY_POINTS.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                    <Icon size={20} className="text-gold-400" />
                  </div>

                  <h3 className="font-display text-xl mt-6">
                    {item.title}
                  </h3>

                  <p className="text-sm text-cream-200/55 leading-6 mt-3">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-gold-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-forest-950 flex items-center justify-center">
                <CheckCircle2 className="text-gold-400" size={25} />
              </div>

              <div>
                <h3 className="font-display text-2xl text-forest-950">
                  Built on trust.
                </h3>

                <p className="text-sm text-charcoal-500 mt-1">
                  Quality, transparency and consistency in everything we do.
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal-400 font-semibold">
                Verdant Roots
              </p>
              <p className="font-display text-xl text-leaf-800 mt-1">
                Naturally Better. Reliably Certified.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] bg-forest-950/85 backdrop-blur-md flex items-center justify-center p-5"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-auto bg-cream-50 rounded-3xl shadow-2xl"
          >

            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute z-10 top-4 right-4 w-10 h-10 rounded-full bg-forest-950 text-white flex items-center justify-center hover:bg-gold-600 transition-colors"
              aria-label="Close certificate"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

              <div className="bg-leaf-50 min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-5 lg:p-10">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-xl"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">

                <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center mb-6">
                  <Award size={28} className="text-gold-600" />
                </div>

                <p className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">
                  {selectedCertificate.category}
                </p>

                <h2 className="font-display text-4xl text-forest-950 mt-3">
                  {selectedCertificate.title}
                </h2>

                <p className="text-leaf-700 text-sm font-medium mt-2">
                  {selectedCertificate.issuer}
                </p>

                <div className="h-px bg-leaf-100 my-7" />

                <p className="text-charcoal-500 leading-7">
                  {selectedCertificate.description}
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <BadgeCheck
                      size={19}
                      className="text-leaf-700"
                    />
                    <span className="text-sm text-charcoal-600">
                      Quality standard recognized
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <ShieldCheck
                      size={19}
                      className="text-leaf-700"
                    />
                    <span className="text-sm text-charcoal-600">
                      Commitment to compliance
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="text-leaf-700"
                    />
                    <span className="text-sm text-charcoal-600">
                      Focus on consistent quality
                    </span>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="mt-10 w-full rounded-xl bg-forest-950 text-cream-50 py-3.5 text-sm font-semibold hover:bg-leaf-800 transition-colors"
                >
                  Close
                </button>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}