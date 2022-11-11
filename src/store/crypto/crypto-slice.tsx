import { createSlice } from "@reduxjs/toolkit";

export interface Crypto {
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

interface CryptoObject {
  id?: string;
  rank?: string;
  symbol?: string;
  name?: string;
  supply?: string;
  maxSupply?: string;
  marketCapUsd?: string;
  volumeUsd24Hr?: string;
  priceUsd?: string;
  changePercent24Hr?: string;
  vwap24Hr?: string;
}

interface CryptoHistory {
  priceUsd: string;
  time: number;
  date: Date;
}

interface CryptoState {
  cryptoList: Crypto[];
  cryptoHistory: CryptoHistory[];
  cryptoFavorite: Crypto[];
  cryptoDetail: CryptoObject;
}

const initialState: CryptoState = {
  cryptoList: [],
  cryptoHistory: [],
  cryptoFavorite: [],
  cryptoDetail: {},
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    setCryptoList(state, action) {
      state.cryptoList = action.payload;
    },
    setCryptoHistory(state, action) {
      const history = action.payload;
      const formatedDate = history.map((his: any) => {
        return {
          ...his,
          date: new Date(his.date).toDateString(),
        };
      });
      state.cryptoHistory = formatedDate;
    },
    setCryptoDetail(state, action) {
      state.cryptoDetail = action.payload;
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
    setWebSocketCryptoFavoritePrice(state, action) {
      const price = action.payload;
      const newPrice = state.cryptoFavorite.map((crypto) => {
        if (price[crypto.id] !== undefined) {
          return {
            ...crypto,
            priceUsd: price[crypto.id],
          };
        } else {
          return crypto;
        }
      });
      state.cryptoFavorite = newPrice;
    },
    setCryptoFavorite(state, action) {
      state.cryptoFavorite.push(action.payload);
    },
    removeCryptoFavorite(state, action) {
      state.cryptoFavorite = state.cryptoFavorite.filter(
        (crypto) => crypto.id !== action.payload
      );
    },
    removeCryptoDetail(state) {
      state.cryptoDetail = {};
    },
  },
});

export const cryptoActions = cryptoSlice.actions;
