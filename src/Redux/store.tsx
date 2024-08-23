import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseapi";
import { allProductReducer } from "./Features/All Products/allProducts.slice";
import { queryCategoryReducer } from "./Features/Query Manage/queryCategory.slice";

export const store = configureStore({
  reducer: {
    allProducts: allProductReducer,
    queryByCategory: queryCategoryReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
