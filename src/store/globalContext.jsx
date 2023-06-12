import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const initialState = {
  count: 0,
  books: {
    items: [],
    openModal: false,
    modalType: 'add',
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
