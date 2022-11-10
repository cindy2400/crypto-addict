import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import List from "../component/List";
import { x } from "../store/store";
import Styles from "./FavoritePage.module.scss";

const FavoritePage: React.FC = () => {
  const favoriteCrypto = useSelector((state: x) => state.crypto.cryptoFavorite);

  return (
    <>
      <Header />
      <p>Favorite</p>
      <List
        rank="Rank"
        name="Name"
        supply="Supply"
        marketCapUSD="MarketCapUSD"
        priceUSD="Price"
        changePercent24Hr="ChangePercent24Hr"
        classname={undefined}
      />
      {favoriteCrypto?.map((crypto: any) => {
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

export default FavoritePage;
