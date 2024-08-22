import { useState } from "react";
import Title from "../../Re-useable/Title";
import Card from "../Product Card/Card";
import { TQueryObj } from "../../../types/quearyFilter.type";
import { useGetAllProductsQuery } from "../../../Redux/Features/All Products/allProductsApi";
import { TProduct } from "../../../types/products.type";

const FeaturedProduct = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queryObj, setQueryObj] = useState<TQueryObj>({
    limit: 10,
    fields:
      "-shoppingInfo,-specification,-materials,-brand,-rating,-description,-sellerProfile,-isDelete,-quantity,-materials,-color,-band,-shortDescription",
    page: 1,
    type: "Featured",
  });

  const { data } = useGetAllProductsQuery(queryObj);

  return (
    <div className="my-10">
      {/* title div  */}
      <div>
        <Title
          mainText="Featured Products"
          additionalText="Show a few highlighted products with a button to view the details page"
        />
      </div>

      {/* card div  */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data?.data?.result?.length &&
          data?.data?.result?.map((item: Partial<TProduct>) => (
            <Card item={item} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
