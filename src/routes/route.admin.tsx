// import AdminDashboard from "../Layout/Admin Dashboard/AdminDashboard";
import ProductManagement from "../pages/Product Management/ProductManagement";
import { IAccRoutes } from "../types/admin.types";
export const adminPath: IAccRoutes[] = [
  //  feature will be added dashboard
  //   {
  //     name: "Dashboard",
  //     path: "dashboard",
  //     element: <AdminDashboard />,
  //   },
  {
    name: "Product Manage",
    path: "product-management",
    // feature this will be private route
    element: <ProductManagement />,
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


