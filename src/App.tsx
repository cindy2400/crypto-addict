import { Redirect, Route, Switch } from "react-router-dom";
import DetailPage from "./page/DetailPage";
import HomePage from "./page/HomePage";

function App(): JSX.Element {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/favorite">
          <HomePage />
        </Route>
        <Route path="/home/:cryptoId">
          <DetailPage />
        </Route>
        <Route path="*" exact>
          <p>No Route</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
