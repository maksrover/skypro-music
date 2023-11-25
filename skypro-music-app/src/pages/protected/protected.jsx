import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const [cookies] = useCookies(["token"]);
  const hasToken = !!cookies.token;

  if (!hasToken) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
