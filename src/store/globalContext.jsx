import React, { createContext, useReducer, useState } from 'react';
import { reducer } from './reducer';

const initialState = {
  count: 0,
  books: [],
};

/**
 * @todo Move local states (openModal and modalType) to the global store.
 * @todo Move logic of setOpenModal and setModalType to the reducer.
 */

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('add');

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        openModal,
        setOpenModal,
        modalType,
        setModalType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
