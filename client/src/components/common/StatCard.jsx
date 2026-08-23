export default function StatCard({ icon: Icon, label, value, accent = 'text-forest-900' }) {
  return (
    <div className="bg-cream-100 rounded-2xl p-6 shadow-soft border border-leaf-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-charcoal-400">
          {label}
        </span>
        <Icon size={18} className="text-gold-600" />
      </div>
      <p className={`font-display text-3xl font-semibold ${accent}`}>{value}</p>
    </div>
  );
}
