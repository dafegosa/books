import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="bg-white fixed top-0 left-0 w-full h-full overflow-y-auto z-10">
      {children}
    </div>,
    document.getElementById('modal')
  );
};
export default Modal;
