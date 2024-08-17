import { baseApi } from "../../api/baseapi";

const adminProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["AdminAllProducts"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminAllProducts"],
    }),
  }),
});

export const { useCreateProductMutation, useDeleteProductMutation } =
  adminProductsApi;
