import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "../context/userContext";
import { useCaptainData } from "../context/captainContext";

const PublicRoute = () => {
  const { user } = useUserData();
  const { captain } = useCaptainData();
  console.log(captain);
  if (user.email) {
    return <Navigate to="/users-home" />;
  }
  if (captain.email) {
    return <Navigate to="/captains-home" />; // Redirect to captain home page if captain is logged in
  }
  return <Outlet />;
};

export default PublicRoute;
