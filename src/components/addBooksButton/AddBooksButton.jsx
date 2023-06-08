import { useContext } from 'react';

function AddBooksButton({ setOpenModal }) {
  return (
    <button
      className="w-full bg-blue-500 p-4 mt-4"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      Add Books
    </button>
  );
}
export default AddBooksButton;
