import React from "react";
import Styles from "./Button.module.scss";

const Button: React.FC<{
  type?: "button" | "submit";
  text: string;
  classname: string | undefined;
  onClickHandler: (() => void) | React.MouseEventHandler | undefined;
}> = (props) => {
  return (
    <button
      onClick={props.onClickHandler}
      type={props.type}
      className={`${Styles.button} ${props.classname}`}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
