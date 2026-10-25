
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const loggedInUser = localStorage.getItem("LoggedInUser");

  if (!loggedInUser) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(loggedInUser)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
