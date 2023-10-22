import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  medi: "",
  surgery: "",
  labTest: "",
  doctor: "",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMedi: (state, action) => {
      state.medi = action.payload;
    },
    searchTest: (state, action) => {
      state.labTest = action.payload;
    },
    searchDoctor: (state, action) => {
      state.doctor = action.payload;
    },
    appointSergery: (state, action) => {
      state.surgery = action.payload;
    },
  },
});

export const { searchMedi, appointSergery, searchTest, searchDoctor } =
  SearchSlice.actions;
export default SearchSlice.reducer;
