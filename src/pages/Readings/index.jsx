import React, { useEffect } from 'react';

import { GlobalContext } from '../../store/globalContext';
import BookList from '../Home/BookList';
import BookListItem from '../Home/BookListItem';
import AddBooksButton from '../../components/buttons/AddBooksButton';
import { actions } from '../../store/actions';
import { Link } from 'react-router-dom';
import Modal from '../../components/modal/Modal';

const Readings = () => {
  const {
    state: {
      books: { items, openModal },
    },
    dispatch,
  } = React.useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-row items-center justify-between w-full px-4 py-4 mx-auto bg-white border-b border-gray-200 sm:px-6">
        <h1 className="text-2xl w-full text-center font-medium tracking-tight text-black sm:text-4xl">
          My Readings
        </h1>
      </div>

      <section className="py-20 bg-gray-100 sm:py-9">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3"
          >
            {items?.map((book) => (
              <li key={book.id}>
                <div className="relative h-full p-6 bg-white rounded-3xl">
                  <blockquote className="relative">
                    <h3 className="text-base text-gray-500">{book.title}</h3>
                  </blockquote>
                  <div className="relative flex flex-col items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <div>
                      <div className="text-base text-black">{book.gender}</div>
                      <div className="m-3 text-sm text-gray-500">
                        <p>
                          {/* //todo: add description to book */}
                          {book.observations
                            ? book.observations
                            : 'No description for this book'}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/readings/${book.id}`}
                      className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                    >
                      Favorite sentences
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Readings;
