import { configureStore } from "@reduxjs/toolkit";
import { cryptoSlice } from "./crypto/crypto-slice";

const store = configureStore({
  reducer: {
    crypto: cryptoSlice.reducer,
  },
});

export type storeType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
