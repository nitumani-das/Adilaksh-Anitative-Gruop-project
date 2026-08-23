import { useState } from 'react';

import { subscriberService } from '../../services/leadService';

import { useToast } from '../../contexts/ToastContext';

export default function NewsletterForm({ dark = false }) {
  const [email, setEmail] = useState('');

  const [submitting, setSubmitting] = useState(false);

  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitting(true);

    try {
      await subscriberService.subscribe(email.trim());

      showToast(
        'Subscribed! Watch your inbox for our next harvest update.'
      );

      setEmail('');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md"
    >
      <label
        htmlFor="newsletter-email"
        className="sr-only"
      >
        Email address
      </label>

      <div
        className={`
          flex
          flex-col
          sm:flex-row
          gap-2
          p-1.5
          rounded-2xl
          sm:rounded-full
          transition-all
          duration-300
          focus-within:ring-1
          focus-within:ring-gold-400/40
          ${
            dark
              ? 'bg-forest-800/80 border border-cream-100/10'
              : 'bg-cream-100 border border-leaf-400/30'
          }
        `}
      >

        {/* Email Input */}
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className={`
            min-w-0
            w-full
            flex-1
            rounded-xl
            sm:rounded-full
            px-4
            py-3
            text-sm
            outline-none
            border-0
            focus:ring-0
            ${
              dark
                ? 'bg-transparent text-cream-100 placeholder:text-cream-100/40'
                : 'bg-transparent text-charcoal-900 placeholder:text-charcoal-400'
            }
          `}
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          disabled={submitting}
          className="
            shrink-0
            w-full
            sm:w-auto
            min-w-[105px]
            rounded-xl
            sm:rounded-full
            bg-gold-500
            px-5
            py-3
            text-sm
            font-semibold
            text-forest-950
            whitespace-nowrap
            hover:bg-gold-400
            hover:shadow-lg
            hover:shadow-gold-500/10
            active:scale-[0.98]
            transition-all
            duration-200
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          {submitting ? 'Sending…' : 'Subscribe'}
        </button>

      </div>
    </form>
  );
}