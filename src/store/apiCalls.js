import axios from 'axios';
import { actions } from './actions';
import { toast, Slide } from 'react-toastify';
const NOTIFY_TYPES = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
  default: 'default',
};
const notify = (message, type) =>
  toast[type](message, {
    position: 'top-center',
    transition: Slide,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
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
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error('Error fetching books:', error);
  }
};

export const createBook = async (dispatch, values) => {
  try {
    await axios.post(
      'https://cautious-octo-fishstick.onrender.com/api/v1/books',
      {
        book: {
          title: values.title,
          author: values.author,
          cost: values.cost,
          gender: values.gender,
          observations: values.observations,
        },
      },
      {
        headers: {
          Authorization: localStorage.getItem('token') || '',
        },
      }
    );
    await fetchBooks(dispatch);
    notify('Book added successfully', NOTIFY_TYPES.success);
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error('Error fetching books:', error);
  }
};

export const editBook = async (dispatch, values) => {
  const bookId = Number(localStorage.getItem('bookIdToEdit'));

  const options = {
    method: 'PUT',
    url: `https://cautious-octo-fishstick.onrender.com/api/v1/books/${bookId}`,
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: {
      book: {
        cost: values.cost,
        title: values.title,
        author: values.author,
        gender: values.gender,
        observations: values.observations,
        read_at: '',
      },
    },
  };

  try {
    await axios.request(options);
    await fetchBooks(dispatch);
    dispatch({ type: actions.TOGGLE_MODAL });
    notify('Book edited successfully!', NOTIFY_TYPES.success);
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error(error);
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
    notify('Something were wrong :(', NOTIFY_TYPES.error);
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
    notify('Something were wrong :(', NOTIFY_TYPES.error);
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
    notify('Something were wrong :(', NOTIFY_TYPES.error);
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

export const markAsRead = async (dispatch, id) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];

  const options = {
    method: 'PATCH',
    url: `https://cautious-octo-fishstick.onrender.com/api/v1/books/${id}`,
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: {
      book: {
        read_at: formattedDate,
      },
    },
  };

  try {
    await axios.request(options);
    await fetchBooks(dispatch);
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error(error);
  }
};

export const updatePageNumber = async (values, dispatch) => {
  const bookId = Number(localStorage.getItem('bookId'));
  try {
    axios.put(
      `https://cautious-octo-fishstick.onrender.com/api/v1/books/${bookId}`,
      {
        book: {
          page: Number(values.pageNumber),
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
    notify('Page number updated successfully!', NOTIFY_TYPES.success);
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error(error);
  }
};

export const addQuotesBook = async (dispatch, values) => {
  const { id_book, quote } = values;

  const options = {
    method: 'POST',
    url: `https://cautious-octo-fishstick.onrender.com/api/v1/books/${id_book}/quotes`,
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: { content: quote },
  };

  try {
    await axios.request(options);
    await fetchBooks(dispatch);
    notify('Quote added successfully!', NOTIFY_TYPES.success);
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error(error);
  }
};
