import { useContext } from 'react';

import { GlobalContext } from '../../store/globalContext';
import { actions } from '../../store/actions';

const ButtonEditBook = () => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <button
      // className="bg-blue-500 rounded md:w-1/3 "
      className="items-center justify-center w-full md:w1/12 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-1/2 lg:ml-6 focus-visible:outline-black text-sm focus-visible:ring-black"
      onClick={() => {
        dispatch({ type: actions.TOGGLE_MODAL });
        dispatch({ type: actions.SET_MODAL_TYPE, payload: 'edit' });
      }}
    >
      Edit
    </button>
  );
};
export default ButtonEditBook;
