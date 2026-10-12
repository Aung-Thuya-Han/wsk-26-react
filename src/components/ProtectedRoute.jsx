import { Navigate } from "react-router";
import { useUserContext } from "../hooks/contextHooks";

const ProtectedRoute = ({ children }) => {
  const { user, isCheckingUser } = useUserContext();

  if (isCheckingUser) {
    return <p>Checking login...</p>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
