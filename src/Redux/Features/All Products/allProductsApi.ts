import { baseApi } from "../../api/baseapi";


const allProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => {
        return {
          url: "/products",
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = allProductsApi;
