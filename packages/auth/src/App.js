import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "authApp",
});

export default ({ history, handleSignIn }) => {
  console.log("hello", history);
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin handleSignIn={handleSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup handleSignIn={handleSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
