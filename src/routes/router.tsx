import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home Page/HomePage";
import NoFoundPage from "../pages/No Found/NoFoundPage";
import AllProducts from "../pages/All Products/AllProducts";
import ProductDetails from "../pages/Product Details/ProductDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import ProductManagement from "../pages/Product Management/ProductManagement";
import AboutUs from "../pages/About Us/AboutUs";

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
      {
        path:"checkout/:id",
        element: <CheckOut />,
      },
      {
        path:"product-management",
        element: <ProductManagement />,
      },
      {
        path:"about",
        element: <AboutUs />,
      },
    ],
  },
]);
