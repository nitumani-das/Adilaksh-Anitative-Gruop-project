import { Package, FileText, Users, Mail, AlertCircle } from 'lucide-react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import StatCard from '../../components/common/StatCard';
import Seo from '../../components/common/Seo';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { data: stats, isLoading } = useFetch(() => api.get('/dashboard/stats'), []);

  return (
    <div className="p-6 lg:p-10">
      <Seo title="Admin Dashboard" />
      <h1 className="font-display text-2xl text-forest-900 font-semibold mb-8">Dashboard Overview</h1>

      {isLoading ? (
        <p className="text-sm text-charcoal-400">Loading stats…</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            <StatCard icon={Package} label="Products" value={stats?.productCount ?? 0} />
            <StatCard icon={FileText} label="Blog Posts" value={stats?.blogCount ?? 0} />
            <StatCard icon={Users} label="Total Leads" value={stats?.leadCount ?? 0} />
            <StatCard
              icon={AlertCircle}
              label="New Leads"
              value={stats?.newLeadCount ?? 0}
              accent="text-gold-600"
            />
            <StatCard icon={Mail} label="Subscribers" value={stats?.subscriberCount ?? 0} />
          </div>

          <div className="bg-cream-100 rounded-2xl p-6 shadow-soft border border-leaf-100">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-lg text-forest-900 font-semibold">Recent Enquiries</h2>
              <Link to="/admin/leads" className="text-xs font-semibold text-forest-900 hover:text-gold-600">
                View all →
              </Link>
            </div>
            {stats?.recentLeads?.length ? (
              <div className="divide-y divide-leaf-100">
                {stats.recentLeads.map((lead) => (
                  <div key={lead._id} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-charcoal-900">{lead.name}</p>
                      <p className="text-xs text-charcoal-400">{lead.email} · {lead.enquiryType}</p>
                    </div>
                    <span className="text-xs rounded-full bg-leaf-100 text-forest-900 px-3 py-1 font-medium shrink-0">
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-charcoal-400">No enquiries yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
