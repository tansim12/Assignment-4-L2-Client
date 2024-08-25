import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart2",
  initialState: { count: 0 },
  reducers: {
    addToCartAction: (state, actions) => {
      const data = localStorage.getItem("addToCart");
      const parsedData = data ? JSON.parse(data) : [];
      const cartItemsLength = { count: parsedData?.length };

      if (actions.payload == "increment" && state?.count >= 0 && state?.count < 1) {
        cartItemsLength["count"] = state?.count + 1;
      }
      if (actions.payload == "decrement" && state?.count > 0) {
        cartItemsLength["count"] = state?.count - 1;
      }

      return cartItemsLength;
    },
  },
});

export const { addToCartAction } = addToCartSlice.actions;
export const addToCartReducer = addToCartSlice.reducer;
