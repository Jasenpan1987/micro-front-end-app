import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import SignIn from "./Components/Signin";
import Signup from "./Components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "authApp",
});

export default ({ history }) => {
  console.log("hello", history);
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
