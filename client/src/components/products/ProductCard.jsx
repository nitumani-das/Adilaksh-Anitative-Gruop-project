
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  CheckCircle2,
  Package,
} from "lucide-react";

const ProductCard = ({ product }) => {
  const isComingSoon = product.status === "coming-soon";

  // Safe fallback values
  const image =
    product?.images?.[0] || "/images/products/placeholder.jpg";

  const packSizes = product?.packSizes || [];

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* =====================================================
          PRODUCT IMAGE
      ====================================================== */}
      <Link
        to={`/all-products/${product.slug}`}
        className="
          relative
          block
          aspect-square
          overflow-hidden
          bg-gray-100
        "
      >
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-colors
            duration-300
            group-hover:bg-black/5
          "
        />

        {/* =================================================
            PRODUCT STATUS
        ================================================== */}
        <span
          className={`
            absolute
            left-4
            top-4
            inline-flex
            items-center
            gap-1.5
            rounded-full
            px-3
            py-1.5
            text-xs
            font-semibold
            shadow-sm
            backdrop-blur-sm

            ${
              isComingSoon
                ? "bg-white/90 text-orange-600"
                : "bg-green-700 text-white"
            }
          `}
        >
          {isComingSoon ? (
            <>
              <Clock3 size={13} />
              Coming Soon
            </>
          ) : (
            <>
              <CheckCircle2 size={13} />
              Available
            </>
          )}
        </span>
      </Link>

      {/* =====================================================
          PRODUCT CONTENT
      ====================================================== */}
      <div className="flex flex-1 flex-col p-5">

        {/* Category */}
        <p
          className="
            mb-2
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-green-700
          "
        >
          {product.category}
        </p>

        {/* =================================================
            PRODUCT NAME
        ================================================== */}
        <Link
          to={`/all-products/${product.slug}`}
          className="block"
        >
          <h3
            className="
              text-lg
              font-semibold
              leading-snug
              text-gray-900
              transition-colors
              duration-200
              group-hover:text-green-700
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* =================================================
            SHORT DESCRIPTION
        ================================================== */}
        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            leading-6
            text-gray-500
          "
        >
          {product.shortDescription}
        </p>

        {/* =================================================
            PACK SIZES
        ================================================== */}
        {packSizes.length > 0 && (
          <div className="mt-4">

            <div
              className="
                mb-2
                flex
                items-center
                gap-1.5
                text-xs
                font-medium
                text-gray-500
              "
            >
              <Package size={14} />
              Available Sizes
            </div>

            <div className="flex flex-wrap gap-2">
              {packSizes.slice(0, 3).map((size) => (
                <span
                  key={size}
                  className="
                    rounded-md
                    bg-gray-50
                    px-2.5
                    py-1
                    text-xs
                    font-medium
                    text-gray-600
                    transition-colors
                    group-hover:bg-green-50
                    group-hover:text-green-700
                  "
                >
                  {size}
                </span>
              ))}

              {/* More sizes indicator */}
              {packSizes.length > 3 && (
                <span
                  className="
                    rounded-md
                    bg-gray-50
                    px-2.5
                    py-1
                    text-xs
                    font-medium
                    text-gray-500
                  "
                >
                  +{packSizes.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* =================================================
            VIEW DETAILS
        ================================================== */}
        <div className="mt-auto pt-5">

          <Link
            to={`/all-products/${product.slug}`}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-green-700
              transition-all
              duration-200
              hover:gap-3
            "
          >
            View Details

            <ArrowRight
              size={16}
              className="transition-transform duration-200"
            />
          </Link>

        </div>
      </div>
    </article>
  );
};

export default ProductCard;

