import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import { useEffect } from 'react';

const ProtectedRoute = (redirectPath = 'landing') => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {}, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
