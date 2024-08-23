import { FaFilter } from "react-icons/fa";
import SearchSystem from "../../components/Re-useable/SearchSystem";
import LeftSideFilter from "./LeftSideFilter";
import Card from "../../components/ui/Product Card/Card";
import { Drawer } from "antd";
import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../Redux/Features/All Products/allProductsApi";
import { TQueryObj } from "../../types/quearyFilter.type";
import { TProduct } from "../../types/products.type";
import NoDataFound from "../../components/ui/No Data Found/NoDataFound";
import { useAppSelector } from "../../Redux/hook";
import LoadingPage from "../Loading/LoadingPage";

const AllProducts = () => {
  const categoryFilterByHomePage = useAppSelector((s) => s.queryByCategory);
  const [open, setOpen] = useState(false);
  const [queryObj, setQueryObj] = useState<TQueryObj>({
    limit: 10,
    fields:
      "-shoppingInfo,-specification,-materials,-brand,-rating,-description,-shortDescription",
    page: 1,
  });

  
  useEffect(() => {
    if (categoryFilterByHomePage?.category?.category  !== "") {
      console.log("....");
      
      setQueryObj((prev) => ({
        ...prev,
        category: categoryFilterByHomePage?.category,
      }));
    }
  }, [categoryFilterByHomePage?.category]);

  const { data: productsData, isLoading } = useGetAllProductsQuery(queryObj);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value as "-price" | "price" | ""; // Type assertion
    setQueryObj((prev) => ({ ...prev, sort: newSort }));
  };
  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value as number; // Type assertion
    setQueryObj((prev) => ({ ...prev, limit: newLimit }));
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
          <SearchSystem setQueryObj={setQueryObj} />
        </div>
        <div className="flex flex-col gap-3">
          {/* sort div  */}
          <div>
            <select
              onChange={handleSortChange}
              value={queryObj.sort}
              style={{ width: "100%" }}
              className="font-bold border"
            >
              <option selected={true} value="">
                Sort
              </option>
              <option value="price">Low to High</option>
              <option value="-price">High to Low</option>
            </select>
            {/* Other components and filters */}
          </div>

          {/* page limit  */}

          <div>
            <select
              onChange={handleLimitChange}
              value={queryObj.limit}
              style={{ width: "100%" }}
              className="font-bold border"
            >
              <option selected={true} value={10}>
                10
              </option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
            {/* Other components and filters */}
          </div>
        </div>
      </div>

      {/* filter and card div  */}
      <div className="my-10 flex gap-4 ">
        {/* filter div  */}
        <div className="basis-1/4 hidden md:block">
          <LeftSideFilter setQueryObj={setQueryObj} />
        </div>

        {/* card div  */}
        <div className="md:basis-3/4">
         { !isLoading ?<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 ">
            {productsData?.data?.result?.length ? (
              productsData?.data?.result?.map((item: Partial<TProduct>) => (
                <Card key={item?._id} item={item} showBuyButton={true} />
              ))
            ) : (
              <div className="col-span-3">
                <NoDataFound />
              </div>
            )}
          </div>:<LoadingPage/>}
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
          <LeftSideFilter setQueryObj={setQueryObj} />
        </Drawer>
      </div>
    </div>
  );
};

export default AllProducts;
