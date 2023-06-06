import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actions.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actions.SET_BOOKS:
      let titles = [];
      action.payload.items.map((book) => {
        titles.push(book.volumeInfo.title);
      });
      return { ...state, books: titles };
    default:
      return state;
  }
};
