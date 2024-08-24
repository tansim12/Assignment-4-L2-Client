import { baseApi } from "../../api/baseapi";

const checkOutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postCheckOutData: builder.mutation({
      query: (payload) => ({
        url: `/checkOut`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["AdminAllProducts", "SingleData"],
    }),
  }),
});

export const { usePostCheckOutDataMutation } = checkOutApi;
