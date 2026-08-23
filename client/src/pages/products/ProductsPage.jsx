import { useMemo, useState } from "react";

import products from "../../data/products";

import ProductSearch from "../../components/products/ProductSearch";
import ProductFilters from "../../components/products/ProductFilters";
import ProductGrid from "../../components/products/ProductGrid";

import {
  getCategories,
  filterProducts,
} from "../../utils/productUtils";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedStatus, setSelectedStatus] =
    useState("All");

  const categories = useMemo(
    () => getCategories(products),
    []
  );

  const filteredProducts = useMemo(
    () =>
      filterProducts(
        products,
        searchTerm,
        selectedCategory,
        selectedStatus
      ),
    [
      searchTerm,
      selectedCategory,
      selectedStatus,
    ]
  );

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Our Collection
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Natural Products
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Explore our collection of natural herbal
              products and traditional Indian spices.
            </p>
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Search */}
        <div className="mb-8 max-w-xl">
          <ProductSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        {/* Filters */}
        <div className="mb-10">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        </div>

        {/* Result count */}
        <div className="mb-6 flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

        </div>

        {/* Grid */}
        <ProductGrid
          products={filteredProducts}
        />

      </section>

    </main>
  );
};

export default ProductsPage;