import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ canActivate, redirectPath = 'landing' }) => {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
