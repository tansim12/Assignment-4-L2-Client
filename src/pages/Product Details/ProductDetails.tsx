import { Tabs, Rate, InputNumber, Button } from "antd";
import "./productDetails.css"; // Import custom CSS for the component
import ProductSlider from "./ProductSlider";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../Redux/Features/Admin Products/adminProductsApi";
import { useEffect, useState } from "react";
import { availableProduct, TProduct } from "../../types/products.type";
import { discountPrice } from "../../utils/discountPrice";
import { handleAddToCart } from "../../utils/addToCartFn";
import { TCartData } from "../../types/addToCart.type";
import toast from "react-hot-toast";

const { TabPane } = Tabs;

const ProductDetails = () => {
  const [productData, setProductData] = useState<Partial<TProduct>>({});
  const { id } = useParams();
  const { data } = useGetOneProductQuery(id);
  useEffect(() => {
    if (data?.data) {
      setProductData(data?.data);
    }
  }, [data?.data]);

  const navigate = useNavigate();
  const handleCheckOut = (id: string) => {
    navigate(`/checkout/${id}`);
  };

  const [buyQuantity, setBuyQuantity] = useState(1);
  const handleAddToCartButton = (data: Partial<TCartData>) => {
    const result = handleAddToCart(data);
    if (result?.status === true) {
      toast.success(result?.message);
    } else {
      toast?.error(result?.message);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* img section div left side */}
        <div className="">
          <ProductSlider slides={productData?.image as string[]} />
        </div>
        {/* details div right side  */}
        <div className="">
          <h1 className="text-2xl font-bold">{productData?.title}</h1>
          <div className="flex items-center mt-2">
            <Rate disabled defaultValue={5} value={productData?.rating} />
            <span className="ml-2 text-gray-600">
              ({productData?.order} orders)
            </span>
            {productData?.availability === availableProduct?.INSTOCK && (
              <span className="ml-2 text-green-600">In stock</span>
            )}
            {productData?.availability === availableProduct?.UPCOMING && (
              <span className="ml-2 text-green-600">Up coming</span>
            )}
            {productData?.availability === availableProduct?.PREORDER && (
              <span className="ml-2 text-green-600">Pre Order</span>
            )}
            {productData?.availability === availableProduct?.STOCKOUT && (
              <span className="ml-2 text-red-600">Stock Out</span>
            )}
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">
              {discountPrice(productData?.price, productData?.discount)}৳
            </span>
            <span className="text-gray-600"> / per item</span>
          </div>
          <p className="mt-4 text-gray-700">
            {productData?.title?.slice(0, 100)} <br />{" "}
            <span>{productData?.shortDescription?.slice(0, 300)}</span>
          </p>
          <div className="mt-4">
            {/* category  */}
            <div className="flex items-center mb-2">
              <span className="w-24 font-semibold">Category:</span>
              <span>{productData?.category}</span>
            </div>
            {/* type  */}
            <div className="flex items-center mb-2">
              <span className="w-24 font-semibold ">Type:</span>
              <span>{productData?.type}</span>
            </div>
            {/* color  */}
            <div className="flex items-center mb-2">
              <span className="w-24 font-semibold ">Color:</span>
              {productData?.color?.length &&
                productData?.color?.map((item) => (
                  <span key={item}>{item}, </span>
                ))}
            </div>
            {/* material  */}
            <div className="flex items-center mb-2">
              <span className="w-24 font-semibold ">Material:</span>
              <span>{productData?.materials}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="w-24 font-semibold">Brand:</span>
              <span>Reebok</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-1">
              <span className="w-24">Quantity:</span>
              <InputNumber
                onChange={(e) => setBuyQuantity(e as number)}
                min={1}
                defaultValue={1}
              />
            </div>
            <p>
              {buyQuantity > (productData?.quantity as number) && (
                <span className="text-red-600">
                  This product quantity out of Stock {productData?.quantity}{" "}
                </span>
              )}
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <Button onClick={() => handleCheckOut("1")} type="primary">
              Buy Now
            </Button>
            <Button
              onClick={() =>
                handleAddToCartButton({
                  _id: productData?._id,
                  image: productData?.image?.[0],
                  buyQuantity: buyQuantity,
                  name: productData?.name,
                  price: discountPrice(
                    productData?.price,
                    productData?.discount
                  ),
                  quantity: productData?.quantity,
                })
              }
            >
              Add to Cart
            </Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Details" key="1">
            <div>
              {productData?.description &&
                productData.description.map((item, i) => (
                  <div
                    className="my-3"
                    key={i}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
            </div>
          </TabPane>
          <TabPane tab="Specification" key="2">
            <p>{productData?.specification && productData?.specification}</p>
          </TabPane>
          <TabPane tab="Shipping Info" key="3">
            <p>{productData?.shoppingInfo && productData?.shoppingInfo}</p>
          </TabPane>
          <TabPane tab="Seller Profile" key="4">
            <p>Coming Soon ..... 😢</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
