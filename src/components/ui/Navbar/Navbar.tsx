import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="">
      {/* Top Bar */}
      <div className="container mx-auto flex justify-between items-center py-3 text-sm">
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Order Tracking
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            FAQs
          </a>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="container mx-auto flex justify-between items-center py-1 flex-wrap">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/FDnCPmH/pngwing-com-25.png"
            alt="Camping"
            className="size-16 mr-4"
          />
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded"
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
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="ml-4 px-4 py-2 border rounded w-64"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            <FaSearch size={28} />
          </button>
        </div>
        <div className="flex items-center space-x-4 mt-3 lg:mt-0">
          <CgProfile size={28} />
          <FaRegHeart size={28} />
          <IoCartOutline size={28} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
