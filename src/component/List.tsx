import React, { useEffect, useState } from "react";
import Styles from "./List.module.scss";

const List: React.FC<{
  rank: string;
  name: string;
  supply: string;
  marketCapUSD: string;
  priceUSD: string;
  changePercent24Hr: string;
  classname: string | undefined;
}> = (props) => {
  const [cryptoPrice, setCryptoPrice] = useState(0);
  const [cryptoPriceColor, setCryptoPriceColor] = useState("black");

  useEffect(() => {
    setCryptoPrice((prevState) => {
      prevState > +props.priceUSD
        ? setCryptoPriceColor("red")
        : setCryptoPriceColor("green");
      return +props.priceUSD;
    });
  }, [props.priceUSD]);

  return (
    <div className={`${Styles.list} ${props.classname}`}>
      <p className={Styles.smallSection}>{props.rank}</p>
      <p className={Styles.smallSection}>{props.name}</p>
      <p className={Styles.mediumSection}>{props.supply}</p>
      <p className={Styles.mediumSection}>{props.marketCapUSD}</p>
      <p className={`${Styles.smallSection} ${Styles[cryptoPriceColor]}`}>
        {props.priceUSD}
      </p>
      <p className={Styles.mediumSection}>{props.changePercent24Hr}</p>
    </div>
  );
};

export default List;
