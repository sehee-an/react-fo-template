import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/components/layout/MainLayout";

import Home from "~/pages/Home";
import Products from "~/pages/Products";
import ProductDetail from "~/pages/ProductDetail";
import Login from "~/pages/Login";
import MyPage from "~/pages/MyPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {index: true, element: <Home />},
      {path: "products", element: <Products />},
      {path: "product/:id", element: <ProductDetail />},
      {path: "login", element: <Login />},
      {path: "mypage", element: <MyPage />},
    ],
  },
]);