import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return <h2 className="text-2xl font-semibold">Product Detail — {id}</h2>;
}
