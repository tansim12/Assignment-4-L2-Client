import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const AllProductManagement = () => {
  const data = [
    {
      _id: "1",
      name: "Product A",
      category: "AAA",
      title:
        "Amazing Product A with a very long title that needs to be shortened",
      image: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      price: 29,
      discount: 5,
      availability: "inStock",
      type: "Type A",
      color: ["Red", "Blue"],
      quantity: 10,
      isDelete: false,
      order: 100,
    },
    {
      _id: "2",
      name: "Product A",
      category: "AAA",
      title:
        "Amazing Product A with a very long title that needs to be shortened",
      image: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      price: 29,
      discount: 5,
      availability: "inStock",
      type: "Type A",
      color: ["Red", "Blue"],
      quantity: 10,
      isDelete: false,
      order: 100,
    },
    {
      _id: "3",
      name: "Product A",
      category: "AAA",
      title:
        "Amazing Product A with a very long title that needs to be shortened",
      image: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      price: 29,
      discount: 5,
      availability: "inStock",
      type: "Type A",
      color: ["Red", "Blue"],
      quantity: 10,
      isDelete: false,
      order: 100,
    },
    // Add more product objects as needed
  ];

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (images:string) => (
        <img
          src={images[0]}
          alt="Product"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
      //   responsive: ['md'],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      //   responsive: ['md'],
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      //   responsive: ['md'],
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text:string) => (
        <span>{text.length > 30 ? `${text.slice(0, 30)}...` : text}</span>
      ),
      //   responsive: ['lg'],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      //   responsive: ['md'],
      render: (text:number) => `$${text}`,
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      responsive: ["md"],
      render: (text:string) => `${text}%`,
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      //   responsive: ['md'],
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      //   responsive: ['lg'],
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      render: (colors:string[]) => colors.join(", "),
      //   responsive: ['lg'],
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      //   responsive: ['md'],
    },
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
      //   responsive: ['md'],
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record?._id)}
          >
            Edit
          </Button>
          <Button
            type="primary" danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record?._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (record) => {
    console.log("Edit", record);
    // Add your edit logic here
  };

  const handleDelete = (key) => {
    console.log("Delete", key);
    // Add your delete logic here
  };

  return (
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "100%" }} // Ensures responsiveness
        className="w-full border"
        bordered={true}
      />
    </div>
  );
};

export default AllProductManagement;

// import React, { useEffect, useState } from 'react';
// import { Table, Button, Pagination } from 'antd';
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import axios from 'axios';

// interface Product {
//   name: string;
//   category: string;
//   title: string;
//   image: string[];
//   price: number;
//   discount: number;
//   availability: string;
//   type: string;
//   color: string[];
//   quantity: number;
//   isDelete: boolean;
//   order: number;
//   createdAt: string;
// }

// const ProductsTable: React.FC = () => {
//   const [data, setData] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);

//   const fetchProducts = async (page: number, limit: number) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`/api/products?page=${page}&limit=${limit}`);
//       setData(response.data.products);
//       setTotalItems(response.data.totalItems);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(currentPage, 10);
//   }, [currentPage]);

//   const handleEdit = (record: Product) => {
//     console.log('Edit:', record);
//   };

//   const handleDelete = (record: Product) => {
//     console.log('Delete:', record);
//   };

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Category',
//       dataIndex: 'category',
//       key: 'category',
//     },
//     {
//       title: 'Title',
//       dataIndex: 'title',
//       key: 'title',
//     },
//     {
//       title: 'Price',
//       dataIndex: 'price',
//       key: 'price',
//       render: (price: number) => `$${price.toFixed(2)}`,
//     },
//     {
//       title: 'Discount',
//       dataIndex: 'discount',
//       key: 'discount',
//       render: (discount: number) => `${discount}%`,
//     },
//     {
//       title: 'Availability',
//       dataIndex: 'availability',
//       key: 'availability',
//     },
//     {
//       title: 'Quantity',
//       dataIndex: 'quantity',
//       key: 'quantity',
//     },
//     {
//       title: 'Created At',
//       dataIndex: 'createdAt',
//       key: 'createdAt',
//       render: (createdAt: string) => new Date(createdAt).toLocaleDateString(),
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_: any, record: Product) => (
//         <div className="flex gap-2">
//           <Button onClick={() => handleEdit(record)} icon={<EditOutlined />} />
//           <Button onClick={() => handleDelete(record)} danger icon={<DeleteOutlined />} />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <Table
//         columns={columns}
//         dataSource={data}
//         rowKey="name"
//         loading={loading}
//         pagination={false}
//         responsiv
//       />
//       <Pagination
//         className="mt-4"
//         current={currentPage}
//         pageSize={10}
//         total={totalItems}
//         onChange={(page) => setCurrentPage(page)}
//       />
//     </div>
//   );
// };

// export default ProductsTable;
