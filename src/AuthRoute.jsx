import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthRoute;
