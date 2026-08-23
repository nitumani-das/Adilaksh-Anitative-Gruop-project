import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import { useToast } from '../../contexts/ToastContext';
import EmptyState from '../../components/common/EmptyState';
import Seo from '../../components/common/Seo';

const STATUS_OPTIONS = ['new', 'contacted', 'in_progress', 'closed'];
const TYPE_OPTIONS = ['', 'retail', 'wholesale', 'bulk', 'export', 'general'];

const STATUS_COLORS = {
  new: 'bg-gold-100 text-gold-600',
  contacted: 'bg-leaf-100 text-leaf-600',
  in_progress: 'bg-forest-800/10 text-forest-800',
  closed: 'bg-charcoal-400/10 text-charcoal-400',
};

export default function Leads() {
  const [typeFilter, setTypeFilter] = useState('');
  const { showToast } = useToast();
  const {
    data: leads,
    isLoading,
    refetch,
  } = useFetch(() => api.get('/leads', { params: typeFilter ? { enquiryType: typeFilter } : {} }), [
    typeFilter,
  ]);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/leads/${id}`, { status });
      showToast('Lead status updated');
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const deleteLead = async (id) => {
    if (!window.confirm('Delete this enquiry permanently?')) return;
    try {
      await api.delete(`/leads/${id}`);
      showToast('Lead deleted');
      refetch();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <Seo title="Manage Leads" />
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="font-display text-2xl text-forest-900 font-semibold">Leads & Enquiries</h1>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-xl border border-leaf-400/30 bg-cream-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          {TYPE_OPTIONS.map((t) => (
            <option key={t} value={t}>
              {t ? t.charAt(0).toUpperCase() + t.slice(1) : 'All Types'}
            </option>
          ))}
        </select>
      </div>

      {isLoading && <p className="text-sm text-charcoal-400">Loading leads…</p>}

      {!isLoading && (!leads || leads.length === 0) && (
        <EmptyState title="No enquiries yet" message="Submissions from the website contact forms will appear here." />
      )}

      {!isLoading && leads?.length > 0 && (
        <div className="bg-cream-100 rounded-2xl shadow-soft border border-leaf-100 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-charcoal-400 border-b border-leaf-100">
                <th className="px-5 py-3.5 font-semibold">Name</th>
                <th className="px-5 py-3.5 font-semibold">Contact</th>
                <th className="px-5 py-3.5 font-semibold">Type</th>
                <th className="px-5 py-3.5 font-semibold">Message</th>
                <th className="px-5 py-3.5 font-semibold">Status</th>
                <th className="px-5 py-3.5 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-leaf-100">
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td className="px-5 py-4 font-medium text-charcoal-900">{lead.name}</td>
                  <td className="px-5 py-4 text-charcoal-700">
                    <div>{lead.email}</div>
                    <div className="text-xs text-charcoal-400">{lead.phone}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs rounded-full px-2.5 py-1 font-medium ${STATUS_COLORS[lead.status] || ''}`}>
                      {lead.enquiryType}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-charcoal-700 max-w-xs truncate">{lead.message || '—'}</td>
                  <td className="px-5 py-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                      className="rounded-lg border border-leaf-400/30 bg-cream-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s.replace('_', ' ')}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => deleteLead(lead._id)}
                      aria-label="Delete lead"
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
