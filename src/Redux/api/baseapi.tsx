// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
//   endpoints: (builder) => ({}),
// });

const baseQueryFn = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {

    // todo sent token Credential 
    // const token = (getState() as RootState).auth.token

    // // If we have a token set in state, let's assume that we should be passing it.
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`)
    // }
    return headers
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryFn,
  endpoints: () => ({}),
});
