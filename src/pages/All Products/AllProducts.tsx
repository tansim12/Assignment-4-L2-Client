import { FaFilter } from "react-icons/fa";
import SearchSystem from "../../components/Re-useable/SearchSystem";
import LeftSideFilter from "../../components/ui/LeftSide Filter/LeftSideFilter";
import Card from "../../components/ui/Product Card/Card";
import {  Drawer } from "antd";
import { useState } from "react";

const AllProducts = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* search bar and filter handle  */}
      <div className="border border-black h-20 flex justify-between items-center px-3 rounded-lg ">
        <div onClick={showDrawer} className=" cursor-pointer block md:hidden">
          <div className="flex justify-center items-center gap-2">
            <FaFilter /> Filter
          </div>
        </div>
        <div>
          <SearchSystem />
        </div>
        <div>sorting</div>
      </div>

      {/* filter and card div  */}
      <div className="my-10 flex gap-4 ">
        {/* filter div  */}
        <div className="basis-1/4 hidden md:block">
          <LeftSideFilter />
        </div>

        {/* card div  */}
        <div className="md:basis-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 ">
            <Card showBuyButton={true} />

            <Card showBuyButton={true} />

            <Card showBuyButton={true} />

            <Card showBuyButton={true} />

            <Card showBuyButton={true} />

            <Card showBuyButton={true} />

            <Card showBuyButton={true} />

            <Card showBuyButton={true} />

            <Card showBuyButton={true} />
          </div>
        </div>
      </div>

      {/* Drawer div  */}
      <div>
        <Drawer
          title="Filter Products"
          placement={"right"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"right"}
        >
          <LeftSideFilter />
        </Drawer>
      </div>
    </div>
  );
};

export default AllProducts;
