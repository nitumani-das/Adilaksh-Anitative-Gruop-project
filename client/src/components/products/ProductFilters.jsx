const ProductFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
}) => {
  return (
    <div className="space-y-6">

      {/* Categories */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Categories
        </h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active =
              selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Availability
        </h3>

        <div className="flex flex-wrap gap-2">

          <button
            type="button"
            onClick={() => setSelectedStatus("All")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedStatus === "All"
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            All
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedStatus("available")
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedStatus === "available"
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Available
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedStatus("coming-soon")
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedStatus === "coming-soon"
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Coming Soon
          </button>

        </div>
      </div>

    </div>
  );
};

export default ProductFilters;