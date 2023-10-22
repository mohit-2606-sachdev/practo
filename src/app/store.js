// import { configureStore } from "@reduxjs/toolkit";
// import AddToCartMedi from "../Features/AddToCartMedi/AddToCartMedi";
// import AddToCartTest from "../Features/AddToCartTest/AddToCartTest";
// import AuthSlice from "../Features/Auth/Auth";
// import ProfileSlice from "../Features/Profile/Profile";

// import SearchSlice from "../Features/Search/Search";

// const store = configureStore({
//   reducer: {
//     AddToCartMedi,
//     Search: SearchSlice,
//     AddToCartTest,
//     Auth: AuthSlice,
//     Profile: ProfileSlice,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import AddToCartMedi from "../Features/AddToCartMedi/AddToCartMedi";
import AddToCartTest from "../Features/AddToCartTest/AddToCartTest";
import AuthSlice from "../Features/Auth/Auth";
import ProfileSlice from "../Features/Profile/Profile";
import SearchSlice from "../Features/Search/Search";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  AddToCartMedi,
  Search: SearchSlice,
  AddToCartTest,
  Auth: AuthSlice,
  Profile: ProfileSlice,
});

const persistConfig = {
  key: "practo-app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
