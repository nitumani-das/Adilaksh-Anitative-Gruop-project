import { Globe, Briefcase, AtSign, Link2 } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

export default function ShareButtons({ url, title }) {
  const { showToast } = useToast();
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      showToast('Link copied to clipboard');
    } catch {
      showToast('Could not copy link', 'error');
    }
  };

  const iconClass =
    'p-2.5 rounded-full bg-leaf-100 text-forest-900 hover:bg-forest-900 hover:text-cream-100 transition-colors';

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={iconClass}
      >
        <Globe size={16} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className={iconClass}
      >
        <AtSign size={16} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={iconClass}
      >
        <Briefcase size={16} />
      </a>
      <button onClick={copyLink} aria-label="Copy link" className={iconClass}>
        <Link2 size={16} />
      </button>
    </div>
  );
}
