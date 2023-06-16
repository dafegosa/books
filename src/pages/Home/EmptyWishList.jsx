const EmptyWishList = () => {
  return (
    <div className="text-center text-lg md:text-xl">
      <h2>You don't have any books in your Wishlist</h2>
      <div className="text-center flex justify-center mt-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse icon icon-tabler icon-tabler-book"
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
    </div>
  );
};
export default EmptyWishList;
