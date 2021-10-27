import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/dashboard";
import Login from "../components/login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default Routes;
