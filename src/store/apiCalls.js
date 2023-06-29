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
    dispatch({ type: actions.TOGGLE_MODAL });
    alert('Book added successfully.');
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

export const editBook = async (dispatch, values) => {
  const bookId = Number(localStorage.getItem('bookIdToEdit'));

  const currentDate = new Date(); // Obtiene la fecha actual
  const formattedDate = currentDate.toISOString().split('T')[0];

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
    const { data } = await axios.request(options);
    await fetchBooks(dispatch);
    dispatch({ type: actions.TOGGLE_MODAL });
    alert('Book edited successfully.');
  } catch (error) {
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
    const { data } = await axios.request(options);
    await fetchBooks(dispatch);
  } catch (error) {
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
    alert('Page number updated successfully.');
  } catch (error) {
    console.error(error);
  }
};

export const addQuotesBook = async (dispatch, values) => {
  const { id_book, quote } = values;

  const options = {
    method: 'POST',
    url: `https://cautious-octo-fishstick.onrender.com/books/${id_book}/quotes`,
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: { content: quote },
  };

  try {
    const { data } = await axios.request(options);
    await fetchBooks(dispatch);
    alert('Quote added successfully.');
  } catch (error) {
    console.error(error);
  }
};
