import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const browserHistory = useHistory();

  useEffect(() => {
    const { parentNavigateHandle } = mount(ref.current, {
      onNavigate: (location) => {
        const currentPathname = history.location;
        const nextPathname = location.pathname;
        if (currentPathname !== nextPathname) {
          browserHistory.push(nextPathname);
        }
      },
    });

    browserHistory.listen(parentNavigateHandle);
  }, []);

  return <div ref={ref} />;
};
