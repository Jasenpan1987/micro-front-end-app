import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (elem) => {
  ReactDOM.render(<App />, elem);
};
export { mount };

if (process.env.NODE_ENV === "development") {
  if (document.querySelector("#_marketing-dev-root")) {
    mount(document.querySelector("#_marketing-dev-root"));
  }
}
