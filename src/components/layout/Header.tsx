import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-xl font-semibold">SHOP</h1>
        </Link>

        <nav className="flex items-center gap-4 text-gray-700 text-sm">
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
          <Link to="/mypage" className="hover:text-blue-600">Mypage</Link>
        </nav>
      </div>
    </header>
  );
}
