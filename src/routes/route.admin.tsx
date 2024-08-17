
import AllProductManagement from "../pages/All Product Management/AllProductManagement";
import CreateProducts from "../pages/Create Products/CreateProducts";
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
