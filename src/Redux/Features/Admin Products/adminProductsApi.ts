import { baseApi } from "../../api/baseapi";

const adminProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useCreateProductMutation } = adminProductsApi;
