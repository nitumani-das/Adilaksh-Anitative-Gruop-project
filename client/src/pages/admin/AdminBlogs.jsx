import { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import { useToast } from '../../contexts/ToastContext';
import EmptyState from '../../components/common/EmptyState';
import Seo from '../../components/common/Seo';

export default function AdminBlogs() {
  const [formOpen, setFormOpen] = useState(false);
  const [values, setValues] = useState({
    title: '',
    category: 'General',
    excerpt: '',
    content: '',
    isPublished: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const { data: blogs, isLoading, refetch } = useFetch(
    () => api.get('/blogs', { params: { limit: 100 } }),
    []
  );

  const handleAdd = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = { ...values, publishedAt: values.isPublished ? new Date().toISOString() : undefined };
      await api.post('/blogs', payload);
      showToast('Blog post added');
      setValues({ title: '', category: 'General', excerpt: '', content: '', isPublished: false });
      setFormOpen(false);
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this blog post permanently?')) return;
    try {
      await api.delete(`/blogs/${id}`);
      showToast('Blog post deleted');
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <Seo title="Manage Blog Posts" />
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="font-display text-2xl text-forest-900 font-semibold">Blog Posts</h1>
        <button
          onClick={() => setFormOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full bg-forest-900 text-cream-100 px-5 py-2.5 text-sm font-semibold hover:bg-forest-800 transition-colors"
        >
          <Plus size={16} />
          Add New
        </button>
      </div>

      {formOpen && (
        <form
          onSubmit={handleAdd}
          className="bg-cream-100 rounded-2xl p-6 shadow-soft border border-leaf-100 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">Title</label>
            <input
              required
              type="text"
              value={values.title}
              onChange={(e) => setValues((v) => ({ ...v, title: e.target.value }))}
              className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">Category</label>
            <input
              type="text"
              value={values.category}
              onChange={(e) => setValues((v) => ({ ...v, category: e.target.value }))}
              className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">Excerpt</label>
            <textarea
              rows={2}
              value={values.excerpt}
              onChange={(e) => setValues((v) => ({ ...v, excerpt: e.target.value }))}
              className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
              Content (HTML supported)
            </label>
            <textarea
              required
              rows={6}
              value={values.content}
              onChange={(e) => setValues((v) => ({ ...v, content: e.target.value }))}
              className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-charcoal-700 sm:col-span-2">
            <input
              type="checkbox"
              checked={values.isPublished}
              onChange={(e) => setValues((v) => ({ ...v, isPublished: e.target.checked }))}
              className="rounded border-leaf-400/40"
            />
            Publish immediately
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-gold-500 text-forest-950 px-6 py-2.5 text-sm font-semibold hover:bg-gold-400 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Saving…' : 'Save Post'}
            </button>
          </div>
        </form>
      )}

      {isLoading && <p className="text-sm text-charcoal-400">Loading…</p>}

      {!isLoading && (!blogs || blogs.length === 0) && (
        <EmptyState title="No blog posts yet" message="Use “Add New” above to publish your first article." />
      )}

      {!isLoading && blogs?.length > 0 && (
        <div className="bg-cream-100 rounded-2xl shadow-soft border border-leaf-100 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-charcoal-400 border-b border-leaf-100">
                <th className="px-5 py-3.5 font-semibold">Title</th>
                <th className="px-5 py-3.5 font-semibold">Category</th>
                <th className="px-5 py-3.5 font-semibold">Status</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-leaf-100">
              {blogs.map((post) => (
                <tr key={post._id}>
                  <td className="px-5 py-4 font-medium text-charcoal-900">{post.title}</td>
                  <td className="px-5 py-4 text-charcoal-700">{post.category}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-xs rounded-full px-2.5 py-1 font-medium ${
                        post.isPublished ? 'bg-leaf-100 text-leaf-600' : 'bg-charcoal-400/10 text-charcoal-400'
                      }`}
                    >
                      {post.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => handleDelete(post._id)}
                      aria-label="Delete post"
                      className="p-2 rounded-lg text-charcoal-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
