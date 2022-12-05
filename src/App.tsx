import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./page/AuthPage";
import DetailPage from "./page/DetailPage";
import HomePage from "./page/HomePage";

function App(): JSX.Element {
  const isLogin = useSelector(
    (state: { auth: { isLogin: { isLogin: boolean } } }) => state.auth.isLogin
  );

  return (
    <div>
      {isLogin ? (
        <Switch>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/favorite">
            <HomePage />
          </Route>
          <Route path="/home/:cryptoId">
            <DetailPage />
          </Route>
          <Route path="/login">
            <Redirect to="/home" />
          </Route>
          <Route path="*" exact>
            <p>No Route</p>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/home" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <AuthPage type="login" />
          </Route>
          <Route path="/register">
            <AuthPage type="register" />
          </Route>
          <Route path="*" exact>
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
