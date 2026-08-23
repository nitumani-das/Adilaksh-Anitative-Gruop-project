import LegalPage from './LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Verdant Roots collects, uses, and protects your personal information."
    >
      <p>Last updated: January 2026</p>
      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly, such as your name, email, phone number,
        and company details, when you submit an enquiry, subscribe to our newsletter, or
        contact our sales team.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to respond to enquiries, process orders, send
        product updates you've opted into, and improve our website and services.
      </p>
      <h2>Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with logistics and
        payment partners solely to fulfill an order you've placed.
      </p>
      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data at any
        time by contacting us at the email address listed on our Contact page.
      </p>
      <p className="text-sm text-charcoal-400">
        This is placeholder policy text. Replace with content reviewed by your legal counsel
        before publishing.
      </p>
    </LegalPage>
  );
}
