import { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import { useToast } from '../../contexts/ToastContext';
import EmptyState from '../../components/common/EmptyState';
import Seo from '../../components/common/Seo';

export default function AdminProducts() {
  const [formOpen, setFormOpen] = useState(false);
  const [values, setValues] = useState({ name: '', category: '', shortDescription: '', isFeatured: false });
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const { data: products, isLoading, refetch } = useFetch(() => api.get('/products', { params: { limit: 100 } }), []);
  const { data: categories } = useFetch(() => api.get('/categories'), []);

  const handleAdd = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post('/products', values);
      showToast('Product added');
      setValues({ name: '', category: '', shortDescription: '', isFeatured: false });
      setFormOpen(false);
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product permanently?')) return;
    try {
      await api.delete(`/products/${id}`);
      showToast('Product deleted');
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <Seo title="Manage Products" />
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="font-display text-2xl text-forest-900 font-semibold">Products</h1>
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
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">Product Name</label>
            <input
              required
              type="text"
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">Category</label>
            <select
              required
              value={values.category}
              onChange={(e) => setValues((v) => ({ ...v, category: e.target.value }))}
              className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <option value="">Select category…</option>
              {categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">Short Description</label>
            <textarea
              rows={3}
              value={values.shortDescription}
              onChange={(e) => setValues((v) => ({ ...v, shortDescription: e.target.value }))}
              className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-charcoal-700 sm:col-span-2">
            <input
              type="checkbox"
              checked={values.isFeatured}
              onChange={(e) => setValues((v) => ({ ...v, isFeatured: e.target.checked }))}
              className="rounded border-leaf-400/40"
            />
            Feature on homepage
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-gold-500 text-forest-950 px-6 py-2.5 text-sm font-semibold hover:bg-gold-400 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Saving…' : 'Save Product'}
            </button>
            <p className="text-xs text-charcoal-400 mt-2">
              Full specs, images, and packaging options can be added by editing the product record via the API.
            </p>
          </div>
        </form>
      )}

      {isLoading && <p className="text-sm text-charcoal-400">Loading…</p>}

      {!isLoading && (!products || products.length === 0) && (
        <EmptyState title="No products yet" message="Use “Add New” above to create your first product." />
      )}

      {!isLoading && products?.length > 0 && (
        <div className="bg-cream-100 rounded-2xl shadow-soft border border-leaf-100 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-charcoal-400 border-b border-leaf-100">
                <th className="px-5 py-3.5 font-semibold">Name</th>
                <th className="px-5 py-3.5 font-semibold">Category</th>
                <th className="px-5 py-3.5 font-semibold">Featured</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-leaf-100">
              {products.map((p) => (
                <tr key={p._id}>
                  <td className="px-5 py-4 font-medium text-charcoal-900">{p.name}</td>
                  <td className="px-5 py-4 text-charcoal-700">{p.category?.name || '—'}</td>
                  <td className="px-5 py-4 text-charcoal-700">{p.isFeatured ? 'Yes' : 'No'}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => handleDelete(p._id)}
                      aria-label="Delete product"
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
