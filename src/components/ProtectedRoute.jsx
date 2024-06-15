import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : "no estas autenticado ";
};

export default ProtectedRoute;
