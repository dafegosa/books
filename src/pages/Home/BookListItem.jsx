import ButtonEditBook from '../../components/buttons/ButtonEditBook';

const BookListItem = ({ book }) => {
  return (
    <li className="flex flex-col sm:border sm:rounded-lg md:flex-row justify-around">
      <div className="flex flex-col md:flex-row  justify-between items-center w-full py-2">
        <div className="flex items-center px-1 gap-1">
          <span className="sm:order-2px-6 py-2.5 text-left text-sm font-extralight text-gray-600 md:hidden md:text-left">
            Mark as read
          </span>
          <input type="checkbox" className="sm:order-3 sm:bottom-2 w-4 h-4 " />
        </div>
        <span className="px-6 py-2.5 text-lg text-center font-bold text-gray-600">
          {book.title}
        </span>
        <span className="text-sm font-semibold  flex items-center">
          page: {book.page}
        </span>
      </div>
      <ButtonEditBook />
    </li>
  );
};
export default BookListItem;
