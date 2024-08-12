import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home Page/HomePage";
import NoFoundPage from "../pages/No Found/NoFoundPage";
import AllProducts from "../pages/All Products/AllProducts";
import ProductDetails from "../pages/Product Details/ProductDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import AboutUs from "../pages/About Us/AboutUs";
import DashboardLayout from "../Layout/Dashboard Layout/DashboardLayout";
import AllProductManagement from "../pages/All Product Management/AllProductManagement";
import CreateProducts from "../pages/Create Products/CreateProducts";
import UpdateProducts from "../pages/Update Products/UpdateProducts";
// import AdminDashboard from "../Layout/Admin Dashboard/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "checkout/:id",
        element: <CheckOut />,
      },

      {
        path: "about",
        element: <AboutUs />,
      },
    ],
  },

  {
    path: "admin",
    element: <DashboardLayout />,
    errorElement: <NoFoundPage />,
    children: [
      // {
      //   path: "dashboard",
      //   element: <AdminDashboard />,
      // },
      {
        path: "product-management",
        element: <AllProductManagement />,
      },
      {
        path: "all-products-management",
        element: <AllProductManagement />,
      },
      {
        path: "create-product",
        element: <CreateProducts />,
      },
      {
        path: "update-product",
        element: <UpdateProducts />,
      },
    ],
  },
]);
