import React from "react";
import Styles from "./SearchInput.module.scss";

const SearchInput: React.FC<{ onChangeHandler: (e: any) => void }> = (
  props
) => {
  return (
    <>
      <input
        className={Styles.search}
        type="text"
        placeholder="Search crypto"
        onChange={props.onChangeHandler}
      />
    </>
  );
};

export default SearchInput;
