import { useState } from "react";

const PackSizeSelector = ({ packSizes }) => {
  const [selectedSize, setSelectedSize] =
    useState(packSizes[0]);

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-gray-900">
        Available Pack Sizes
      </h3>

      <div className="flex flex-wrap gap-3">

        {packSizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() =>
              setSelectedSize(size)
            }
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
              selectedSize === size
                ? "border-green-700 bg-green-700 text-white"
                : "border-gray-200 bg-white text-gray-700 hover:border-green-600"
            }`}
          >
            {size}
          </button>
        ))}

      </div>
    </div>
  );
};

export default PackSizeSelector;