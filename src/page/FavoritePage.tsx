import React from "react";
import { useSelector } from "react-redux";
import Header from "../component/Header";
import { x } from "../store/store";

const FavoritePage: React.FC = () => {
  const favoriteCrypto = useSelector((state: x) => state.crypto.cryptoFavorite);

  return (
    <>
      <Header />
      <p>Favorite</p>
      {favoriteCrypto.map((crypto) => (
        <p>{crypto.name}</p>
      ))}
    </>
  );
};

export default FavoritePage;
