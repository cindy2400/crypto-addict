import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import Input from "../component/Input";
import { loginData, registerData } from "../store/auth/auth-fetcher";
import { AppDispatch } from "../store/store";
import Style from "./Auth.module.scss";

const AuthPage: React.FC<{ type: string }> = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const inputEmailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputEmail((e.target as HTMLInputElement).value);
  };

  const inputPasswordHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputPassword((e.target as HTMLInputElement).value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataLogin = {
      email: inputEmail,
      password: inputPassword,
    };

    props.type === "login"
      ? dispatch(loginData(dataLogin))
      : dispatch(registerData(dataLogin));
  };

  return (
    <div className={Style.section}>
      <div
        className={`${Style["section-item"]} ${Style["section-gradient"]}`}
      ></div>
      <div className={Style["section-item"]}>
        <div>
          <form onSubmit={onSubmitHandler} className={Style["form-container"]}>
            <h1>{props.type === "login" ? "Sign In" : "Sign Up"}</h1>
            <Input
              type="email"
              placeholder="Email"
              text="Email"
              onChangeHandler={inputEmailHandler}
            />
            <Input
              type="password"
              placeholder="Password"
              text="Password"
              onChangeHandler={inputPasswordHandler}
            />
            <Button
              type="submit"
              text={props.type === "login" ? "Sign In" : "Sign Up"}
              onClickHandler={undefined}
            />
            {props.type === "login" ? (
              <p>
                Don't have an account ? <Link to="/register">SIGN UP</Link>
              </p>
            ) : (
              <p>
                Already have an account ? <Link to="/login">SIGN IN</Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
