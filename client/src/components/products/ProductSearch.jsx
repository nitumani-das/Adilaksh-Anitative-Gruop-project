import { Search, X } from "lucide-react";

const ProductSearch = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-11 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default ProductSearch;