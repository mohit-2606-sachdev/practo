import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state, action) => {
      state.email = "";
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
