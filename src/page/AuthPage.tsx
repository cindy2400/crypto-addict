import Button from "../component/Button";
import Input from "../component/Input";
import Style from "./Auth.module.scss";

const AuthPage = () => {
  return (
    <div className={Style.section}>
      <div
        className={`${Style["section-item"]} ${Style["section-gradient"]}`}
      ></div>
      <div className={Style["section-item"]}>
        <div>
          <form className={Style["form-container"]}>
            <h1>Sign In</h1>
            <Input type="email" placeholder="Email" text="Email" />
            <Input type="password" placeholder="Password" text="Password" />
            <Button text="Sign In" />
            <p>
              Don't have an account ? <a href="/#">SIGN UP</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
