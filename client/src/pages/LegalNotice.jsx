import LegalPage from './LegalPage';
import { SITE_CONFIG } from '../config/site';

export default function LegalNotice() {
  return (
    <LegalPage title="Legal Notice" description="Company and registration details for Verdant Roots.">
      <h2>Company Information</h2>
      <p>
        Verdant Roots Herbal & Spice Manufacturing Co.
        <br />
        {SITE_CONFIG.address}
      </p>
      <h2>Contact</h2>
      <p>
        Email: {SITE_CONFIG.email}
        <br />
        Phone: {SITE_CONFIG.phone}
      </p>
      <p className="text-sm text-charcoal-400">
        Registration numbers, GST/VAT ID, and licensing details should be added here prior to
        publishing.
      </p>
    </LegalPage>
  );
}
