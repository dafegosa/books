import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../store/authContext/authContext';

const ProtectedRoute = (redirectPath = 'landing') => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {}, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div>
        <h2 className="w-full h-screen flex justify-center items-center text-center text-4xl">
          Primero debes hacer login.
        </h2>
        <Navigate to={redirectPath} replace />
      </div>
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
