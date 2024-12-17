import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import UserProtectedRoute from "./components/UserProtectedRoute";

function App() {
  return (
    <div className="max-w-md mx-auto">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedRoute>
              <Home />
            </UserProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
