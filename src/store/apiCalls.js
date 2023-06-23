import axios from 'axios';
import { actions } from './actions';

// BOOKS
export const fetchBooks = async (dispatch) => {
  try {
    const response = await axios.get(
      'https://cautious-octo-fishstick.onrender.com/api/v1/books',
      {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      }
    );

    dispatch({ type: actions.SET_BOOKS, payload: response.data });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

export const createBook = async (dispatch, values) => {
  try {
    await axios.post(
      'https://cautious-octo-fishstick.onrender.com/api/v1/books',
      {
        book: {
          name: values.title,
          author: values.author,
          read_at: '2023-06-01',
        },
      },
      {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      }
    );
    await fetchBooks(dispatch);
    dispatch({ type: actions.TOGGLE_MODAL });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

export const deleteBook = async (dispatch, id) => {
  try {
    await axios.delete(
      `https://cautious-octo-fishstick.onrender.com/api/v1/books/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      }
    );
    await fetchBooks(dispatch);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// AUTH
export const signUp = async (values, dispatch) => {
  try {
    const response = await axios.post(
      'https://cautious-octo-fishstick.onrender.com/api/v1/sign_up',
      {
        user: {
          name: values.name,
          email: values.email,
          password: values.password,
          password_confirmation: values.passwordConfirm,
        },
      }
    );
    localStorage.setItem('token', response.headers.token);
    dispatch({ type: 'AUTH', payload: response?.data?.data?.user });
  } catch (error) {
    console.error(error);
  }
};

export const signIn = async (values, dispatch) => {
  try {
    const response = await axios.post(
      'https://cautious-octo-fishstick.onrender.com/api/v1/sign_in',
      {
        user: {
          email: values.email,
          password: values.password,
        },
      }
    );
    localStorage.setItem('token', response.headers.token);
    dispatch({ type: 'AUTH', payload: response?.data?.data?.user });
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'SIGN_OUT' });
};

// OTHERS
export const increment = (dispatch) => {
  dispatch({ type: 'INCREMENT' });
};

export const decrement = (dispatch) => {
  dispatch({ type: 'DECREMENT' });
};
