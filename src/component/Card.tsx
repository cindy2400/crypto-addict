import React from "react";
import Styles from "./Card.module.scss";

const Card: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = (props) => {
  return (
    <>
      <div style={props.style} className={Styles.card}>
        {props.children}
      </div>
    </>
  );
};

export default Card;
