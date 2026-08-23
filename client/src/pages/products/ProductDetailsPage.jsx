
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import products from "../../data/products";

import ProductImageGallery from "../../components/products/ProductImageGallery";
import ProductInfo from "../../components/products/ProductInfo";
import RelatedProducts from "../../components/products/RelatedProducts";

import {
  getProductBySlug,
  getRelatedProducts,
} from "../../utils/productUtils";

const ProductDetailsPage = () => {
  const { slug } = useParams();

  const product = getProductBySlug(
    products,
    slug
  );

  // ============================================================
  // PRODUCT NOT FOUND
  // ============================================================

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The product you are looking for does not exist.
          </p>

          {/* Back to All Products */}
          <Link
            to="/all-products"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>

        </div>

      </main>
    );
  }

  // ============================================================
  // RELATED PRODUCTS
  // ============================================================

  const relatedProducts = getRelatedProducts(
    products,
    product
  );

  return (
    <main className="min-h-screen bg-white">

      {/* ========================================================
          BACK TO ALL PRODUCTS
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">

        <Link
          to="/all-products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-green-700"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

      </div>

      {/* ========================================================
          PRODUCT DETAILS
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Product Image Gallery */}
          <ProductImageGallery
            images={product.images}
            name={product.name}
          />

          {/* Product Information */}
          <ProductInfo
            product={product}
          />

        </div>

      </section>

      {/* ========================================================
          RELATED PRODUCTS
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <RelatedProducts
          products={relatedProducts}
        />

      </div>

    </main>
  );
};

export default ProductDetailsPage;

