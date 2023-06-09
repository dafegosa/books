import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actions.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actions.SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
