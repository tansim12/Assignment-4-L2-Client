// import AdminDashboard from "../Layout/Admin Dashboard/AdminDashboard";
// import ProductManagement from "../pages/Product Management/ProductManagement";
import AllProductManagement from "../pages/All Product Management/AllProductManagement";
import CreateProducts from "../pages/Create Products/CreateProducts";
import UpdateProducts from "../pages/Update Products/UpdateProducts";
import { IAccRoutes } from "../types/admin.types";
export const adminPath: IAccRoutes[] = [
  // {
  //   name: "Product Manage",
  //   path: "product-management",
  //   // feature this will be private route
  //   element: <ProductManagement />,
  // },
  {
    name: "Product Management",
    children: [
      {
        name: "All Products",
        path: "all-products-management",
        element: <AllProductManagement />,
      },
      {
        name: "Create Product",
        path: "create-product",
        element: <CreateProducts />,
      },
      {
        name: "Update Product",
        path: "update-product",
        element: <UpdateProducts />,
      },
    ],
    path: "",
    element: undefined,
  },

  //   এই ভাবে children add korte hobe
  //   {
  //     name: "User Management",
  //     children: [
  //       {
  //         name: "Create Admin",
  //         path: "create-admin",
  //         element: <CreateAdmin />,
  //       },
  //       {
  //         name: "Create Faculty",
  //         path: "create-faculty",
  //         element: <CreateFaculty />,
  //       },
  //       {
  //         name: "Create student",
  //         path: "create-student",
  //         element: <CreateStudent />,
  //       },
  //     ],
  //     path: "",
  //     element: undefined,
  //   },
];
