import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';
import { useToast } from '../../contexts/ToastContext';
import Seo from '../../components/common/Seo';

const FIELDS = [
  { key: 'siteName', label: 'Site Name' },
  { key: 'tagline', label: 'Tagline' },
  { key: 'contactEmail', label: 'Contact Email' },
  { key: 'contactPhone', label: 'Contact Phone' },
  { key: 'whatsappNumber', label: 'WhatsApp Number (with country code)' },
  { key: 'address', label: 'Address', type: 'textarea' },
  { key: 'workingHours', label: 'Working Hours' },
  { key: 'mapEmbedUrl', label: 'Google Maps Embed URL', type: 'textarea' },
  { key: 'defaultMetaTitle', label: 'Default Meta Title' },
  { key: 'defaultMetaDescription', label: 'Default Meta Description', type: 'textarea' },
];

export default function AdminSettings() {
  const { data: settings, isLoading } = useFetch(() => api.get('/settings'), []);
  const [values, setValues] = useState({});
  const [saving, setSaving] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (settings) setValues(settings);
  }, [settings]);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put('/settings', values);
      showToast('Settings saved');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 lg:p-10">
        <p className="text-sm text-charcoal-400">Loading settings…</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 max-w-3xl">
      <Seo title="Site Settings" />
      <h1 className="font-display text-2xl text-forest-900 font-semibold mb-8">Site Settings</h1>

      <form
        onSubmit={handleSave}
        className="bg-cream-100 rounded-2xl p-6 shadow-soft border border-leaf-100 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {FIELDS.map((field) => (
          <div key={field.key} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1.5">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                rows={3}
                value={values[field.key] || ''}
                onChange={(e) => setValues((v) => ({ ...v, [field.key]: e.target.value }))}
                className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            ) : (
              <input
                type="text"
                value={values[field.key] || ''}
                onChange={(e) => setValues((v) => ({ ...v, [field.key]: e.target.value }))}
                className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
            )}
          </div>
        ))}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-gold-500 text-forest-950 px-6 py-2.5 text-sm font-semibold hover:bg-gold-400 transition-colors disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  );
}
