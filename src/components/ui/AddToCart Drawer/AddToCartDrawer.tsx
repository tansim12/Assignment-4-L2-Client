import { useState } from "react";
import { Drawer } from "antd";
import { IoCartOutline } from "react-icons/io5";
import AddToCart from "./AddToCart";

const AddToCartDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showDrawer}>
        {" "}
        <IoCartOutline size={28} />
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
        <AddToCart />
      </Drawer>
    </>
  );
};

export default AddToCartDrawer;
