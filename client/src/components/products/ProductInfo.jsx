import {
  CheckCircle2,
  Clock3,
} from "lucide-react";

import PackSizeSelector from "./PackSizeSelector";

const ProductInfo = ({ product }) => {
  const isComingSoon =
    product.status === "coming-soon";

  return (
    <div>

      {/* Category */}
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {product.name}
      </h1>

      {/* Status */}
      <div className="mt-5">

        {isComingSoon ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <Clock3 size={16} />
            Coming Soon
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <CheckCircle2 size={16} />
            Currently Available
          </span>
        )}

      </div>

      {/* Description */}
      <div className="mt-8">

        <h2 className="text-lg font-semibold text-gray-900">
          About this product
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          {product.description}
        </p>

      </div>

      {/* Pack Sizes */}
      <div className="mt-8">
        <PackSizeSelector
          packSizes={product.packSizes}
        />
      </div>

      {/* Tags */}
      <div className="mt-8">

        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Product Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Bulk Information */}
      <div className="mt-8 rounded-xl bg-green-50 p-5">

        <h3 className="font-semibold text-green-900">
          Bulk & Wholesale
        </h3>

        <p className="mt-2 text-sm leading-6 text-green-800">
          Bulk packs are available for retail stores,
          wholesalers, distributors and business buyers.
        </p>

      </div>

    </div>
  );
};

export default ProductInfo;