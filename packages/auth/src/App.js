import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "authApp",
});

export default ({ history, handleSignIn }) => {
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
