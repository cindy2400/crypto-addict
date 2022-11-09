import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authActions } from "../store/auth/auth-slice";
import Button from "./Button";
import Styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.replace("/login");
  };

  return (
    <div className={Styles.header}>
      <h2>Crypto Addict</h2>
      <div>
        <Link to="/favorite">Favorite</Link>
        <Button type="button" text="Logout" onClickHandler={logoutHandler} />
      </div>
    </div>
  );
};

export default Header;
