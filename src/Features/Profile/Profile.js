import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: "",
  name: "",
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getNumber: (state, action) => {
      state.number = action.payload;
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { getNumber, getName } = ProfileSlice.actions;
export default ProfileSlice.reducer;
