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
            <ul key={id + book} className="py-2">
              <BookListItem book={book}></BookListItem>
            </ul>
          ))}
        </BookList>
      )}

      {items?.length === 0 && <EmptyWishList />}

      <AddBooksButton />

      {openModal && (
        <Modal>
          <div className="flex flex-col p-8">
            <div className="flex justify-between">
              <h3 className="text-2xl font-medium tracking-tight text-black sm:text-xl md:text-4xl text-center mb-8">
                {modalType === 'add' ? 'Add New Books' : 'Edit Book'}
              </h3>
              <button onClick={() => dispatch({ type: actions.TOGGLE_MODAL })}>
                {' '}
                close
              </button>
              <ion-icon
                className="close-circle-outline"
                onClick={() => dispatch({ type: actions.TOGGLE_MODAL })}
              />
            </div>
            {modalType === 'add' ? <AddFormBooks /> : <EditFormBooks />}
          </div>
        </Modal>
      )}
    </>
  );
};
export default AppUI;
