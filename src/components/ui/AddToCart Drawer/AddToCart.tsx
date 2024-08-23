import React, { useEffect, useState } from "react";
import { TCartData } from "../../../types/addToCart.type";
import { MdDeleteForever } from "react-icons/md";
import { handleRemoveFromCart } from "../../../utils/addToCartFn";

const AddToCart = ({
  checkOutPage = false,
  refetchCartData,
  setRefetchCartData,
}: {
  checkOutPage: boolean;
  refetchCartData: boolean;
  setRefetchCartData: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cartItems, setCartItems] = useState<TCartData[]>([]);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("addToCart");
    setCartItems(JSON.parse(data));
  }, [refetchCartData]);

  const calculateSubtotal = () => {
    return cartItems?.reduce(
      (total, item) => total + item.price * item?.buyQuantity,
      0
    );
  };

  const handleQuantityChange = (_id, change) => {
    setCartItems((prevItems) =>
      prevItems?.map((item) =>
        item._id === _id
          ? {
              ...item,
              buyQuantity:
                item?.quantity > item?.buyQuantity
                  ? item?.buyQuantity + change > 0
                    ? item?.buyQuantity + change
                    : 1
                  : item?.quantity-1,
            }
          : item
      )
    );
  };

  const handlePromoCodeApply = () => {
    // Add logic to apply promo code
    alert(`This system coming soon`);
  };

  const handleDeleteCartData = (id: string) => {
    handleRemoveFromCart(id);
    setRefetchCartData((pre) => !pre);
  };
  return (
    <div className=" bg-white shadow-lg rounded-lg h-[84vh] relative ">
      {cartItems?.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center my-4  border-b-2 p-2 relative "
        >
          <button
            onClick={() => handleDeleteCartData(item?._id)}
            className="absolute top-0 left-0"
          >
            <MdDeleteForever size={25} color="#2b2b2b" />
          </button>
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-contain"
          />
          <div className="flex-1 ml-4">
            <p className="text-sm font-semibold">{item.name}</p>
            <div className="text-gray-500">
              {item.price}৳ × {item.buyQuantity} ={" "}
              {item.price * item.buyQuantity}৳
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={() => handleQuantityChange(item._id, 1)}
              className="bg-green-600 text-white px-2 py-1 font-bold rounded-md"
            >
              +
            </button>
            <button
              onClick={() => handleQuantityChange(item._id, -1)}
              className="bg-red-600 text-white px-2 py-1 font-bold rounded-md mt-1"
            >
              -
            </button>
          </div>
        </div>
      ))}

      <div
        className={`border-t pt-4  w-full  bottom-0 ${
          checkOutPage === false && "absolute"
        }`}
      >
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="border px-2 py-1 w-full rounded-l-md border-secondary border-r-0"
          />
          <button
            onClick={handlePromoCodeApply}
            className="bg-blue-500 text-white px-4 p-1.5 rounded-r-md"
          >
            Apply
          </button>
        </div>

        <div className="text-right mb-2 p-1">
          <span className="text-gray-700 flex justify-between items-center">
            <span>Sub-Total:</span> <span>{calculateSubtotal()}৳</span>
          </span>{" "}
          <br />
          <span className="text-black font-bold text-lg flex justify-between items-center">
            <span>Total:</span> <span>{calculateSubtotal()}৳</span>
          </span>{" "}
          <br />
        </div>

        <button className="bg-orange-600 text-white w-full py-2 rounded-md font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
