import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default appStore;
