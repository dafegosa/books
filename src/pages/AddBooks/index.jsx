import React from 'react';
import AddFormBooks from '../../components/forms/addFormBooks';

const AddBooks = () => {
  return (
    <div className="flex flex-col sm:px-8 items-center justify-center w-full h-full">
      <div className="w-full max-w-md">
        <h2>
          <span className="block mb-3 text-3xl font-medium text-gray-600 text-center mt-2">
            Add Books To Your Wishlist
          </span>
        </h2>
        <AddFormBooks />
      </div>
    </div>
  );
};

export default AddBooks;
