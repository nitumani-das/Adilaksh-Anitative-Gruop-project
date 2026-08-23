import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import { useFetch } from '../hooks/useFetch';
import { productService } from '../services/productService';
import { categoryService } from '../services/categoryService';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';
import { GridSkeleton } from '../components/common/Skeletons';
import EmptyState from '../components/common/EmptyState';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [page, setPage] = useState(1);

  const { data: categories } = useFetch(() => categoryService.getAll(), []);

  const queryParams = useMemo(
    () => ({ category: category || undefined, search: search || undefined, page, limit: 12 }),
    [category, search, page]
  );

  const {
    data: products,
    isLoading,
    error,
  } = useFetch(() => productService.getAll(queryParams), [category, search, page]);

  useEffect(() => {
    setPage(1);
  }, [category, search]);

  useEffect(() => {
    const next = new URLSearchParams();
    if (search) next.set('search', search);
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Seo
        title="Our Products"
        description="Browse our full catalogue of whole spices, herbal blends, and botanical extracts available for retail, wholesale, bulk, and export orders."
      />

      <section className="bg-forest-950 text-cream-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Catalogue
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-medium max-w-2xl">
            Our full range of herbs and spices.
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <ProductFilters
          categories={categories || []}
          activeCategory={category}
          onCategoryChange={setCategory}
          search={search}
          onSearchChange={setSearch}
        />

        {isLoading && <GridSkeleton count={9} />}

        {!isLoading && error && (
          <EmptyState
            title="Couldn't load products"
            message="Something went wrong reaching the catalogue. Please try again shortly."
          />
        )}

        {!isLoading && !error && (!products || products.length === 0) && (
          <EmptyState
            title="No products found"
            message="Try a different search term or browse all categories."
          />
        )}

        {!isLoading && !error && products?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
