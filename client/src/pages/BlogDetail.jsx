import { useParams, Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import { useFetch } from '../hooks/useFetch';
import { blogService } from '../services/blogService';
import ShareButtons from '../components/blog/ShareButtons';
import BlogCard from '../components/blog/BlogCard';
import { CardSkeleton } from '../components/common/Skeletons';
import EmptyState from '../components/common/EmptyState';

export default function BlogDetail() {
  const { slug } = useParams();
  const { data, isLoading, error } = useFetch(() => blogService.getBySlug(slug), [slug]);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-20">
        <CardSkeleton />
      </div>
    );
  }

  if (error || !data?.blog) {
    return (
      <EmptyState
        title="Post not found"
        message="This article may have been moved or unpublished."
        action={
          <Link to="/blog" className="text-sm font-semibold text-forest-900 hover:text-gold-600">
            ← Back to blog
          </Link>
        }
      />
    );
  }

  const { blog, related } = data;
  const date = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Seo
        title={blog.title}
        description={blog.excerpt}
        image={blog.featuredImage}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: blog.title,
          datePublished: blog.publishedAt,
        }}
      />

      <article className="max-w-3xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <nav className="text-xs text-charcoal-400 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-forest-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-forest-900">Blog</Link>
        </nav>

        <div className="flex items-center gap-3 text-xs text-charcoal-400 mb-4">
          {blog.category && <span className="text-gold-600 font-semibold uppercase tracking-wide">{blog.category}</span>}
          {date && <span>{date}</span>}
          {blog.author?.name && <span>By {blog.author.name}</span>}
        </div>

        <h1 className="font-display text-3xl lg:text-4xl text-forest-900 font-medium mb-6 leading-tight">
          {blog.title}
        </h1>

        {blog.featuredImage && (
          <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
            <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex items-center justify-between mb-8 pb-8 border-b border-leaf-100">
          <ShareButtons url={pageUrl} title={blog.title} />
        </div>

        <div
          className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-forest-900 prose-a:text-gold-600"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-leaf-100">
            {blog.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-leaf-100 px-3.5 py-1.5 text-xs font-medium text-forest-900">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {related?.length > 0 && (
        <section className="bg-leaf-100/50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <h2 className="font-display text-2xl text-forest-900 font-semibold mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
