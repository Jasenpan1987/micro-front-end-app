import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Pricing from "./Pricing";

const generatedClassName = createGenerateClassName({
  productionPrefix: "marketingApp",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generatedClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
