import { Tooltip } from "antd";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import Button from "../../Re-useable/Button";
import { ICard } from "../../../types/card.type";
import { useNavigate } from "react-router-dom";
import { discountPrice } from "../../../utils/discountPrice";
import { handleAddToCart } from "../../../utils/addToCartFn";
import toast from "react-hot-toast";
import { TCartData } from "../../../types/addToCart.type";
import { availableProduct, TProduct } from "../../../types/products.type";
import { useAppDispatch } from "../../../Redux/hook";
import { addToCartAction } from "../../../Redux/Features/AddToCart/addToCart.slice";

const Card = ({ showBuyButton, item }: ICard) => {
  const updateAddToCart = useAppDispatch();
  const [hoverOption, setHoverOption] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setHoverOption(true);
  };

  const handleMouseLeave = () => {
    setHoverOption(false);
  };

  const clickDetailsPage = (id: string) => {
    navigate(`/product-details/${id}`);
  };

  const handleAddToCartButton = (data: Partial<TCartData>) => {
    const result = handleAddToCart(data);
    if (result?.status === true) {
      toast.success(result?.message);
    } else {
      toast?.error(result?.message);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden ">
      {/* main div  */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
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
                  onClick={() => clickDetailsPage(item?._id as string)}
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
                <FaRegHeart size={38} className="text-white" />
              </Tooltip>

              {/* add to cart  */}
              <Tooltip
                className="hover:cursor-pointer  "
                title="Add To Cart"
                color={"#2e5b3d"}
                placement="bottom"
              >
                <IoCartOutline
                  onClick={() => {
                    if (item?.availability === availableProduct.STOCKOUT) {
                      toast.error("This Product Stock Out 😢");
                    } else {
                      handleAddToCartButton({
                        _id: item?._id,
                        image: item?.image?.[0],
                        buyQuantity: 1,
                        name: item?.name,
                        price: discountPrice(item?.price, item?.discount),
                        quantity: item?.quantity,
                      });
                    }
                    updateAddToCart(addToCartAction({}));
                  }}
                  size={38}
                  className="text-white"
                />
              </Tooltip>
            </div>
          </div>
        )}

        {/* discount  */}
        {item?.discount !== undefined && item?.discount > 0 && (
          <div className="absolute bg-secondary text-white top-5 py-1 px-2 text-sm rounded-r-full">
            <p>Save: {item?.discount}৳</p>
          </div>
        )}
        <br />
        <br />
        {/* img div  */}
        <div className="flex justify-center items-center p-4 hover:cursor-pointer">
          <img
            className="object-contain h-32 w-40"
            src={item?.image?.[0] as string}
            alt="Product image"
          />
        </div>

        {/* description div  */}
        <div className="px-3 text-sm ">
          <span>
            <span className="font-bold">Name</span>: {item?.name?.slice(0, 30)}
          </span>

          <div className="flex justify-between items-center my-3">
            <p>
              <span className="font-bold">Available:</span>
              {item?.availability === "inStock" && (
                <span className="text-secondary"> In Stock</span>
              )}
              {item?.availability === "upcoming" && (
                <span className="text-black"> Upcoming</span>
              )}
              {item?.availability === "pre-order" && (
                <span className="text-balance"> Pre Order</span>
              )}
              {item?.availability === "stock-out" && (
                <span className="text-red-600"> Stock-Out</span>
              )}
            </p>
            <p>
              <span className="font-bold">Orders:</span> {item?.order}{" "}
            </p>
          </div>

          <p
            onClick={() => clickDetailsPage(item?._id as string)}
            className="font-semibold mt-3 hover:underline hover:text-primary hover:cursor-pointer "
          >
            {item?.title?.slice(0, 50)}
          </p>
        </div>

        {/* price div  */}
        <div className="my-3 p-3 flex  items-center gap-2 ">
          {/* real price  */}
          <p className="font-bold text-2xl text-primary">
            {" "}
            {discountPrice(item?.price, item?.discount)}৳
          </p>
          {item?.discount && (
            <p className="text-gray-500 line-through">
              {item?.price as number}৳
            </p>
          )}
        </div>
      </div>

      {/* buy button div  */}
      {showBuyButton && (
        <div className="p-3">
          <Button item={item as TProduct} name="Buy Now" />
        </div>
      )}
    </div>
  );
};

export default Card;
