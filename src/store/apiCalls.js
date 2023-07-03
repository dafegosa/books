import axios from 'axios';
import { actions } from './actions';
import { toast, Slide } from 'react-toastify';
import { Configuration, OpenAIApi } from 'openai';
import { generatePrompt } from '../utils/propmtGenerator';
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

export const editQuote = async (dispatch, values) => {
  const { id_book, id_quote } = values;
  const options = {
    method: 'PUT',
    url: `https://cautious-octo-fishstick.onrender.com/api/v1/books/${id_book}/quotes/${id_quote}`,
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: { quote: { content: values.content } },
  };

  try {
    await axios.request(options);
    await fetchBooks(dispatch);
    notify('Quote edited successfully!', NOTIFY_TYPES.success);
    dispatch({ type: actions.TOGGLE_MODAL });
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error(error);
  }
};

export const deleteQuote = async (dispatch, id_book, id_quote) => {
  const options = {
    method: 'DELETE',
    url: `https://cautious-octo-fishstick.onrender.com/api/v1/books/${id_book}/quotes/${id_quote}`,
    headers: {
      Authorization: localStorage.getItem('token') || '',
      Accept: 'application/json',
    },
  };

  try {
    const { data } = await axios.request(options);
    notify('Quote deleted successfully!', NOTIFY_TYPES.success);
    fetchBooks(dispatch);
    console.log(data);
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error(error);
  }
};

// OPENAI

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
export const handleCallOpenai = async (dispatch, values) => {
  const prompt = generatePrompt(values);

  if (!prompt) {
    notify('Please provide at least one preference', NOTIFY_TYPES.warning);
    return;
  }

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0.6,
      max_tokens: 200,
    });
    dispatch({
      type: actions.SET_OPENAI_RESPONSE,
      payload: response?.data?.choices[0]?.text,
    });
  } catch (error) {
    notify('Something were wrong :(', NOTIFY_TYPES.error);
    console.error(error);
  }
};
