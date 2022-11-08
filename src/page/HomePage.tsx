import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/Header";
import List from "../component/List";
import {
  fetchCryptoHistory,
  fetchCryptoList,
  fetchWebSocketCryptoPrice,
} from "../store/crypto/crypto-fetcher";
import { AppDispatch, x } from "../store/store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptoList = useSelector((state: x) => state.crypto.cryptoList);
  // const cryptoHistory = useSelector((state: x) => state.crypto.cryptoHistory);

  useEffect(() => {
    dispatch(fetchCryptoList());
    dispatch(fetchWebSocketCryptoPrice());
    dispatch(fetchCryptoHistory());
  }, [dispatch]);

  return (
    <>
      <Header />
      <List
        rank="Rank"
        name="Name"
        supply="Supply"
        marketCapUSD="MarketCapUSD"
        priceUSD="Price"
        changePercent24Hr="ChangePercent24Hr"
      />
      {cryptoList?.map((crypto: any) => {
        return (
          <List
            rank={crypto.rank}
            name={crypto.name}
            supply={crypto.supply}
            marketCapUSD={crypto.marketCapUsd}
            priceUSD={Number(crypto?.priceUsd).toFixed(3)}
            changePercent24Hr={crypto.changePercent24Hr}
          />
        );
      })}
    </>
  );
};

export default HomePage;
