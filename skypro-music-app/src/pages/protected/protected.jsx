import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
