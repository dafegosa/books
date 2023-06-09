import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actions.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actions.SET_BOOKS:
      let titles = [];
      action?.payload?.data?.books?.forEach((book) => {
        titles.push(book);
      });
      return { ...state, books: { ...state.books, items: titles } };
    case actions.LOADING_BOOKS:
      return {
        ...state,
        books: {
          ...state.books,
          loadingBooks: action.payload,
        },
      };
    case actions.TOGGLE_MODAL:
      return {
        ...state,
        books: {
          ...state.books,
          openModal: !state.books.openModal,
        },
      };
    case actions.SET_MODAL_TYPE:
      return {
        ...state,
        books: {
          ...state.books,
          modalType: action.payload,
        },
      };
    case actions.AUTH:
      return {
        ...state,
        user: {
          authenticated: true,
          info: action.payload,
        },
      };
    case actions.SIGN_OUT:
      return {
        ...state,
        user: {
          authenticated: false,
          info: {},
        },
      };
    case actions.SET_OPENAI_RESPONSE:
      return {
        ...state,
        openai: {
          response: action.payload,
        },
      };
    case actions.CLEAN_OPENAI_RESPONSE:
      return {
        ...state,
        openai: {
          response: null,
        },
      };
    default:
      return state;
  }
};
