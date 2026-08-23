import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import { productService } from '../../services/productService';
import ProductCard from '../products/ProductCard';
import { GridSkeleton } from '../common/Skeletons';
import EmptyState from '../common/EmptyState';

export default function FeaturedProducts() {
  const { data: products, isLoading, error } = useFetch(
    () => productService.getAll({ featured: true, limit: 6 }),
    []
  );

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Featured Products
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium">
            Our most requested herbs and spices.
          </h2>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors shrink-0"
        >
          View Full Catalogue
          <ArrowRight size={16} />
        </Link>
      </div>

      {isLoading && <GridSkeleton count={6} />}

      {!isLoading && error && (
        <EmptyState
          title="Products are loading elsewhere"
          message="We couldn't reach the product catalogue just now. Please check back shortly."
        />
      )}

      {!isLoading && !error && (!products || products.length === 0) && (
        <EmptyState
          title="Catalogue coming soon"
          message="Featured products will appear here once they're added in the admin dashboard."
        />
      )}

      {!isLoading && !error && products?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </motion.div>
      )}
    </section>
  );
}
