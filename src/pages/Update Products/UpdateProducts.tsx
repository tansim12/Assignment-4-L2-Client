import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { TProduct } from "../../types/products.type";
import {
  allCategoryArray,
  productTypesArray,
} from "../../types/Const/product.const";
import {
  useGetOneProductQuery,
  useUpdateProductMutation,
} from "../../Redux/Features/Admin Products/adminProductsApi";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const UpdateProducts: React.FC = () => {
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState<TProduct | null>(null);
  const { id } = useParams();
  const { data } = useGetOneProductQuery(id);
  useEffect(() => {
    if (data?.data) {
      setUpdateData(data?.data);
    }
  }, [data?.data, updateData]);

  const [productUpdate] = useUpdateProductMutation();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset, // Import the reset method
  } = useForm<TProduct>({
    defaultValues: updateData || {}, // Initial default values
  });

  useEffect(() => {
    if (data?.data) {
      setUpdateData(data.data);
      reset(data.data); // Reset the form with the new data
    }
  }, [data, reset, updateData]);

  // Reuse the same logic for handling images, descriptions, and colors
  const {
    fields: imageFields,
    append: addImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: "image" as never,
  });

  const {
    fields: descriptionFields,
    append: addDescription,
    remove: removeDescription,
  } = useFieldArray({
    control,
    name: "description" as never,
  });

  const {
    fields: colorFields,
    append: addColor,
    remove: removeColor,
  } = useFieldArray({
    control,
    name: "color" as never,
  });

  const onSubmit = async (data: TProduct) => {
    console.log(data?.image);

    if (!imageFields?.length) {
      return toast.error("Image Fields Required");
    } else if (!descriptionFields?.length) {
      return toast.error("Description Fields Required");
    } else if (!colorFields?.length) {
      return toast.error("Color Fields Required");
    }
    const res = await productUpdate({ id, data }).unwrap();
    if (res?.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "product Update Successfully Done",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/admin/all-products-management");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-8 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Update Products</h2>

      <div className="flex gap-5 justify-around">
        {/* name  */}
        <div className="mb-4 w-full">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border border-black rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* category  */}
        <div className="mb-4 w-1/2">
          <label className="block text-gray-700 font-semibold mb-2">
            Category
          </label>
          <select
            {...register("category", {
              required: "Category is required",
            })}
            className="w-full p-2 border border-black rounded-md"
          >
            {allCategoryArray?.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>
      </div>
      {/* title  */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="w-full p-2 border border-black rounded-md"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* image  */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Images</label>
        {imageFields.map((field, index) => (
          <div key={field.id} className="flex items-center mb-2">
            <input
              {...register(`image.${index}`, {
                required: "Image URL is required",
              })}
              placeholder={`Image URL ${index + 1}`}
              className="w-full p-2 border border-black rounded-md"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="ml-2 text-red-500"
            >
              ✖
            </button>
          </div>
        ))}
        {errors.image &&
          (Array.isArray(errors.image) ? (
            errors.image.map((error, index) => (
              <p key={index} className="text-red-500 text-sm">
                {error?.message}
              </p>
            ))
          ) : (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          ))}
        <button
          type="button"
          onClick={() => addImage("")}
          className="text-blue-500 mt-2"
        >
          + Add Image
        </button>
      </div>

      {/* Short Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Short Description
        </label>
        <input
          {...register("shortDescription", {
            required: "Short Description is required",
          })}
          className="w-full p-2 border border-black rounded-md"
        />
        {errors.shortDescription && (
          <p className="text-red-500 text-sm">
            {errors.shortDescription.message}
          </p>
        )}
      </div>
      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        {descriptionFields.map((field, index) => (
          <div key={field.id} className=" flex gap-10 mb-12">
            <Controller
              control={control}
              name={`description.${index}`}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <ReactQuill
                  {...field}
                  className="w-full h-40 mb-2 border-black"
                />
              )}
            />
            <button
              type="button"
              onClick={() => removeDescription(index)}
              className="text-red-500"
            >
              ✖
            </button>
          </div>
        ))}

        {errors.description &&
          (Array.isArray(errors.description) ? (
            errors.description.map((error, index) => (
              <p key={index} className="text-red-500 text-sm">
                {error?.message}
              </p>
            ))
          ) : (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          ))}
        <button
          type="button"
          onClick={() => addDescription("")}
          className="text-blue-500 "
        >
          + Add Description
        </button>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Colors</label>
        {colorFields.map((field, index) => (
          <div key={field.id} className="flex items-center mb-2">
            <input
              {...register(`color.${index}`, { required: "Color is required" })}
              placeholder={`Color ${index + 1}`}
              className="w-full p-2 border border-black rounded-md"
            />
            <button
              type="button"
              onClick={() => removeColor(index)}
              className="ml-2 text-red-500"
            >
              ✖
            </button>
          </div>
        ))}
        {errors.color &&
          (Array.isArray(errors.color) ? (
            errors.color.map((error, index) => (
              <p key={index} className="text-red-500 text-sm">
                {error?.message}
              </p>
            ))
          ) : (
            <p className="text-red-500 text-sm">{errors.color.message}</p>
          ))}
        <button
          type="button"
          onClick={() => addColor("")}
          className="text-blue-500 mt-2"
        >
          + Add Color
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-2">
        {/* price  */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
            className="w-full p-2 border border-black rounded-md"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>
        {/* discount  */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Discount
          </label>
          <input
            type="number"
            {...register("discount", {
              required: "Discount is required",
              valueAsNumber: true,
            })}
            className="w-full p-2 border border-black rounded-md"
          />
          {errors.discount && (
            <p className="text-red-500 text-sm">{errors.discount.message}</p>
          )}
        </div>

        {/* rating  */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Rating
          </label>
          <input
            type="number"
            step={0.1}
            {...register("rating", {
              required: "Rating is required",
              min: { value: 1, message: "Rating must be at least 1" },
              max: { value: 5, message: "Rating must be at most 5" },
              valueAsNumber: true,
            })}
            className="w-full p-2 border border-black rounded-md"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-2 ">
        {/* Availability */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Availability
          </label>
          <select
            {...register("availability", {
              required: "Availability is required",
            })}
            className="w-full p-2 border border-black rounded-md"
          >
            <option value="inStock">In Stock</option>
            <option value="pre-order">Pre-order</option>
            <option value="upcoming">Upcoming</option>
            <option value="stock-out">Stock-out</option>
          </select>
          {errors.availability && (
            <p className="text-red-500 text-sm">
              {errors.availability.message}
            </p>
          )}
        </div>

        {/* type  */}
        <div className="mb-4 ">
          <label className="block text-gray-700 font-semibold mb-2">
            Types
          </label>
          <select
            {...register("type", {
              required: "Type is required",
            })}
            className="w-full p-2 border border-black rounded-md"
          >
            {productTypesArray?.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        {/* brand  */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Brand
          </label>
          <input
            {...register("brand", { required: "Brand is required" })}
            className="w-full p-2 border border-black rounded-md"
          />
          {errors.brand && (
            <p className="text-red-500 text-sm">{errors.brand.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-2">
        {/* materials */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Materials
          </label>
          <input
            {...register("materials", { required: "Materials is required" })}
            className="w-full p-2 border border-black rounded-md"
          />
          {errors.materials && (
            <p className="text-red-500 text-sm">{errors.materials.message}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Quantity
          </label>
          <input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              valueAsNumber: true,
            })}
            className="w-full p-2 border border-black rounded-md"
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Order
          </label>
          <input
            type="number"
            {...register("order", { valueAsNumber: true })}
            className="w-full p-2 border border-black rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Is Deleted
        </label>
        <Controller
          name="isDelete"
          control={control}
          render={({ field }) => (
            <Switch
              className="w-16"
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              checked={field.value}
              onChange={(checked) => field.onChange(checked)}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Specification
        </label>
        <input
          {...register("specification", {
            required: "Specification is required",
          })}
          className="w-full p-2 border border-black rounded-md"
        />
        {errors.specification && (
          <p className="text-red-500 text-sm">{errors.specification.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Shopping Info
        </label>
        <input
          {...register("shoppingInfo", {
            required: "Shopping Info is required",
          })}
          className="w-full p-2 border border-black rounded-md"
        />
        {errors.shoppingInfo && (
          <p className="text-red-500 text-sm">{errors.shoppingInfo.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default UpdateProducts;
