import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuthentication, useUser } from "../hooks/apiHooks";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isCheckingUser, setIsCheckingUser] = useState(true);
  const { postLogin } = useAuthentication();
  const { getUserByToken } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // Login, logout and auto-login are shared through the context.
  const handleLogin = async (credentials) => {
    try {
      const loginResult = await postLogin(credentials);
      localStorage.setItem("token", loginResult.token);
      setUser(loginResult.user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  // Auto-login restores the user after the browser page is refreshed.
  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const userResult = await getUserByToken(token);
        setUser(userResult.user);
        navigate(location.pathname);
      }
    } catch (error) {
      console.error(error.message);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setIsCheckingUser(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isCheckingUser,
        handleLogin,
        handleLogout,
        handleAutoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// The assignment asks the custom hook to import this context from this file.
// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, UserContext };
