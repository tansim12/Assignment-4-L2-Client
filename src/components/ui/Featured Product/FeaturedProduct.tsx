import { useState } from "react";
import Title from "../../Re-useable/Title";
import Card from "../Product Card/Card";
import { TQueryObj } from "../../../types/quearyFilter.type";
import { useGetAllProductsQuery } from "../../../Redux/Features/All Products/allProductsApi";
import { TProduct } from "../../../types/products.type";
import ProductSkeleton from "../Skeleton/ProductSkeleton";

const FeaturedProduct = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queryObj, setQueryObj] = useState<TQueryObj>({
    limit: 10,
    fields:
      "-shoppingInfo,-specification,-materials,-brand,-rating,-description,-sellerProfile,-isDelete,-materials,-color,-band,-shortDescription",
    page: 1,
    type: "Featured",
  });
console.log(setQueryObj);

  const { data,isLoading } = useGetAllProductsQuery(queryObj);

  return (
    <div className="my-16 ">
      {/* title div  */}
      <div className="mb-10">
        <Title
          mainText="Featured Products"
          additionalText="Show a few highlighted products with a button to view the details page"
        />
      </div>

      {/* card div  */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {isLoading && [1, 2, 3,4].map((item) => <ProductSkeleton key={item} />)}
        {data?.data?.result?.length &&
          data?.data?.result?.map((item: Partial<TProduct>) => (
            <Card item={item} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
