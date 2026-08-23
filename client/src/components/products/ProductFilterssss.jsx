import { Search } from 'lucide-react';

export default function ProductFilters({ categories, activeCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
      <div className="relative flex-1 max-w-sm">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products…"
          className="w-full rounded-full border border-leaf-400/30 bg-cream-100 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('')}
          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
            !activeCategory
              ? 'bg-forest-900 text-cream-100'
              : 'bg-leaf-100 text-forest-900 hover:bg-leaf-100/70'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => onCategoryChange(cat._id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              activeCategory === cat._id
                ? 'bg-forest-900 text-cream-100'
                : 'bg-leaf-100 text-forest-900 hover:bg-leaf-100/70'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
