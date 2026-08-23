import Seo from '../components/common/Seo';
import { useFetch } from '../hooks/useFetch';
import { blogService } from '../services/blogService';
import BlogCard from '../components/blog/BlogCard';
import { GridSkeleton } from '../components/common/Skeletons';
import EmptyState from '../components/common/EmptyState';

export default function Blog() {
  const { data: posts, isLoading, error } = useFetch(() => blogService.getAll(), []);

  return (
    <>
      <Seo
        title="Blog"
        description="Articles on spice sourcing, herbal wellness, manufacturing standards, and industry insights from Verdant Roots."
      />

      <section className="bg-forest-950 text-cream-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Journal
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-medium max-w-2xl">
            Notes on spices, sourcing, and the trade.
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        {isLoading && <GridSkeleton count={6} />}

        {!isLoading && error && (
          <EmptyState title="Couldn't load blog posts" message="Please try again shortly." />
        )}

        {!isLoading && !error && (!posts || posts.length === 0) && (
          <EmptyState
            title="No posts yet"
            message="Check back soon — our first articles are on the way."
          />
        )}

        {!isLoading && !error && posts?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
