import { useContext } from 'react';

import { GlobalContext } from '../../store/globalContext';

import EmptyWishList from './EmptyWishList';
import AddBooksButton from '../../components/addBooksButton/AddBooksButton';
import Modal from '../../components/modal/Modal';

const AppUI = () => {
  const { state, dispatch, setOpenModal, openModal } =
    useContext(GlobalContext);
  return (
    <>
      {state.books.map((book, idx) => (
        <ul key={idx + Math.random()}>
          <li>{book}</li>
        </ul>
      ))}

      {state.books.length === 0 && <EmptyWishList />}

      <AddBooksButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <h3>Form here to added new Books</h3>
        </Modal>
      )}
    </>
  );
};
export default AppUI;
