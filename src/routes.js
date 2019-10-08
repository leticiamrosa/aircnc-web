import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// routes
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={props => <Login {...props} />} />
        <Route
          exact
          path="/dashboard"
          component={props => <Dashboard {...props} />}
        />
        <Route exact path="/new" component={props => <New {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
