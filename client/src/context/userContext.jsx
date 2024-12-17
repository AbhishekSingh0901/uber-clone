import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserDataContext = createContext();
// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
  });
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/users/profile`,
          { withCredentials: true }
        );

        setUser(response.data);
      } catch (error) {
        console.error("Not authenticated: ", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);
  return (
    <UserDataContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserDataContext.Provider>
  );
};

function useUserData() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataContext");
  }

  return context;
}
export { UserContext, useUserData };
