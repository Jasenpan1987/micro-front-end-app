import { StylesProvider } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Pricing from "./Pricing";

export default ({ history }) => {
  return (
    <div>
      <StylesProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
