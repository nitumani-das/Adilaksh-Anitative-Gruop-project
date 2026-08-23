import LegalPage from './LegalPage';

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="The terms governing use of the Verdant Roots website and purchase of our products."
    >
      <p>Last updated: January 2026</p>
      <h2>Use of This Website</h2>
      <p>
        By accessing this website, you agree to use it only for lawful purposes and in a
        manner that does not infringe the rights of, or restrict or inhibit the use of, this
        site by any third party.
      </p>
      <h2>Orders & Enquiries</h2>
      <p>
        Submitting an enquiry through this website does not constitute a binding order. All
        orders are subject to written confirmation, agreed pricing, and payment terms from
        our sales team.
      </p>
      <h2>Product Information</h2>
      <p>
        We make reasonable efforts to ensure product descriptions, specifications, and
        images are accurate, but slight variation in natural products (color, size, aroma)
        should be expected.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        Verdant Roots shall not be liable for indirect or consequential losses arising from
        use of this website or its content.
      </p>
      <p className="text-sm text-charcoal-400">
        This is placeholder terms text. Replace with content reviewed by your legal counsel
        before publishing.
      </p>
    </LegalPage>
  );
}
