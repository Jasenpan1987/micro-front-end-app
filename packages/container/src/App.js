import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";

const MarketingAppLazy = lazy(() => import("./Components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./Components/AuthApp"));
const DashboardLazy = lazy(() => import("./Components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

// we are using router and history in combination here
// rather than using the browser router is because
// we need to access the history object in this component
const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth">
                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                {isSignedIn && <DashboardLazy />}
              </Route>
              <Route path="/" component={MarketingAppLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
