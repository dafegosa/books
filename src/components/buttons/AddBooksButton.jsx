import { useContext } from 'react';
import { GlobalContext } from '../../store/globalContext';
import { actions } from '../../store/actions';

function AddBooksButton() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <button
      className="bg-[#b6c0c3] shadow-[0px 5px 25px rgba(97, 218, 250, 0.5)] border-none rounded-full cursor-pointer text-5xl fixed bottom-6 right-2 font-bold text-[#FAFAFA] flex justify-center  h-16 w-16 z-10 transform rotate-0 transition duration-300 ease hover:rotate-[224deg]"
      onClick={() => {
        dispatch({ type: actions.TOGGLE_MODAL });
        dispatch({ type: actions.SET_MODAL_TYPE, payload: 'add' });
      }}
    >
      <span>+</span>
    </button>
  );
}
export default AddBooksButton;
