import { formatPrice } from "~/utils/format";

export default function MyPage() {
  // 사용자 mock 데이터
  const user = {
    name: "Sehee An",
    email: "ash@example.com",
    joined: "2024-01-01",
  };

  // 주문 mock 데이터
  const orders = [
    { id: 1, product: "Product 02", price: 25900, date: "2025-10-11" },
    { id: 2, product: "Product 05", price: 32900, date: "2025-08-22" }
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6">My Page</h2>

      {/* 사용자 정보 */}
      <div className="bg-white border rounded-lg p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold mb-4">Profile</h3>
        <p className="mb-1"><strong>Name:</strong> {user.name}</p>
        <p className="mb-1"><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {user.joined}</p>
      </div>

      {/* 주문 목록 */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Order History</h3>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map(order => (
              <li
                key={order.id}
                className="p-4 border rounded-lg bg-gray-50"
              >
                <p><strong>Product:</strong> {order.product}</p>
                <p><strong>Date:</strong> {order.date}</p>
                <p><strong>Price:</strong> {formatPrice(order.price)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
