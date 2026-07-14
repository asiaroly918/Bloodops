import { Navigate } from "react-router";

const VolunteerRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (
    user?.role !== "admin" &&
    user?.role !== "volunteer"
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default VolunteerRoute;