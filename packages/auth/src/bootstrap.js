import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (elem, { onNavigate, defaultHistory }) => {
  // in development mode, we are providing a browserHistory
  // in production mode, we will create a memoryHistory and use it
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, elem);

  return {
    parentNavigateHandle: (parentBrowserHistory) => {
      const nextPathname = parentBrowserHistory.pathname;
      const currentPathname = history.location.pathname;
      if (nextPathname !== currentPathname) {
        history.push(nextPathname);
      }
    },
  };
};
export { mount };

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    });
  }
}
