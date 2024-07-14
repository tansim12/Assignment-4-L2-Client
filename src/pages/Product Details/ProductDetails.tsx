

import { Tabs, Rate, InputNumber, Button, Select } from 'antd';
import './productDetails.css'; // Import custom CSS for the component
import ProductSlider from './ProductSlider';

const { TabPane } = Tabs;
const { Option } = Select;

const ProductDetails = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* img section div left side */}
        <div className="">
         <ProductSlider />
        </div>
        {/* details div right side  */}
        <div className="">
          <h1 className="text-2xl font-bold">Quality Men's Hoodie for Winter, Men's Fashion Casual Hoodie</h1>
          <div className="flex items-center mt-2">
            <Rate disabled defaultValue={4.5} />
            <span className="ml-2 text-gray-600">(154 orders)</span>
            <span className="ml-2 text-green-600">In stock</span>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold">$75.00</span>
            <span className="text-gray-600"> / per box</span>
          </div>
          <p className="mt-4 text-gray-700">
            Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the
            conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.
          </p>
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <span className="w-24">Type:</span>
              <span>Regular</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-24">Color:</span>
              <span>Brown</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-24">Material:</span>
              <span>Cotton, Jeans</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-24">Brand:</span>
              <span>Reebok</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <span className="w-24">Size:</span>
              <Select defaultValue="Small" className="w-32">
                <Option value="Small">Small</Option>
                <Option value="Medium">Medium</Option>
                <Option value="Large">Large</Option>
                <Option value="X-Large">X-Large</Option>
              </Select>
            </div>
            <div className="flex items-center mb-4">
              <span className="w-24">Quantity:</span>
              <InputNumber min={1} max={100} defaultValue={14} />
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <Button type="primary">Buy Now</Button>
            <Button>Add to Cart</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Specification" key="1">
            <p>With supporting text below as a natural lead-in to additional content...</p>
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
                <strong>Processor capacity:</strong> 2.3GHz dual-core Intel Core i5
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
