import React from "react";
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
  return (
    <div className={`${Styles.list} ${props.classname}`}>
      <p className={Styles.smallSection}>{props.rank}</p>
      <p className={Styles.smallSection}>{props.name}</p>
      <p className={Styles.mediumSection}>{props.supply}</p>
      <p className={Styles.mediumSection}>{props.marketCapUSD}</p>
      <p className={Styles.smallSection}>{props.priceUSD}</p>
      <p className={Styles.mediumSection}>{props.changePercent24Hr}</p>
    </div>
  );
};

export default List;
