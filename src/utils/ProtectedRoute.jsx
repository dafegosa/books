import { useEffect } from 'react';
import { Navigate, Link, Outlet } from 'react-router-dom';

import { useAuth } from '../store/authContext/authContext';

const ProtectedRoute = (redirectPath = 'landing') => {
  const { isAuthenticated } = useAuth().state;
  useEffect(() => {}, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div>
        <h2 className="w-full h-screen flex flex-col justify-center items-center text-center text-4xl">
          Primero debes hacer login.
          <Link to="/account">
            <span className="text-blue-500">Login</span>
          </Link>
        </h2>
        <Navigate to={redirectPath} replace />
      </div>
    );
  }
  return <Outlet />;
};

export default ProtectedRoute;
