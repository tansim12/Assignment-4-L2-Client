import { baseApi } from "../../api/baseapi";

const allProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (body) => {
        const { limit, page, fields, sort, searchTerm,availability,category } = body;
        // Construct the query parameters
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append("searchTerm", searchTerm);
        if (sort) queryParams.append("sort", sort);
        if (limit) queryParams.append("limit", limit);
        if (page) queryParams.append("page", page);
        if (availability) queryParams.append("availability", availability);
        if (category) queryParams.append("category", category);

        // Manually handle the fields parameter to avoid URL encoding
        let queryString = queryParams.toString();
        if (fields) {
          queryString += `&fields=${fields}`;
        }
        return {
          url: `/products?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["AdminAllProducts"],
    }),
  }),
});

export const { useGetAllProductsQuery } = allProductsApi;
