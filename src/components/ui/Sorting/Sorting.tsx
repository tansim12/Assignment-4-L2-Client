import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
const Sorting = () => {
  const handleMenuClick = (e) => {
    console.log(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="priceLowToHigh">Price Low to High</Menu.Item>
      <Menu.Item key="priceHighToLow">Price High to Low</Menu.Item>
      <Menu.Item key="newestFirst">Newest First</Menu.Item>
      <Menu.Item key="oldestFirst">Oldest First</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu} trigger={["hover"]}>
        <Button>
          Sort By <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Sorting;
