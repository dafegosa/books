import { replace } from 'formik';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = ({ email, password }) => {
    if (email === 'test@gmail.com' && password === 'password') {
      setUser({ email, password });
      setIsAuthenticated(true);
      navigate('/');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('landing', replace);
  };

  const value = { user, isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}

export { AuthProvider, useAuth };
