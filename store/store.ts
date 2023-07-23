import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/store/slices/cartSlices";
import { promocodeReducer } from "@/store/slices/promocodeSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    promocode: promocodeReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
