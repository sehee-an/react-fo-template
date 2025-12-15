import { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("/mock/products.json");

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const data = await response.json();

  // Skeleton UI 보이도록 1초 지연
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}
