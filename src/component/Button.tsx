import React from "react";
import Styles from "./Button.module.scss";

const Button: React.FC<{
  type: "button" | "submit";
  text: string;
  onClickHandler: React.MouseEventHandler | undefined;
}> = (props) => {
  return (
    <button
      onClick={props.onClickHandler}
      type={props.type}
      className={Styles.button}
    >
      {props.text}
    </button>
  );
};

export default Button;
