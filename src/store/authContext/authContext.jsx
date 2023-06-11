import React, { useContext, useState, useReducer } from 'react';
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
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async ({ email, name, password, password_confirmation }) => {
    const options = {
      method: 'POST',
      url: 'https://cautious-octo-fishstick.onrender.com/api/v1/sign_up',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        user: {
          email,
          name,
          password,
          password_confirmation,
        },
      },
    };
    try {
      const { data, headers } = await axios.request(options);
      dispatch({ type: actions.SIGN_UP, payload: data });
      const token = headers.authorization;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  const login = async ({ email, password }) => {
    const options = {
      method: 'POST',
      url: 'https://cautious-octo-fishstick.onrender.com/api/v1/sign_in',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: { email, password },
    };
    try {
      const { response, headers } = await axios.request(options);
      dispatch({ type: actions.SIGN_UP, payload: response.data });
      setIsAuthenticated(true);
      const token = headers.authorization;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error) {
      console.error('Error sign in user:', error);
    }
  };

  const logout = () => {
    dispatch({ type: actions.LOGOUT });
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/');
  };

  const value = {
    state,
    dispatch,
    signup,
    login,
    logout,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}

export { AuthProvider, useAuth };
