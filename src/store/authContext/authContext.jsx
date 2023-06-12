import React, { useContext, useState, useReducer, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// import { replace } from 'formik';

import axios from 'axios';

import { authReducer as reducer } from './authReducer';
import { actions } from './authActions';

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
