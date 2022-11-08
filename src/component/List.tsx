import React from "react";
import Styles from "./List.module.scss";

const List: React.FC<{
  rank: string;
  name: string;
  supply: string;
  marketCapUSD: string;
  priceUSD: string;
  changePercent24Hr: string;
}> = (props) => {
  return (
    <div className={Styles.list}>
      <h3 className={Styles.smallSection}>{props.rank}</h3>
      <h3 className={Styles.smallSection}>{props.name}</h3>
      <h3 className={Styles.mediumSection}>{props.supply}</h3>
      <h3 className={Styles.mediumSection}>{props.marketCapUSD}</h3>
      <h3 className={Styles.mediumSection}>{props.priceUSD}</h3>
      <h3 className={Styles.mediumSection}>{props.changePercent24Hr}</h3>
    </div>
  );
};

export default List;
