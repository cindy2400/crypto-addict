import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Header from "../component/Header";
import List from "../component/List";
import {
  fetchCryptoList,
  fetchWebSocketCryptoPrice,
} from "../store/crypto/crypto-fetcher";
import { Crypto } from "../store/crypto/crypto-slice";
import { AppDispatch, x } from "../store/store";
import Styles from "./HomePage.module.scss";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptoList = useSelector((state: x) => state.crypto.cryptoList);
  const cryptoFavorite = useSelector((state: x) => state.crypto.cryptoFavorite);
  const [crypto, setCrypto] = useState<Crypto[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchCryptoList());
    dispatch(fetchWebSocketCryptoPrice());
    // dispatch(fetchCryptoHistory());
  }, [dispatch]);

  useEffect(() => {
    pathname === "/favorite"
      ? setCrypto(cryptoFavorite)
      : setCrypto(cryptoList);
  }, [cryptoFavorite, cryptoList, pathname]);

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
        classname={Styles.head}
      />
      {crypto.length === 0 && (
        <p className={Styles["empty-info"]}>Favorite crypto empty...</p>
      )}
      {crypto?.map((crypto: any) => {
        return (
          <Link
            key={crypto.id}
            className={Styles.link}
            to={`/home/${crypto.id}`}
          >
            <List
              rank={crypto.rank}
              name={crypto.name}
              supply={crypto.supply}
              marketCapUSD={crypto.marketCapUsd}
              priceUSD={Number(crypto?.priceUsd).toFixed(3)}
              changePercent24Hr={crypto.changePercent24Hr}
              classname={undefined}
            />
          </Link>
        );
      })}
    </>
  );
};

export default HomePage;
