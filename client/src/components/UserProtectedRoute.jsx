import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserData } from "../context/userContext";

function UserProtectedRoute() {
  const { user, loading } = useUserData();

  if (loading) return <div>Loading..</div>;
  return user.email ? <Outlet /> : <Navigate to="/user-login" />;
}

export default UserProtectedRoute;
