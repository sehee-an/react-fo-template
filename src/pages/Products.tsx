import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import { Product } from "../types/product";
import Skeleton from "../components/ui/Skeleton";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  // Loading Skeleton
  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-6">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="p-4 border rounded-lg bg-white shadow-sm">
              <Skeleton className="w-full h-48 mb-4" />
              <Skeleton className="h-5 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error handling
  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  const filteredProducts = products
  .filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <input 
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full sm:w-64"
        />
        <select 
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border px-3 py-2 rounded w-full sm:w-40"
      >
        <option value="">Sort</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded w-full h-48 object-cover mb-4"
            />
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600 text-sm">{p.description}</p>
            <p className="text-blue-600 font-semibold mt-2">
              {p.price.toLocaleString()}원
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
