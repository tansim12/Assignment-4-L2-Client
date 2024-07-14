import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home Page/HomePage";
import NoFoundPage from "../pages/No Found/NoFoundPage";
import AllProducts from "../pages/All Products/AllProducts";
import ProductDetails from "../pages/Product Details/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<NoFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"all-products",
        element: <AllProducts />,
      },
      {
        path:"product-details/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
