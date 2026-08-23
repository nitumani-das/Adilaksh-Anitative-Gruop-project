import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';

export default function BackToTop() {
  const visible = useScrolled(500);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-forest-900 text-cream-100 shadow-lift hover:bg-forest-800 transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  );
}
