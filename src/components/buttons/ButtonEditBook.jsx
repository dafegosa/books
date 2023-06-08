import { useContext } from 'react';

import { GlobalContext } from '../../store/globalContext';

const ButtonEditBook = ({ setOpenModal }) => {
  const { setModalType } = useContext(GlobalContext);
  return (
    <button
      // className="bg-blue-500 rounded md:w-1/3 "
      className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
      onClick={() => {
        setOpenModal((state) => !state);
        setModalType('edit');
      }}
    >
      Edit
    </button>
  );
};
export default ButtonEditBook;
