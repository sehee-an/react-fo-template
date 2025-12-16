import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../utils/api";
import { Product } from "../types/product";
import Skeleton from "../components/ui/Skeleton";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const { id } = useParams();
  const productId = Number(id);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        const found = res.find((item) => item.id === productId);

        if (!found) {
          setError("Product not found");
        } else {
          setProduct(found);
        }
      })
      .catch(() => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [productId]);

  // 로딩 Skeleton
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <Skeleton className="w-full h-64 mb-6" />
        <Skeleton className="h-8 w-1/2 mb-4" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-5/6 mb-2" />
        <Skeleton className="h-5 w-2/3" />
      </div>
    );
  }

  // 에러 처리
  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (!product) return null;

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>

      <p className="text-gray-700 mb-4">{product.description}</p>

      <p className="text-blue-600 text-xl font-bold mb-6">
        {product.price.toLocaleString()}원
      </p>

      <Button>Buy Now</Button>
    </div>
  );
}
