import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const browserHistory = useHistory();

  useEffect(() => {
    const { onChildNavigate } = mount(ref.current, {
      onParentNavigate: (location) => {
        const currentPathname = browserHistory.location.pathname;
        const nextPathname = location.pathname;
        if (currentPathname !== nextPathname) {
          browserHistory.push(nextPathname);
        }
      },
      initialPath: browserHistory.location.pathname,
      handleSignIn: () => {
        onSignIn();
      },
    });

    const removeListen = browserHistory.listen(onChildNavigate);

    return () => {
      removeListen();
    };
  }, []);

  return <div ref={ref} />;
};
