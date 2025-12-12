import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import { Product } from "../types/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
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
          </div>
        ))}
      </div>
    </div>
  );
}
