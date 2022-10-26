import { Link } from "react-router-dom";
import Button from "../component/Button";
import Input from "../component/Input";
import Style from "./Auth.module.scss";

const AuthPage: React.FC<{ type: string }> = (props) => {
  return (
    <div className={Style.section}>
      <div
        className={`${Style["section-item"]} ${Style["section-gradient"]}`}
      ></div>
      <div className={Style["section-item"]}>
        <div>
          <form className={Style["form-container"]}>
            <h1>{props.type === "login" ? "Sign In" : "Sign Up"}</h1>
            <Input type="email" placeholder="Email" text="Email" />
            <Input type="password" placeholder="Password" text="Password" />
            <Button text={props.type === "login" ? "Sign In" : "Sign Up"} />
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
