import AdminResourceList from './AdminResourceList';

export default function AdminCertificates() {
  return (
    <AdminResourceList
      title="Certificates"
      endpoint="/certificates"
      fields={[
        { key: 'title', label: 'Certificate Title' },
        { key: 'issuingBody', label: 'Issuing Body' },
        { key: 'image', label: 'Image URL' },
        { key: 'description', label: 'Description', type: 'textarea' },
      ]}
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'issuingBody', label: 'Issuing Body' },
      ]}
    />
  );
}
