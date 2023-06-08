import { useContext, useId, useState } from 'react';

import { GlobalContext } from '../../store/globalContext';

import EmptyWishList from './EmptyWishList';
import AddBooksButton from '../../components/buttons/AddBooksButton';
import Modal from '../../components/modal/Modal';
import AddFormBooks from '../../components/forms/addFormBooks';
import BookList from './BookList';

import BookListItem from './BookListItem';
import EditFormBooks from '../../components/forms/editFormBooks ';

const books = [
  {
    gender: 'Ficción',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    cost: 20.99,
    observation: 'Premio Nobel de Literatura',
    page: 20,
  },
  {
    gender: 'Ficción',
    title: 'El amor en los tiempos del cólera',
    author: 'Gabriel García Márquez',
    cost: 18.99,
    observation: 'Premio Nobel de Literatura',
    page: 93,
  },
  {
    gender: 'No ficción',
    title: 'Sapiens. De animales a dioses',
    author: 'Yuval Noah Harari',
    cost: 25.99,
    observation: 'Bestseller internacional',
    page: 55,
  },
  {
    gender: 'No ficción',
    title: 'El poder del ahora',
    author: 'Eckhart Tolle',
    cost: 15.99,
    observation: 'Bestseller internacional',
    page: 0,
  },
  {
    gender: 'Ficción',
    title: 'La sombra del viento',
    author: 'Carlos Ruiz Zafón',
    cost: 22.99,
    observation: 'Bestseller internacional',
    page: 44,
  },
  {
    gender: 'Ficción',
    title: 'La sombra del viento',
    author: 'Carlos Ruiz Zafón',
    cost: 22.99,
    observation: 'Bestseller internacional',
    page: 44,
  },
  {
    gender: 'Ficción',
    title: 'La sombra del viento',
    author: 'Carlos Ruiz Zafón',
    cost: 22.99,
    observation: 'Bestseller internacional',
    page: 44,
  },
];

const AppUI = () => {
  const id = useId();
  const {
    state,
    dispatch,
    setTypeModal,
    modalType,
    setModalType,
    openModal,
    setOpenModal,
  } = useContext(GlobalContext);

  return (
    <>
      <BookList>
        {books.map((book) => (
          <ul key={id + book.title}>
            <BookListItem
              book={book}
              setOpenModal={setOpenModal}
            ></BookListItem>
          </ul>
        ))}
      </BookList>

      {books.length === 0 && <EmptyWishList />}

      <AddBooksButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <div className="flex flex-col p-8">
            <div className="flex justify-between">
              <h3 className="text-2xl font-medium tracking-tight text-black sm:text-xl md:text-4xl text-center mb-8">
                {modalType === 'add' ? 'Add New Books' : 'Edit Book'}
              </h3>
              <ion-icon
                name="close-circle-outline"
                onClick={() => setOpenModal((state) => !state)}
              ></ion-icon>
            </div>
            {modalType === 'add' ? <AddFormBooks /> : <EditFormBooks />}
          </div>
        </Modal>
      )}
    </>
  );
};
export default AppUI;
