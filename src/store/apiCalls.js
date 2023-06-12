import axios from 'axios';
import { actions } from './actions';

export const fetchBooks = async (dispatch) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=free-ebooks'
    );
    dispatch({ type: actions.SET_BOOKS, payload: response.data });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

export const increment = (dispatch) => {
  dispatch({ type: 'INCREMENT' });
};

export const decrement = (dispatch) => {
  dispatch({ type: 'DECREMENT' });
};

// AUTH

export const signUp = async (values, dispatch) => {
  try {
    const response = await axios.post(
      'https://cautious-octo-fishstick.onrender.com/api/v1/sign_up',
      {
        user: {
          email: values.email,
          password: values.password,
          password_confirmation: values.passwordConfirm,
        },
      }
    );
    alert('RESPONSE', JSON.stringify(response));
    dispatch({ type: 'SIGN_UP', payload: values });
  } catch (error) {
    console.error(error);
  }
};
