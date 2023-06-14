const LoadingLogin = () => {
  return (
    <div className="w-full h-screen z-10 flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin icon icon-tabler icon-tabler-book"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
        <path d="M3 6l0 13" />
        <path d="M12 6l0 13" />
        <path d="M21 6l0 13" />
      </svg>
    </div>
  );
};
export default LoadingLogin;
