import { createSlice } from "@reduxjs/toolkit";
import { TCartData } from "../../../types/addToCart.type";

// Change TCartData to be an array type, e.g., TCartData[]
const initialState: TCartData[] = [
  {
    _id: "",
    buyQuantity: 1,
    image: "",
    name: "",
    price: 0,
    quantity: 1,
  },
];

const buyProductSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {
    buyingData: (state, actions) => {
      return [...actions.payload];
    },
  },
});

export const { buyingData } = buyProductSlice.actions;
export const checkOutReducer = buyProductSlice.reducer;
