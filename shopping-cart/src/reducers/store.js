import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../fetures/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
