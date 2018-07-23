import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

import "../node_modules/patternfly/dist/css/patternfly.css";
import "../node_modules/patternfly/dist/css/patternfly-additions.css";
import "../node_modules/patternfly-react/dist/css/patternfly-react.css";
import "./index.css";
import App from "./App";

const store = createStore(
  rootReducer
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root"));

