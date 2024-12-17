import { Navigate, useNavigate } from "react-router-dom";
import { useUserData } from "../context/userContext";

function UserProtectedRoute({ children }) {
  const { user, loading } = useUserData();

  if (loading) return <div>Loading..</div>;
  return user.email ? children : <Navigate to="/user-login" />;
}

export default UserProtectedRoute;
