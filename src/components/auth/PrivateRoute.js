import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = true;
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;
