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
        <div className="w-5/12">
          <span className="py-2.5 text-lg text-left font-bold text-gray-600">
            {book.name}
          </span>
        </div>
        <div className="w-2/12">
          <span className="text-xs font-semibold  flex items-center">
            author: {book.author}
          </span>
        </div>
      </div>
      <div className="w-44 flex justify-end py-1">
        <ButtonEditBook
          text={'Edit'}
          actions={() => {
            dispatch({ type: actions.TOGGLE_MODAL });
            dispatch({ type: actions.SET_MODAL_TYPE, payload: 'edit' });
          }}
          variantStyles={
            'text-white bg-black hover:border-black hover:text-black focus-visible:outline-black border-black focus-visible:ring-black'
          }
        />
      </div>
      <div className="w-40 flex justify-end mr-2 py-1">
        <ButtonEditBook
          text={'Delete'}
          actions={() => deleteBook(dispatch, book.id)}
          variantStyles={
            'text-white bg-red-600 hover:border-red-600 hover:text-red-600 focus-visible:outline-red-600 border-red-600 focus-visible:ring-red-600'
          }
        />
      </div>
    </li>
  );
};
export default BookListItem;
