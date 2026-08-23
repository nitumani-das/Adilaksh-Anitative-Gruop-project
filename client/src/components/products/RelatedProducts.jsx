import ProductCard from "./ProductCard";

const RelatedProducts = ({ products }) => {
  if (!products.length) {
    return null;
  }

  return (
    <section className="border-t border-gray-100 py-16">

      <div className="mb-8">

        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
          You May Also Like
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          Related Products
        </h2>

      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedProducts;