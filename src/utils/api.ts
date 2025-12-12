import { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("/src/mock/products.json");
  if (!response.ok) {
    throw new Error("Failed to load products");
  }
  return response.json();
}
