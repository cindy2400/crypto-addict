import { Link, NavLink } from "react-router-dom";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.header}>
      <Link to="/" className={Styles.title}>
        Crypto Addict
      </Link>
      <div className={Styles["header-nav"]}>
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
      </div>
    </div>
  );
};

export default Header;
