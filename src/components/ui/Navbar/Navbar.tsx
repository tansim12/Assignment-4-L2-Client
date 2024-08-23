import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SearchSystem from "../../Re-useable/SearchSystem";
import AddToCartDrawer from "../AddToCart Drawer/AddToCartDrawer";
import { useAppDispatch } from "../../../Redux/hook";
import { categoryQuery } from "../../../Redux/Features/Query Manage/queryCategory.slice";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const updateQueryCart = useAppDispatch();
  const [refetchCartData, setRefetchCartData] = useState(false);
  const getCartData = localStorage.getItem("addToCart")
  const totalCarts = JSON.parse(getCartData)?.length || 0

  return (
    <div>
      {/* Top Bar */}
      <div className="container mx-auto flex justify-between items-center py-3 text-sm">
        {/* todo its should be dynamic  */}
        <div className="flex items-center space-x-4  font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              updateQueryCart(categoryQuery({ category: "" }));
            }}
            to="/all-products"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black hover:text-primary"
            }
          >
            All Products
          </NavLink>
          <NavLink
            to="admin/all-products-management"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black hover:text-primary"
            }
          >
            Product Management
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-black hover:text-primary"
            }
          >
            About Us
          </NavLink>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="container mx-auto flex justify-between items-center py-1 flex-nowrap">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/FDnCPmH/pngwing-com-25.png"
            alt="Camping"
            className="size-16 mr-4"
          />
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded"
            >
              Categories
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Category 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Category 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Category 3
                </a>
              </div>
            )}
          </div>
          {/* search system  */}
          <SearchSystem />
        </div>
        <div className="flex items-center space-x-4 mt-3 lg:mt-0">
          <CgProfile size={28} />
          <FaRegHeart size={28} />
          <AddToCartDrawer
            totalCarts={totalCarts}
            refetchCartData={refetchCartData}
            setRefetchCartData={setRefetchCartData}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
