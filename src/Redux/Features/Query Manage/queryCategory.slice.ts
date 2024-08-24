import { createSlice } from "@reduxjs/toolkit";

// const initialState: { category: string } = {
//   category: "",
// };
const initialState: string = "";

const queryCategorySlice = createSlice({
  name: "queryByCategory",
  initialState,
  reducers: {
    categoryQuery: (_state, actions) => {
      if (actions?.payload?.category === "") {
        return;
      } else {
        return actions?.payload;
      }
    },
  },
});

export const { categoryQuery } = queryCategorySlice.actions;
export const queryCategoryReducer = queryCategorySlice.reducer;
