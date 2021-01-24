import React, { lazy, Suspense } from "react";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";
// import AuthApp from "./Components/AuthApp";
// import MarketingApp from "./Components/MarketingApp";

const MarketingAppLazy = lazy(() => import("./Components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./Components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "containerApp",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/" exact component={MarketingAppLazy} />
              <Route path="/auth" component={AuthAppLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
