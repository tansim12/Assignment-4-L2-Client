import { createSlice } from "@reduxjs/toolkit";

const initialState: { category: string } = {
  category: "",
};

const queryCategorySlice = createSlice({
  name: "queryByCategory",
  initialState,
  reducers: {
    categoryQuery: (state, actions) => {
      return { category: actions.payload };
    },
  },
});

export const { categoryQuery } = queryCategorySlice.actions;
export const queryCategoryReducer = queryCategorySlice.reducer;
