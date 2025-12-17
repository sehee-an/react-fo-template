import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import { Product } from "../types/product";
import Skeleton from "../components/ui/Skeleton";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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


  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
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
