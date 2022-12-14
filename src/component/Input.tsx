import React from "react";
import Styles from "./Input.module.scss";

const Input: React.FC<{
  type: string;
  placeholder: string;
  text: string;
  onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <>
      <label htmlFor={props.type} className={Styles.label}>
        {props.text}
      </label>
      <input
        onChange={props.onChangeHandler}
        className={Styles.input}
        id={props.type}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Input;
