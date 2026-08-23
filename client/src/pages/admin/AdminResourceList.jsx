import { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import { useToast } from '../../contexts/ToastContext';
import EmptyState from '../../components/common/EmptyState';
import Seo from '../../components/common/Seo';

/**
 * Config-driven admin list for simple resources (Category, Certificate,
 * Gallery, Subscriber) so we don't hand-write four near-identical pages.
 *
 * @param {string} title - Page heading
 * @param {string} endpoint - API endpoint, e.g. '/categories'
 * @param {Array<{key: string, label: string, type?: 'text'|'textarea'}>} fields - Add-form fields
 * @param {Array<{key: string, label: string, render?: (item) => React.ReactNode}>} columns - Table columns
 */
export default function AdminResourceList({ title, endpoint, fields, columns }) {
  const [formOpen, setFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const { data: items, isLoading, refetch } = useFetch(() => api.get(endpoint), [endpoint]);

  const handleChange = (key, value) => setFormValues((v) => ({ ...v, [key]: value }));

  const handleAdd = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post(endpoint, formValues);
      showToast(`${title.slice(0, -1)} added`);
      setFormValues({});
      setFormOpen(false);
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this item permanently?')) return;
    try {
      await api.delete(`${endpoint}/${id}`);
      showToast('Item deleted');
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <Seo title={title} />
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="font-display text-2xl text-forest-900 font-semibold">{title}</h1>
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
          {fields.map((field) => (
            <div key={field.key} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  rows={3}
                  value={formValues[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              ) : (
                <input
                  type="text"
                  value={formValues[field.key] || ''}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              )}
            </div>
          ))}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-gold-500 text-forest-950 px-6 py-2.5 text-sm font-semibold hover:bg-gold-400 transition-colors disabled:opacity-60"
            >
              {submitting ? 'Saving…' : 'Save'}
            </button>
          </div>
        </form>
      )}

      {isLoading && <p className="text-sm text-charcoal-400">Loading…</p>}

      {!isLoading && (!items || items.length === 0) && (
        <EmptyState title="Nothing here yet" message="Use “Add New” above to create your first entry." />
      )}

      {!isLoading && items?.length > 0 && (
        <div className="bg-cream-100 rounded-2xl shadow-soft border border-leaf-100 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-charcoal-400 border-b border-leaf-100">
                {columns.map((col) => (
                  <th key={col.key} className="px-5 py-3.5 font-semibold">
                    {col.label}
                  </th>
                ))}
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-leaf-100">
              {items.map((item) => (
                <tr key={item._id}>
                  {columns.map((col) => (
                    <td key={col.key} className="px-5 py-4 text-charcoal-700">
                      {col.render ? col.render(item) : item[col.key]}
                    </td>
                  ))}
                  <td className="px-5 py-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      aria-label="Delete"
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
