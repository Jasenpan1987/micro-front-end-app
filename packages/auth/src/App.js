import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";

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
              <SignIn handleSignIn={handleSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignUp handleSignIn={handleSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
