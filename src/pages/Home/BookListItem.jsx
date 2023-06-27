import { useContext } from 'react';
import ButtonEditBook from '../../components/buttons/ButtonEditBook';
import { actions } from '../../store/actions';
import { GlobalContext } from '../../store/globalContext';
import { deleteBook } from '../../store/apiCalls';

const BookListItem = ({ book }) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <li className="flex flex-col sm:border sm:rounded-lg md:flex-row justify-around">
      <div className="flex flex-col md:flex-row  justify-between items-center w-full py-2">
        <div className="flex items-center px-1 gap-1">
          <span className="sm:order-2px-6 py-2.5 text-left text-sm font-extralight text-gray-600 md:hidden md:text-left">
            Mark as read
          </span>
          <input
            type="checkbox"
            className="sm:order-3 sm:bottom-2 w-4 h-4 ml-2"
          />
        </div>
        <div className="sm:w-full sm:text-center md:w-5/12">
          <span className="py-2.5 text-lg text-left font-bold text-gray-600">
            {book.title}
          </span>
        </div>
        <div className="sm:w-full sm:text-center md:w-2/12">
          <span className="text-xs font-semibold md:flex items-center">
            {book.author}
          </span>
        </div>
        <div className="sm:w-full sm:text-center md:w-2/12">
          <span className="text-xs font-semibold md:flex items-center">
            page:
          </span>
          <span
            onClick={() => {
              dispatch({ type: actions.TOGGLE_MODAL });
              dispatch({ type: actions.SET_MODAL_TYPE, payload: 'updatePage' });
              localStorage.setItem('bookId', book.id);
            }}
            className="text-xl ml-3 font-semibold text-gray-800 md:flex items-center hover:text-cyan-400 cursor-pointer"
          >
            {/* {book.page} */}
            53
          </span>
        </div>
      </div>
      <div className="sm:w-full md:w-44 flex justify-end py-1">
        <ButtonEditBook
          text={'Edit'}
          actions={() => {
            dispatch({ type: actions.TOGGLE_MODAL });
            dispatch({ type: actions.SET_MODAL_TYPE, payload: 'edit' });
            localStorage.setItem('bookIdToEdit', book.id);
          }}
          variantStyles={
            'text-white bg-black hover:border-black hover:text-black focus-visible:outline-black border-black focus-visible:ring-black'
          }
        />
      </div>
      <div className="sm:w-full md:w-40 flex justify-end mr-2 py-1">
        <ButtonEditBook
          text={'Delete'}
          actions={() => deleteBook(dispatch, book.id)}
          variantStyles={
            'text-white bg-red-500 hover:border-red-600 hover:text-red-600 focus-visible:outline-red-600 border-red-600 focus-visible:ring-red-600'
          }
        />
      </div>
    </li>
  );
};
export default BookListItem;
