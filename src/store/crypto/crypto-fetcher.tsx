import axios from "axios";
import { cryptoActions } from "./crypto-slice";

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

export const fetchCryptoHistory = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(
        "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1"
      );
      const data = response.data.data;
      dispatch(cryptoActions.setCryptoHistory(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchWebSocketCryptoPrice = () => {
  return (dispatch: any) => {
    try {
      const webSocket = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
      webSocket.onopen = () => {
        console.log("Connected");
      };
      webSocket.onmessage = (message) => {
        dispatch(
          cryptoActions.setWebSocketCryptoPrice(JSON.parse(message.data))
        );
      };
    } catch (error) {
      console.log(error);
    }
  };
};
