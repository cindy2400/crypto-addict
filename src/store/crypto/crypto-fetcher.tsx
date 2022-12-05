import axios from "axios";
import { cryptoActions } from "./crypto-slice";

let webSocket: WebSocket;

export const fetchCryptoList = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get("https://api.coincap.io/v2/assets");
      const data = response.data.data;
      dispatch(cryptoActions.setCryptoList(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCryptoDetail = (cryptoId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${cryptoId}`
      );
      const data = response.data.data;
      dispatch(cryptoActions.setCryptoDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCryptoHistory = (cryptoId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${cryptoId}/history?interval=m1`
      );
      const data = response.data.data;
      dispatch(cryptoActions.setCryptoHistory(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCryptoSearch = (cryptoId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?search=${cryptoId}`
      );
      const data = response.data.data;
      dispatch(cryptoActions.setCryptoList(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchWebSocketCryptoPrice = () => {
  return (dispatch: any) => {
    try {
      webSocket = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
      webSocket.onopen = () => {
        console.log("Connected");
      };
      webSocket.onmessage = (message) => {
        dispatch(
          cryptoActions.setWebSocketCryptoPrice(JSON.parse(message.data))
        );
        dispatch(
          cryptoActions.setWebSocketCryptoFavoritePrice(
            JSON.parse(message.data)
          )
        );
      };
    } catch (error) {
      console.log(error);
    }
  };
};

export const disconnectWebSocketCryptoPrice = () => {
  try {
    webSocket.close();
  } catch (error) {
    console.log(error);
  }
};

export const fetchWebSocketCryptoPriceDetailPage = (cryptoId: string) => {
  return (dispatch: any) => {
    try {
      webSocket = new WebSocket(
        `wss://ws.coincap.io/prices?assets=${cryptoId}`
      );
      webSocket.onopen = () => {
        console.log("Connected");
      };
      webSocket.onmessage = (message) => {
        dispatch(cryptoActions.setCryptoDetailPrice(JSON.parse(message.data)));
      };
    } catch (error) {
      console.log(error);
    }
  };
};
