import React from 'react';
import Footer from '../../components/Footer';

const Loading = () => {
  const renderLoadingItems = () => {
    const loadingItems = [];

    for (let i = 0; i < 5; i++) {
      loadingItems.push(
        <div className="w-60 border-2 h-2/3 rounded-md mx-auto my-2">
          <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div className="w-12 bg-gray-300 h-12 rounded-lg "></div>
            <div className="flex flex-col space-y-3">
              <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
              <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
            </div>
          </div>
        </div>
      );
    }

    return loadingItems;
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {renderLoadingItems()}
      <Footer />
    </div>
  );
};

export default Loading;
