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
  //Todo: delete console.log
  console.log({ email, name, password, password_confirmation });
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
    dispatch({ type: actions.AUTHENTICATE, payload: true });
    const token = headers.authorization;
    localStorage.setItem('token', token);
  } catch (error) {
    console.error(error);
  }
};

export const login = async (dispatch, { email, password }) => {
  //TODO: delete console.log
  console.log({ email, password });
  dispatch({ type: actions.AUTHENTICATE, payload: true });
  dispatch({ type: actions.LOGIN, payload: { email, password } });
  return true;

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
  //   dispatch({ type: actions.SIGN_UP, payload: data });
  //   dispatch({ type: actions.AUTHENTICATE, payload: true });
  //   const token = headers.authorization;
  //   localStorage.setItem('token', token);
  // } catch (error) {
  //   console.error('Error sign in user:', error);
  // }
};
