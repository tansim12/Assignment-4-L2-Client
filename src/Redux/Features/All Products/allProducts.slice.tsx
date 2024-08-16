import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/products.type";

const allProducts: TProduct[] = [];

const allProductSlice = createSlice({
  name: "allProducts",
  initialState: allProducts,
  reducers: {
    allProductsData: (state, action: PayloadAction<TProduct[]>) => {
      return action?.payload;
    },
  },
});
export const { allProductsData } = allProductSlice.actions;
export const allProductReducer = allProductSlice.reducer;
