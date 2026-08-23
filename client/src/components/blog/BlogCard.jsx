import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  const image = post.featuredImage || 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=700&q=80';
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-2xl overflow-hidden bg-cream-100 border border-leaf-100 shadow-soft hover:shadow-lift transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden bg-leaf-100">
        <img
          src={image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-charcoal-400 mb-2">
          {post.category && <span className="text-gold-600 font-semibold uppercase tracking-wide">{post.category}</span>}
          {date && <span>{date}</span>}
        </div>
        <h3 className="font-display text-lg text-forest-900 font-semibold leading-snug mb-2">
          {post.title}
        </h3>
        {post.excerpt && <p className="text-sm text-charcoal-700 line-clamp-2">{post.excerpt}</p>}
      </div>
    </Link>
  );
}
