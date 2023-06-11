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
