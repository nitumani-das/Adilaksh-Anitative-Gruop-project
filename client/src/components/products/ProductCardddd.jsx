import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const image = product.images?.[0] || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80';

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block rounded-2xl overflow-hidden bg-cream-100 border border-leaf-100 shadow-soft hover:shadow-lift transition-shadow"
    >
      <div className="aspect-[4/3] overflow-hidden bg-leaf-100">
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        {product.category?.name && (
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-600 mb-1.5">
            {product.category.name}
          </p>
        )}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg text-forest-900 font-semibold leading-snug">
            {product.name}
          </h3>
          <ArrowUpRight
            size={18}
            className="shrink-0 mt-1 text-charcoal-400 group-hover:text-gold-600 transition-colors"
          />
        </div>
        {product.shortDescription && (
          <p className="text-sm text-charcoal-700 mt-2 line-clamp-2">{product.shortDescription}</p>
        )}
      </div>
    </Link>
  );
}
