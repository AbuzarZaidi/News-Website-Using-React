import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div>{props.children}</div>;
};

export default ScrollTop;
