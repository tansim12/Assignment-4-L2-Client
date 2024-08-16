import { baseApi } from "../../api/baseapi";

const adminProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags:["AdminAllProducts"]
    }),
  }),
});

export const { useCreateProductMutation } = adminProductsApi;
