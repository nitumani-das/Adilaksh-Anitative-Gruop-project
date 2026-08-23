import AdminResourceList from './AdminResourceList';

export default function AdminGallery() {
  return (
    <AdminResourceList
      title="Gallery"
      endpoint="/gallery"
      fields={[
        { key: 'title', label: 'Title' },
        { key: 'image', label: 'Image URL' },
        { key: 'category', label: 'Category (manufacturing/warehouse/packaging/facility/other)' },
      ]}
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
      ]}
    />
  );
}
