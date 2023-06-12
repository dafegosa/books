import axios from 'axios';
import { actions } from './authActions';

export const fetchAuth = async (dispatch) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=free-ebooks'
    );
    dispatch({ type: actions.SET_BOOKS, payload: response.data });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

export const signup = async (
  dispatch,
  { email, name, password, password_confirmation }
) => {
  console.log({ email, name, password, password_confirmation });
  dispatch({ type: actions.SIGN_UP, payload: { email, name, password } });
  dispatch({ type: actions.AUTHENTICATE, payload: true });

  //Todo: review this code
  // const options = {
  //   method: 'POST',
  //   url: 'https://cautious-octo-fishstick.onrender.com/api/v1/sign_up',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },
  //   data: {
  //     user: {
  //       email,
  //       name,
  //       password,
  //       password_confirmation,
  //     },
  //   },
  // };
  // try {
  //   const { data, headers } = await axios.request(options);
  //   if (data.errors) {
  //     console.error('Error signing up user:', data.errors);
  //     return Promise.reject(data.errors);
  //   }
  //   dispatch({ type: actions.SIGN_UP, payload: data });
  //   dispatch({ type: actions.AUTHENTICATE, payload: true });
  //   const token = headers.authorization;
  //   localStorage.setItem('token', token);
  // } catch (error) {
  //   console.error('Error signing up user:', error);
  // }
};

export const login = async (dispatch, { email, password }) => {
  //TODO: delete fake auth
  console.log({ email, password });
  if (email === 'test@gmail.com' && password === '123456') {
    dispatch({ type: actions.AUTHENTICATE, payload: true });
    dispatch({ type: actions.LOGIN, payload: { email, password } });
    return true;
  } else {
    console.log('Error sign in user with email and password');
    return Promise.reject('Invalid credentials');
  }
  // *TODO: review this code
  // const options = {
  //   method: 'POST',
  //   url: 'https://cautious-octo-fishstick.onrender.com/api/v1/sign_in',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   },
  //   data: { email, password },
  // };
  // try {
  //   const { data, headers } = await axios.request(options);
  //   if (data.user.email === email && data.user.password === password) {
  //     dispatch({ type: actions.SIGN_UP, payload: data });
  //     dispatch({ type: actions.AUTHENTICATE, payload: true });
  //     const token = headers.authorization;
  //     localStorage.setItem('token', token);
  //   } else {
  //     dispatch({ type: actions.AUTHENTICATE, payload: false });
  //     console.log('Error sign in user with email and password');
  //   }
  // } catch (error) {
  //   console.error('Error sign in user:', error);
  // }
};

export const logout = (dispatch) => {
  dispatch({ type: actions.LOGOUT });
  localStorage.removeItem('token');
};
