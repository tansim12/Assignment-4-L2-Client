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
    updateProduct: builder.mutation({
      query: (body) => ({
        url: `/products/update-product/${body?.id}`,
        body: body?.data,
        method: "PUT",
      }),
      invalidatesTags: ["AdminAllProducts"],
    }),
    getOneProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET"
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetOneProductQuery,
} = adminProductsApi;
