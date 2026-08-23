import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Seo from '../components/common/Seo';
import Sprig from '../components/common/Sprig';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <Sprig className="w-14 h-14 text-gold-500 mb-6" />
        <p className="font-display text-6xl text-forest-900 font-semibold mb-3">404</p>
        <h1 className="font-display text-2xl text-forest-900 font-medium mb-3">
          This page has gone to seed.
        </h1>
        <p className="text-charcoal-700 max-w-md mb-8">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-forest-900 text-cream-100 px-6 py-3 text-sm font-semibold hover:bg-forest-800 transition-colors"
        >
          <Home size={16} />
          Back to Home
        </Link>
      </div>
    </>
  );
}
