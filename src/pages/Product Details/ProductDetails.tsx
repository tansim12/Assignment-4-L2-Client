import { Tabs, Rate, InputNumber, Button, Select } from "antd";
import "./productDetails.css"; // Import custom CSS for the component
import ProductSlider from "./ProductSlider";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProductQuery } from "../../Redux/Features/Admin Products/adminProductsApi";
import { useEffect, useState } from "react";
import { availableProduct, TProduct } from "../../types/products.type";
import { discountPrice } from "../../utils/discountPrice";

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

  console.log(productData);

  const navigate = useNavigate();
  const handleCheckOut = (id: string) => {
    navigate(`/checkout/${id}`);
  };

  const [buyQuantity, setBuyQuantity] = useState(1);
  console.log(buyQuantity);

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
            <Rate disabled defaultValue={productData?.rating} />
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
            <Button>Add to Cart</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Specification" key="1">
            <p>
              With supporting text below as a natural lead-in to additional
              content...
            </p>
            <ul className="list-disc ml-6">
              <li>Some great feature name here</li>
              <li>Easy fast and very good</li>
              <li>Some great feature name here</li>
              <li>Modern style and design</li>
              <li>Optical heart sensor</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <strong>Display:</strong> 13.3-inch LED-backlit display with IPS
              </div>
              <div>
                <strong>Processor capacity:</strong> 2.3GHz dual-core Intel Core
                i5
              </div>
              <div>
                <strong>Camera quality:</strong> 720p FaceTime HD camera
              </div>
              <div>
                <strong>Memory:</strong> 8 GB RAM or 16 GB RAM
              </div>
              <div>
                <strong>Graphics:</strong> Intel Iris Plus Graphics 640
              </div>
            </div>
          </TabPane>
          <TabPane tab="Warranty Info" key="2">
            <p>Details about warranty info...</p>
          </TabPane>
          <TabPane tab="Shipping Info" key="3">
            <p>Details about shipping info...</p>
          </TabPane>
          <TabPane tab="Seller Profile" key="4">
            <p>Details about seller profile...</p>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
