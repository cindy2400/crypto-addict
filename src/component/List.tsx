import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
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
  const [, setCryptoPrice] = useState(0);
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
      <p className={Styles.mediumSection}>
        {props?.supply === "Supply" ? (
          props.supply
        ) : (
          <NumericFormat
            value={Number(props?.supply).toFixed(3)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        )}
      </p>
      <p className={Styles.mediumSection}>
        {props?.marketCapUSD === "MarketCapUSD" ? (
          props.marketCapUSD
        ) : (
          <NumericFormat
            value={Number(props?.marketCapUSD).toFixed(3)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        )}
      </p>
      <p className={`${Styles.smallSection} ${Styles[cryptoPriceColor]}`}>
        {props?.priceUSD === "Price" ? (
          props.priceUSD
        ) : (
          <NumericFormat
            value={Number(props?.priceUSD).toFixed(3)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        )}
      </p>
      <p className={Styles.mediumSection}>{props.changePercent24Hr}</p>
    </div>
  );
};

export default List;
