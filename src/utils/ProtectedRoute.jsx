import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../store/authContext/authContext';

const ProtectedRoute = (redirectPath = 'landing') => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {}, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
