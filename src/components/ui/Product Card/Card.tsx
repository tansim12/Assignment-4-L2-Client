import { Tooltip } from "antd";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";

const Card = () => {
  const [hoverOption, setHoverOption] = useState(false);

  const handleMouseEnter = () => {
    setHoverOption(true);
  };

  const handleMouseLeave = () => {
    setHoverOption(false);
  };

  console.log(hoverOption);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white shadow-lg rounded-lg overflow-hidden "
    >
      {/* main div  */}
      <div className="relative">
        {/* is hover div  */}

        {hoverOption && (
          <div className="absolute top-0 flex items-center justify-center bg-black  h-[50%] w-[100%]  opacity-50 rounded-b-full">
            <div className=" text-white flex items-center justify-center gap-3  my-auto ">
                {/* details */}
              <Tooltip
                className="hover:cursor-pointer  "
                title="Details"
                color={"#2e5b3d"}
                placement="bottom"
              >
                <TbListDetails
                  size={38}
                 
                  className="text-white"
                />
              </Tooltip>

              {/* wishlist */}
              <Tooltip
                className="hover:cursor-pointer  "
                title="Wishlist"
                color={"#2e5b3d"}
                placement="bottom"
              >
                <FaRegHeart
                  size={38}
                 
                  className="text-white"
                />
              </Tooltip>

              {/* add to cart  */}
              <Tooltip
                className="hover:cursor-pointer  "
                title="Add To Cart"
                color={"#2e5b3d"}
                placement="bottom"
              >
                <IoCartOutline
                  size={38}
                  className="text-white"
                />
              </Tooltip>
            </div>
          </div>
        )}

        {/* discount  */}
        <div className="absolute bg-secondary text-white top-5 py-1 px-2 text-sm rounded-r-full">
          <p>Save: 3000৳</p>
        </div>
        <br />
        <br />
        {/* img div  */}
        <div className="flex justify-center items-center p-4 lg:p-8 hover:cursor-pointer">
          <img
            className="object-cover "
            src="https://i.ibb.co/xjW4tkM/Silver.png"
            alt=""
          />
        </div>

        {/* description div  */}
        <div className="px-3 hover:underline hover:text-primary hover:cursor-pointer">
          <p className="font-semibold ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. regfg{" "}
          </p>
        </div>

        {/* price div  */}
        <div className="my-3 p-3 flex  items-center gap-4">
          {/* real price  */}
          <p className="font-bold text-2xl text-primary">27,000৳</p>
          <p className="text-gray-500 line-through">57,000৳</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
