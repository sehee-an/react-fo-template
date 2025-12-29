import { Link } from "react-router-dom";

export default function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      {items.map((item, idx) => (
        <span key={idx}>
          {item.to ? (
            <Link to={item.to} className="hover:text-blue-600">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-400">{item.label}</span>
          )}

          {idx < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
