import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AuthPage from "./page/AuthPage";
import HomePage from "./page/HomePage";

function App(): JSX.Element {
  const isLogin = useSelector(
    (state: { auth: { isLogin: { isLogin: boolean } } }) => state.auth.isLogin
  );

  return (
    <div>
      {isLogin ? (
        <>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <Redirect to="/home" />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <AuthPage type="login" />
          </Route>
          <Route path="/register">
            <AuthPage type="register" />
          </Route>
        </>
      )}
    </div>
  );
}

export default App;
