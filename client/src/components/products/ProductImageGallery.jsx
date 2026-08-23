import { useState } from "react";

const ProductImageGallery = ({ images, name }) => {
  const [activeImage, setActiveImage] =
    useState(0);

  return (
    <div className="space-y-4">

      {/* Main Image */}
      <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={images[activeImage]}
          alt={`${name} image ${activeImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">

          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() =>
                setActiveImage(index)
              }
              className={`aspect-square overflow-hidden rounded-xl border-2 transition ${
                activeImage === index
                  ? "border-green-700"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}

        </div>
      )}

    </div>
  );
};

export default ProductImageGallery;                    