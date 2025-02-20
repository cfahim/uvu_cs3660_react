import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const AuthRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation(); // Get the current location

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default AuthRoute;
