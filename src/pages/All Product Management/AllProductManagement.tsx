import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useGetAllProductsQuery } from "../../Redux/Features/All Products/allProductsApi";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/products.type";

import { Pagination } from "antd";
import Swal from "sweetalert2";
import { useDeleteProductMutation } from "../../Redux/Features/Admin Products/adminProductsApi";

const AllProductManagement = () => {
  const [data, setData] = useState<TProduct[]>([]);
  const [queryObj, setQueryObj] = useState({
    limit: 10,
    fields:
      "-shoppingInfo,-specification,-materials,-brand,-rating,-description,-shortDescription",
    page: 1,
  });
  const { data: productsData } = useGetAllProductsQuery(queryObj);
  const [deleteProduct] = useDeleteProductMutation();
  useEffect(() => {
    if (productsData?.data?.result) {
      setData(productsData?.data?.result);
    }
  }, [productsData]);

  console.log(data);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (images: string) => (
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
      render: (text: string) => (
        <span>{text.length > 30 ? `${text.slice(0, 30)}...` : text}</span>
      ),
      //   responsive: ['lg'],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      //   responsive: ['md'],
      render: (text: number) => `$${text}`,
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      responsive: ["md"],
      render: (text: string) => `${text}%`,
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
      render: (colors: string[]) => colors.join(", "),
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
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => new Date(createdAt).toLocaleDateString(),
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
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record?._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  const handlePage = (currentPageNumber: number) => {
    setQueryObj({ ...queryObj, page: currentPageNumber });
  };

  const handleEdit = (id: string) => {
    console.log("Edit", id);
    // Add your edit logic here
  };

  const handleDelete = (id: string) => {
  const swalWithTailwindButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-5", // Add margin-right to confirm button
        cancelButton:
          "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded",
      },
      buttonsStyling: false, // Ensure custom classes are applied
    });

    swalWithTailwindButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteProduct(id).unwrap();
          if (res?.success) {
            swalWithTailwindButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithTailwindButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });

    // Add your delete logic here
  };

  return (
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "150%" }} // Ensures responsiveness
        className="w-full border"
        bordered={true}
      />

      <div className="my-20">
        <Pagination
          // size="small"
          total={1000}
          showSizeChanger
          showQuickJumper
          onChange={handlePage}
          align="center"
          responsive={true}
        />
      </div>
    </div>
  );
};

export default AllProductManagement;
