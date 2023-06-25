import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../store/globalContext';
import { actions } from '../../store/actions';
import Modal from '../../components/modal/Modal';
import EditFormBookSentences from '../../components/forms/editFormBookSentences';

const BookSentences = () => {
  const { id } = useParams();

  const {
    state: {
      books: { items, openModal, modalType },
    },
    dispatch,
  } = React.useContext(GlobalContext);

  // TODO: get book by id and show sentences
  // Todo: build list of sentences

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-row items-center justify-between w-full px-4 py-4 mx-auto bg-white border-b border-gray-200 sm:px-6">
        <h1 className="text-2xl w-full text-center font-medium tracking-tight text-black sm:text-4xl">
          Book Sentences
        </h1>
      </div>

      <section class="py-20 bg-gray-100 sm:py-9">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <ul
            role="list"
            class="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <figure className="relative h-full p-6 bg-white rounded-3xl">
                <blockquote className="relative">
                  <p className="text-base text-gray-500">
                    "Muchos años después, frente al pelotón de fusilamiento, el
                    coronel Aureliano Buendía había de recordar aquella tarde
                    remota en que su padre lo llevó a conocer el hielo."
                  </p>
                </blockquote>
                <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                  <div>
                    <div className="text-base text-black">Page 1</div>
                    <div className="mt-1 text-sm text-gray-500">
                      Cien años de soledad
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-gray-50">
                    <button
                      className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                      onClick={() => dispatch({ type: actions.TOGGLE_MODAL })}
                    >
                      Edit
                    </button>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
      {openModal && (
        <Modal>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex w-full justify-around">
              <h3 className="text-3xl font-medium tracking-tight text-gray-600 md:text-4xl text-center">
                Edit Book Sentences
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
            <EditFormBookSentences id_book={id} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BookSentences;
