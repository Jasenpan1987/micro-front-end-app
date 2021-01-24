import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (
  elem,
  { onParentNavigate, initialPath, defaultHistory, handleSignIn }
) => {
  // in development mode, we are providing a browserHistory
  // in production mode, we will create a memoryHistory and use it
  const childHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onParentNavigate) {
    // update child history when parent history changes
    childHistory.listen(onParentNavigate);
  }

  ReactDOM.render(
    <App history={childHistory} handleSignIn={handleSignIn} />,
    elem
  );

  return {
    // give parent a handle, when child history changes, update the parent history
    onChildNavigate: (currentBrowserHistory) => {
      const nextPathname = currentBrowserHistory.pathname;
      const currentPathname = childHistory.location.pathname;
      if (nextPathname !== currentPathname) {
        childHistory.push(nextPathname);
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
