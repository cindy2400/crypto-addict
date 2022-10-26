import React from "react";
import Styles from "./Button.module.scss";

const Button: React.FC<{ text: string }> = (props) => {
  return <button className={Styles.button}>{props.text}</button>;
};

export default Button;
