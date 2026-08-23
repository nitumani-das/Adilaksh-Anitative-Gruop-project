import Seo from '../components/common/Seo';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
// import FeaturedProducts from '../components/home/FeaturedProducts';
import ManufacturingProcess from '../components/home/ManufacturingProcess';
import CertificationsPreview from '../components/home/CertificationsPreview';
import Testimonials from '../components/home/Testimonials';
import FaqPreview from '../components/home/FaqPreview';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Seo
        title="Premium Herbal & Spice Manufacturer"
        description="Verdant Roots manufactures and exports whole spices, herbal blends, and botanical extracts for retail, wholesale, bulk, and export partners worldwide."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Adilaksh',
          description: 'Herbal & spice manufacturer and exporter',
        }}
      />
      <Hero />
      <About />
      {/* <WhyChooseUs /> */}
      {/* <FeaturedProducts /> */}
      {/* <ManufacturingProcess /> */}
      {/* <CertificationsPreview /> */}
      {/* <Testimonials /> */}
      <FaqPreview />
      <ContactSection
        title="Ready to place your first order?"
        subtitle="Whether it's a retail trial pack or a full container export order, our team responds within one business day."
      />
    </>
  );
}
