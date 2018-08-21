import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import asyncComponent from "./Utilities/AsyncComponent"

const AsyncHome = asyncComponent(() => import("./Home/components/Home"));
const AsyncDocumentDetail = asyncComponent(() => import("./DocumentDetail/components/DocumentDetail"));
const AsyncDocumentList = asyncComponent(() => import("./DocumentList/components/DocumentList"));
const AsyncNotFound = asyncComponent(() => import("./NotFound/components/NotFound"));

export const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => (
      <Redirect to={"/home"} />
    )} />
    <Route path="/home" exact component={ AsyncHome } />
    <Route path="/documents/:documentId" exact component={ AsyncDocumentDetail } />
    <Route path="/documents" exact component={ AsyncDocumentList } />
    <Route component={ AsyncNotFound } />
  </Switch>
);
