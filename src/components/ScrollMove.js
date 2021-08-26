import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export const ScrollMove = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
