import React, { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { GlobalContext } from '../../store/globalContext';
import { actions } from '../../store/actions';
import Modal from '../../components/modal/Modal';
import EditFormBookQuote from '../../components/forms/editFormBookQuote';
import { deleteQuote } from '../../store/apiCalls';
import ButtonEditBook from '../../components/buttons/ButtonEditBook';

const BookSentences = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleReload = () => {
    navigate('/readings', { replace: true });
  };

  const {
    state: {
      books: { items, openModal },
    },
    dispatch,
  } = React.useContext(GlobalContext);

  const book = items.find((book) => book.id === Number(id));

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-row items-center justify-between w-full px-4 py-4 mx-auto bg-white border-b border-gray-200 sm:px-6">
        <h1 className="text-2xl w-full text-center font-medium tracking-tight text-black sm:text-4xl">
          Book Quotes from {book.title}
        </h1>
      </div>

      <section className="py-20 bg-gray-100 sm:py-9">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <ul className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3">
            {book?.quotes?.length === 0 && (
              <li>
                <p className="text-base text-gray-500">
                  There are no quotes for this book
                </p>
              </li>
            )}
            {book?.quotes?.map((quote) => (
              <li key={quote.id}>
                <figure className="relative h-full p-6 bg-white rounded-3xl">
                  <blockquote className="relative">
                    <p className="text-base text-gray-500">{quote?.content}</p>
                  </blockquote>
                  <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                    <div className="flex flex-col">
                      <div className="m-3 text-sm text-gray-500">
                        {book.title}
                      </div>
                      <button
                        className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                        onClick={() => {
                          dispatch({
                            type: actions.TOGGLE_MODAL,
                          });
                          localStorage.setItem('id_quote', quote.id);
                        }}
                      >
                        Edit Quote
                      </button>
                      <ButtonEditBook
                        text={'Delete quote'}
                        actions={() => {
                          deleteQuote(dispatch, book.id, quote.id);
                          handleReload();
                        }}
                        variantStyles={
                          'text-white bg-red-500 hover:border-red-600 hover:text-red-600 focus-visible:outline-red-600 border-red-600 focus-visible:ring-red-600'
                        }
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {openModal && (
        <Modal>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex w-full justify-around">
              <h3 className="text-3xl font-medium tracking-tight text-gray-600 md:text-4xl text-center">
                Edit Book Quote
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
            <EditFormBookQuote id_book={Number(id)} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BookSentences;
