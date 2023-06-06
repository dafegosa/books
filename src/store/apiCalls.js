import axios from 'axios';
import { actions } from './actions';

export const fetchBooks = async (dispatch) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api');
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
