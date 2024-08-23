/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Title from "../../Re-useable/Title";
import Card from "../Product Card/Card";
import TitleTopAnimation from "./TitleTopAnimation";
import { TQueryObj } from "../../../types/quearyFilter.type";
import { useGetAllProductsQuery } from "../../../Redux/Features/All Products/allProductsApi";
import { TProduct } from "../../../types/products.type";

const BestSelling = () => {
  const [queryObj, setQueryObj] = useState<TQueryObj>({
    limit: 10,
    fields:
      "-shoppingInfo,-specification,-materials,-brand,-rating,-description,-sellerProfile,-isDelete,-materials,-color,-type,-band,-shortDescription,-category",
    page: 1,
    sort: "-order",
  });

  const { data } = useGetAllProductsQuery(queryObj);


  return (
    <div className="my-10">
      {/* title section  */}
      <div>
        <Title mainText="Best Selling">
          <TitleTopAnimation />{" "}
        </Title>
      </div>

      {/* card div  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {data?.data?.result?.length &&
          data?.data?.result?.map((item: Partial<TProduct>) => (
            <Card key={item?._id} item={item} showBuyButton={true} />
          ))}
      </div>
    </div>
  );
};

export default BestSelling;
