import { useParams, Link } from 'react-router-dom';
import { Download, MessageCircle, Package, CheckCircle2 } from 'lucide-react';
import Seo from '../components/common/Seo';
import { useFetch } from '../hooks/useFetch';
import { productService } from '../services/productService';
import ProductGallery from '../components/products/ProductGallery';
import { CardSkeleton } from '../components/common/Skeletons';
import EmptyState from '../components/common/EmptyState';
import { whatsappLink } from '../config/site';
import ContactForm from '../components/forms/ContactForm';

export default function ProductDetail() {
  const { slug } = useParams();
  const { data: product, isLoading, error } = useFetch(() => productService.getBySlug(slug), [slug]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <CardSkeleton />
      </div>
    );
  }

  if (error || !product) {
    return (
      <EmptyState
        title="Product not found"
        message="This product may have been removed or renamed."
        action={
          <Link to="/products" className="text-sm font-semibold text-forest-900 hover:text-gold-600">
            ← Back to all products
          </Link>
        }
      />
    );
  }

  return (
    <>
      <Seo
        title={product.name}
        description={product.shortDescription}
        image={product.images?.[0]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
        }}
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <nav className="text-xs text-charcoal-400 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-forest-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-forest-900">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal-700">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            {product.category?.name && (
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 mb-2">
                {product.category.name}
              </p>
            )}
            <h1 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium mb-4">
              {product.name}
            </h1>
            {product.shortDescription && (
              <p className="text-charcoal-700 leading-relaxed mb-6">{product.shortDescription}</p>
            )}

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={whatsappLink(`Hi, I'd like to enquire about ${product.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest-900 text-cream-100 px-6 py-3 text-sm font-semibold hover:bg-forest-800 transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Enquiry
              </a>
              <a
                href="#enquire"
                className="inline-flex items-center gap-2 rounded-full border border-forest-900 text-forest-900 px-6 py-3 text-sm font-semibold hover:bg-leaf-100 transition-colors"
              >
                <Package size={16} />
                Request Bulk Quote
              </a>
              {product.catalogueFile && (
                <a
                  href={product.catalogueFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-leaf-400/40 text-charcoal-700 px-6 py-3 text-sm font-semibold hover:bg-leaf-100 transition-colors"
                >
                  <Download size={16} />
                  Download Catalogue
                </a>
              )}
            </div>

            {product.benefits?.length > 0 && (
              <div className="mb-6">
                <h2 className="font-display text-lg text-forest-900 font-semibold mb-3">Benefits</h2>
                <ul className="space-y-2">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-charcoal-700">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-leaf-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.packagingOptions?.length > 0 && (
              <div className="mb-6">
                <h2 className="font-display text-lg text-forest-900 font-semibold mb-3">
                  Packaging Options
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.packagingOptions.map((p) => (
                    <span key={p} className="rounded-full bg-leaf-100 px-3.5 py-1.5 text-xs font-medium text-forest-900">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.specifications?.length > 0 && (
              <div>
                <h2 className="font-display text-lg text-forest-900 font-semibold mb-3">
                  Specifications
                </h2>
                <dl className="divide-y divide-leaf-100 border-t border-b border-leaf-100">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-2.5 text-sm">
                      <dt className="text-charcoal-400">{spec.label}</dt>
                      <dd className="text-charcoal-900 font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        {product.description && (
          <div className="max-w-3xl mt-16 pt-12 border-t border-leaf-100">
            <h2 className="font-display text-2xl text-forest-900 font-semibold mb-4">
              Product Overview
            </h2>
            <p className="text-charcoal-700 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        )}

        <div id="enquire" className="max-w-2xl mt-16 pt-12 border-t border-leaf-100 scroll-mt-24">
          <h2 className="font-display text-2xl text-forest-900 font-semibold mb-2">
            Request a Bulk or Export Quote
          </h2>
          <p className="text-charcoal-700 mb-6">
            Tell us your required quantity and destination — we'll respond with pricing and lead time.
          </p>
          <ContactForm defaultEnquiryType="bulk" />
        </div>
      </section>
    </>
  );
}
