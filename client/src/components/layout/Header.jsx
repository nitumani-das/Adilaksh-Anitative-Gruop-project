import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search, MessageCircle } from 'lucide-react';
import { NAV_LINKS, BRAND } from '../../constants/navigation';
import { whatsappLink } from '../../config/site';
import { useScrolled } from '../../hooks/useScrolled';
import Sprig from '../common/Sprig';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const scrolled = useScrolled(24);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    window.location.href = `/products?search=${encodeURIComponent(query.trim())}`;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? 'glass shadow-soft' : 'bg-cream-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label={`${BRAND.name} home`}>
            <Sprig className="w-8 h-8 text-forest-800" />
            <span className="font-display text-2xl font-semibold text-forest-900 tracking-tight">
              {BRAND.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors hover:text-gold-600 ${
                    isActive ? 'text-forest-900' : 'text-charcoal-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search products"
              className="p-2 rounded-full text-charcoal-700 hover:bg-leaf-100 hover:text-forest-900 transition-colors"
            >
              <Search size={19} />
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest-900 text-cream-100 px-5 py-2.5 text-sm font-semibold hover:bg-forest-800 transition-colors shadow-soft"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-forest-900"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {searchOpen && (
          <form onSubmit={handleSearch} className="hidden lg:block pb-4">
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for turmeric, cardamom, ashwagandha…"
              className="w-full rounded-full border border-leaf-400/40 bg-cream-100 px-5 py-2.5 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </form>
        )}
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-leaf-400/20 bg-cream-100 px-5 py-6">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium border-b border-leaf-100 ${
                    isActive ? 'text-forest-900' : 'text-charcoal-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-900 text-cream-100 px-5 py-3 text-sm font-semibold"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
