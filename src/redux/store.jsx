import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import authReducer from './slice/authSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    user: authReducer,
  },
});
