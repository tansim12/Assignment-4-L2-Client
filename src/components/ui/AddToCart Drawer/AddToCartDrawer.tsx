import { useState } from "react";
import { Drawer } from "antd";
import { IoCartOutline } from "react-icons/io5";
import AddToCart from "./AddToCart";
import { TCartData } from "../../../types/addToCart.type";

const AddToCartDrawer = ({
  totalCarts,
  setRefetchCartData,
  refetchCartData,getCartData
}: {
  totalCarts: number;
  refetchCartData: boolean;
  setRefetchCartData: React.Dispatch<React.SetStateAction<boolean>>;
  getCartData:TCartData[]
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="relative"
        onClick={() => {
          showDrawer();
        }}
      >
        <span className="absolute text-white text-sm px-1 bg-red-600 rounded-full">
          {totalCarts ? totalCarts : 0}
        </span>{" "}
        <IoCartOutline size={32} />
      </button>

      <Drawer
        width={420}
        title="YOUR CART"
        headerStyle={{
          backgroundColor: "#001529", // Dark background for the header
          color: "#fff", // White text color
          borderBottom: "1px solid #f0f0f0", // Optional border bottom
          padding: "16px 24px", // Adjust padding if needed
          fontSize: "16px", // Adjust font size
          fontWeight: "bold", // Bold text
        }}
        onClose={onClose}
        open={open}
      >
        <AddToCart
          checkOutPage={false}
          refetchCartData={refetchCartData}
          setRefetchCartData={setRefetchCartData}
        />
      </Drawer>
    </>
  );
};

export default AddToCartDrawer;
