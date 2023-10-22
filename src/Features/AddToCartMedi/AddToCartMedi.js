import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const AddToCartMedi = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (ele) => ele.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.total = state.total + 1 * existingItem.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.total = state.total + 1 * action.payload.price;
      }
    },
    removeToCart: (state, action) => {
      const existingItem = state.cart.find(
        (ele) => ele.name === action.payload.name
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.total = state.total - 1 * existingItem.price;
        } else {
          state.cart = state.cart.filter(
            (ele) => ele.name !== action.payload.name
          );
          state.total = state.total - 1 * action.payload.price;
        }
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeToCart, clearCart } = AddToCartMedi.actions;
export default AddToCartMedi.reducer;
