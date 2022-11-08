import { createSlice } from "@reduxjs/toolkit";

interface Crypto {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

interface CryptoHistory {
  priceUsd: string;
  time: number;
  date: Date;
}

interface CryptoState {
  cryptoList: Crypto[];
  cryptoHistory: CryptoHistory[];
}

const initialState: CryptoState = {
  cryptoList: [],
  cryptoHistory: [],
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    setCryptoList(state, action) {
      state.cryptoList = action.payload;
    },
    setCryptoHistory(state, action) {
      state.cryptoHistory = action.payload;
    },
    setWebSocketCryptoPrice(state, action) {
      const price = action.payload;
      const newPrice = state.cryptoList.map((crypto) => {
        if (price[crypto.id] !== undefined) {
          return {
            ...crypto,
            priceUsd: price[crypto.id],
          };
        } else {
          return crypto;
        }
      });
      state.cryptoList = newPrice;
    },
  },
});

export const cryptoActions = cryptoSlice.actions;
