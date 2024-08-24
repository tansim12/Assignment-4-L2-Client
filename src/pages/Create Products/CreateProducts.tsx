import { Switch } from "antd";
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { TProduct } from "../../types/products.type";
import { useCreateProductMutation } from "../../Redux/Features/Admin Products/adminProductsApi";
import { useNavigate } from "react-router-dom";
import {
  allCategoryArray,
  productTypesArray,
} from "../../types/Const/product.const";
import toast from "react-hot-toast";

const CreateProducts: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: {
      image: [""],
      description: [""],
      color: [""],
      isDelete: false, // default value for isDelete
    },
  });

  const {
    fields: imageFields,
    append: addImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: "image",
  });

  const {
    fields: descriptionFields,
    append: addDescription,
    remove: removeDescription,
  } = useFieldArray({
    control,
    name: "description",
  });

  const {
    fields: colorFields,
    append: addColor,
    remove: removeColor,
  } = useFieldArray({
    control,
    name: "color",
  });

  const [postProduct] = useCreateProductMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: TProduct) => {
    if (data?.image?.[0] === "") {
      return toast?.error("Image Fields Required");
    } else if (data?.description?.[0] === "") {
      return toast?.error("Description Fields Required");
    } else if (data?.color?.[0] === "") {
      return toast?.error("Color Fields Required");
    }
    const payload = { ...data, sellerProfile: "66ae1bb0429576d1fb219b17" };
    try {
      const res = await postProduct(payload).unwrap();
      if (res?.success) {
        navigate("/admin/all-products-management");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-8 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Product Form</h2>

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

      {/* Image fields */}
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
          errors.image.map((error, index) => (
            <p key={index} className="text-red-500 text-sm">
              {error?.message}
            </p>
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
          errors?.description?.map((error, index) => (
            <p key={index} className="text-red-500 text-sm">
              {error?.message}
            </p>
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
          errors?.color?.map((error, index) => (
            <p key={index} className="text-red-500 text-sm">
              {error?.message}
            </p>
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
              min: { value: 1, message: "Rating must be at least 1" },
              max: { value: 99, message: "Rating must be at most 99" },
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

export default CreateProducts;
