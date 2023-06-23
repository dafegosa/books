import { useContext, useId, useEffect } from 'react';

import { GlobalContext } from '../../store/globalContext';

import EmptyWishList from './EmptyWishList';
import AddBooksButton from '../../components/buttons/AddBooksButton';
import Modal from '../../components/modal/Modal';
import AddFormBooks from '../../components/forms/addFormBooks';
import BookList from './BookList';

import BookListItem from './BookListItem';
import EditFormBooks from '../../components/forms/editFormBooks ';
import Loading from '../Loading';

import { actions } from '../../store/actions';
import { fetchBooks } from '../../store/apiCalls';

const AppUI = () => {
  const id = useId();
  const {
    state: {
      books: { items, loadingBooks, openModal, modalType },
    },
    dispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    fetchBooks(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      dispatch({ type: actions.LOADING_BOOKS, payload: false });
    }, 500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [dispatch, items]);

  return (
    <>
      {loadingBooks ? (
        <Loading />
      ) : (
        <BookList>
          {items?.map((book) => (
            <ul key={book.id} className="py-2">
              <BookListItem book={book}></BookListItem>
            </ul>
          ))}
        </BookList>
      )}

      {items?.length === 0 && <EmptyWishList />}

      <AddBooksButton />

      {openModal && (
        <Modal>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex w-full justify-around">
              <h3 className="text-3xl font-medium tracking-tight text-gray-600 md:text-4xl text-center">
                {modalType === 'add' ? 'Add Books' : 'Edit Book'}
              </h3>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={() => dispatch({ type: actions.TOGGLE_MODAL })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-square-rounded-x"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10l4 4m0 -4l-4 4" />
                  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                </svg>
              </button>
            </div>
            {modalType === 'add' ? <AddFormBooks /> : <EditFormBooks />}
          </div>
        </Modal>
      )}
    </>
  );
};
export default AppUI;
