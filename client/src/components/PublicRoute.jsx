import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "../context/userContext";

const PublicRoute = () => {
  const { user, loading } = useUserData();
  if (!loading) return <div>Loading..</div>;
  return user.email ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
