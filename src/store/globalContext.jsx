import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  count: 0,
  books: {
    items: [],
    loadingBooks: true,
    openModal: false,
    modalType: 'add',
  },
  user: {
    authenticated: false,
    info: {},
  },
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
