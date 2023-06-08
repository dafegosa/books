import { useContext } from 'react';
import ButtonEditBook from '../../components/buttons/ButtonEditBook';

const BookListItem = ({ book, setOpenModal }) => {
  return (
    <li className=" p-1 flex flex-col justify-between md:flex-row md:justify-between">
      <div className="flex justify-between items-center w-full mx-4">
        <span className="px-6 py-2.5 text-left text-sm font-medium text-gray-600 md:text-left">
          {book.title}
        </span>
        <span className="hidden md:block text-xs font-semibold">
          page: {book.page}
        </span>
      </div>
      <ButtonEditBook setOpenModal={setOpenModal} />
    </li>
  );
};
export default BookListItem;
