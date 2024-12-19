import { useCaptainData } from "../context/captainContext";
import { Navigate, Outlet } from "react-router-dom";

function CaptainProtectedRoute() {
  const { captain, loading } = useCaptainData();
  if (loading) return <div>Loading..</div>;
  return captain.email ? <Outlet /> : <Navigate to="/captain-login" />;
}

export default CaptainProtectedRoute;
