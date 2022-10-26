import { Route } from "react-router-dom";
import AuthPage from "./page/AuthPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <Route path="/login">
        <AuthPage type="login" />
      </Route>
      <Route path="/register">
        <AuthPage type="register" />
      </Route>
    </div>
  );
}

export default App;
