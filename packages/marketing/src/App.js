import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Pricing from "./Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
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
