import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
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
      <h3>Crypto Addict</h3>
      <div>
        <NavLink
          to="/home"
          activeClassName={Styles["link-active"]}
          className={Styles.link}
        >
          Home
        </NavLink>
        <NavLink
          to="/favorite"
          activeClassName={Styles["link-active"]}
          className={Styles.link}
        >
          Favorite
        </NavLink>
        <Button
          type="button"
          text="Logout"
          classname={Styles["logout-button"]}
          onClickHandler={logoutHandler}
        />
      </div>
    </div>
  );
};

export default Header;
