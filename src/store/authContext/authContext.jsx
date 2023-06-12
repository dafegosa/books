import React, { useContext, useReducer, useMemo } from 'react';

import { authReducer as reducer } from './authReducer';

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}

export { AuthProvider, useAuth };
