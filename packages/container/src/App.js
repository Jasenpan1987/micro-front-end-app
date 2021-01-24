import React, { lazy, Suspense, useState } from "react";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";

const MarketingAppLazy = lazy(() => import("./Components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./Components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
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
              <Route path="/">
                <MarketingAppLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
