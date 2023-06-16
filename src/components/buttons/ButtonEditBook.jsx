const ButtonEditBook = ({ variantStyles, text, actions }) => {
  return (
    <button
      className={`items-center justify-center w-full md:w1/12 px-6 py-2.5 text-center duration-200 border-2 rounded-full inline-flex hover:bg-transparent focus:outline-none lg:w-1/2 lg:ml-6 text-sm focus-visible:ring-black ${variantStyles}`}
      onClick={actions}
    >
      {text}
    </button>
  );
};
export default ButtonEditBook;
