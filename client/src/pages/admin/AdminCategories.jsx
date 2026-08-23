import AdminResourceList from './AdminResourceList';

export default function AdminCategories() {
  return (
    <AdminResourceList
      title="Categories"
      endpoint="/categories"
      fields={[
        { key: 'name', label: 'Category Name' },
        { key: 'description', label: 'Description', type: 'textarea' },
      ]}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
      ]}
    />
  );
}
