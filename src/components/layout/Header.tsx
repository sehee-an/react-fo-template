import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">MyProject</h1>

        <nav className="flex items-center gap-4 text-gray-700 text-sm">
          <Link to="#" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
        </nav>
      </div>
    </header>
  );
}
