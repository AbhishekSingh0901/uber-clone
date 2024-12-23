import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CaptainDataContext = createContext();
function CaptainContext({ children }) {
  const [captain, setCaptain] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/captains/profile`,
          { withCredentials: true }
        );
        setCaptain(response?.data?.user);
      } catch (error) {
        console.error("Not authenticated: ", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);
  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain, loading }}>
      {children}
    </CaptainDataContext.Provider>
  );
}

function useCaptainData() {
  const context = useContext(CaptainDataContext);
  if (!context) {
    throw new Error(
      "use Captain Data must be used within a CaptainDataContext"
    );
  }
  return context;
}

export { CaptainContext, useCaptainData };
