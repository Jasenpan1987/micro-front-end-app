import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
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
    });

    const removeListen = browserHistory.listen(onChildNavigate);

    return () => {
      removeListen();
    };
  }, []);

  console.log("33");
  return <div ref={ref} />;
};
