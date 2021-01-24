import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import MarketingApp from "./Components/MarketingApp";
import Header from "./Components/Header";
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: "containerApp",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch></Switch>
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
