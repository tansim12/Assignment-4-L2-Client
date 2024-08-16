import { baseApi } from "../../api/baseapi";

const allProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // api method one -1
    getAllProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags:["AdminAllProducts"]
    }),
    
  }),
});

export const { useGetAllProductsQuery } = allProductsApi;
