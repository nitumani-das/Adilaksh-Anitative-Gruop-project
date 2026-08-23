import { Trash2 } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import { useToast } from '../../contexts/ToastContext';
import EmptyState from '../../components/common/EmptyState';
import Seo from '../../components/common/Seo';

export default function AdminSubscribers() {
  const { data: subscribers, isLoading, refetch } = useFetch(() => api.get('/subscribers'), []);
  const { showToast } = useToast();

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this subscriber?')) return;
    try {
      await api.delete(`/subscribers/${id}`);
      showToast('Subscriber removed');
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <Seo title="Newsletter Subscribers" />
      <h1 className="font-display text-2xl text-forest-900 font-semibold mb-8">
        Newsletter Subscribers
      </h1>

      {isLoading && <p className="text-sm text-charcoal-400">Loading…</p>}

      {!isLoading && (!subscribers || subscribers.length === 0) && (
        <EmptyState title="No subscribers yet" message="Newsletter signups from the website footer will appear here." />
      )}

      {!isLoading && subscribers?.length > 0 && (
        <div className="bg-cream-100 rounded-2xl shadow-soft border border-leaf-100 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-charcoal-400 border-b border-leaf-100">
                <th className="px-5 py-3.5 font-semibold">Email</th>
                <th className="px-5 py-3.5 font-semibold">Subscribed</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-leaf-100">
              {subscribers.map((sub) => (
                <tr key={sub._id}>
                  <td className="px-5 py-4 text-charcoal-900">{sub.email}</td>
                  <td className="px-5 py-4 text-charcoal-400">
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => handleDelete(sub._id)}
                      aria-label="Remove subscriber"
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
