import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Header from "../component/Header";
import List from "../component/List";
import SearchInput from "../component/SearchInput";
import {
  fetchCryptoList,
  fetchCryptoSearch,
  fetchWebSocketCryptoPrice,
} from "../store/crypto/crypto-fetcher";
import { Crypto, cryptoActions } from "../store/crypto/crypto-slice";
import { AppDispatch, x } from "../store/store";
import Styles from "./HomePage.module.scss";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptoList = useSelector((state: x) => state.crypto.cryptoList);
  const cryptoFavorite = useSelector((state: x) => state.crypto.cryptoFavorite);
  const [crypto, setCrypto] = useState<Crypto[]>([]);
  const [searchText, setSearchText] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchCryptoList());
    dispatch(fetchWebSocketCryptoPrice());
  }, [dispatch]);

  useEffect(() => {
    pathname === "/favorite"
      ? setCrypto(cryptoFavorite)
      : setCrypto(cryptoList);
  }, [cryptoFavorite, cryptoList, pathname]);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      dispatch(fetchCryptoSearch(searchText));
    }, 500);
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [dispatch, searchText]);

  const removeOldCryptoDetailHandler = () => {
    dispatch(cryptoActions.removeCryptoDetail());
  };

  const setSearchTextHandler = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Header />

      {pathname === "/favorite" ? (
        <h2 className={Styles.h2}>Favorite</h2>
      ) : (
        <>
          <SearchInput onChangeHandler={setSearchTextHandler} />
          <h2 className={Styles.h2}>Home</h2>
        </>
      )}

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
        <p className={Styles["empty-info"]}>Crypto empty...</p>
      )}
      {crypto?.map((crypto: any) => {
        return (
          <Link
            key={crypto.id}
            className={Styles.link}
            to={`/home/${crypto.id}`}
            onClick={removeOldCryptoDetailHandler}
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
