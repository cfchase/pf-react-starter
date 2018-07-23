import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import asyncComponent from "./Utilities/AsyncComponent"

const AsyncHome = asyncComponent(() => import("./Home/components/Home"));
const AsyncNotFound = asyncComponent(() => import("./NotFound/components/NotFound"));

export const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => (
      <Redirect to={"/home"} />
    )} />
    <Route path="/home" exact component={ AsyncHome } />
    <Route component={ AsyncNotFound } />
  </Switch>
);
