import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToBuildPage: (state, actions) => {
      state = state.push(actions.payload);
    },
  },
});

export const { addToBuildPage } = productSlice.actions;

export default productSlice.reducer;
