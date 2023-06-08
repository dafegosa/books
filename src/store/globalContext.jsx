import React, { createContext, useReducer, useState } from 'react';
import { reducer } from './reducer';

const initialState = {
  count: 0,
  books: [],
};

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openModal, setOpenModal] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ state, dispatch, openModal, setOpenModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
