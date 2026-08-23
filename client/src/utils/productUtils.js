export const getCategories = (products) => {
  return [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
};

export const getProductBySlug = (products, slug) => {
  return products.find((product) => product.slug === slug);
};

export const getRelatedProducts = (
  products,
  currentProduct,
  limit = 4
) => {
  return products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, limit);
};

export const filterProducts = (
  products,
  searchTerm,
  selectedCategory,
  selectedStatus
) => {
  return products.filter((product) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(search)
      );

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesStatus =
      selectedStatus === "All" ||
      product.status === selectedStatus;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });
};