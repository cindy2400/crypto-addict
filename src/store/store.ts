import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth-slice";
import { cryptoSlice } from "./crypto/crypto-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    crypto: cryptoSlice.reducer,
  },
});

export type x = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
