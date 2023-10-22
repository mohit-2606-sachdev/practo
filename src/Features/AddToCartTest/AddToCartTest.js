import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 175,
};

const AddToCartTest = createSlice({
  name: "addToCartTest",
  initialState,
  reducers: {
    addToCartTest: (state, action) => {
      state.cart.push(action.payload);
      state.total = state.total + action.payload.price;
    },
    removeToCartTest: (state, action) => {
      state.cart = state.cart.filter(
        (ele) => ele.testName !== action.payload.testName
      );
      state.total = state.total - action.payload.price;
    },
    clearCartTest: (state, action) => {
      state.cart = [];
      state.total = 175;
    },
  },
});

export const { addToCartTest, removeToCartTest, clearCartTest } =
  AddToCartTest.actions;
export default AddToCartTest.reducer;
