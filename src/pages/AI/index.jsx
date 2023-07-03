import React, { useContext } from 'react';
import UserBooksPreferencesForm from '../../components/forms/userBooksPreferencesForm';
import { GlobalContext } from '../../store/globalContext';

const Openai = () => {
  const {
    state: {
      openai: { response },
    },
  } = useContext(GlobalContext);

  return (
    <>
      <h2 className="text-4xl text-black text-center mt-14">
        Welcome to our Book Recommendation feature!
      </h2>
      <div className="mx-80 mt-10 text-justify">
        <p className="mt-10 text-justify">
          <strong>Are you looking for your next great read?</strong> Our
          AI-powered book recommendation system is here to help you discover new
          books based on your preferences.
        </p>
        <p className="text-justify">
          To get started, please provide us with some information about your
          reading preferences. Feel free to share your favorite author,
          preferred genre, favorite book so far, and any specific desired book
          length. The more details you provide, the better we can tailor our
          recommendations to your taste.
        </p>
        <p className=" mt-5">Get ready to embark on a new reading adventure!</p>
      </div>
      <div className="w-full max-w-md mx-auto md:mt-14">
        <UserBooksPreferencesForm />
        <p className="w-full mt-10 mb-80" href="#response">
          {response && response}
        </p>
      </div>
    </>
  );
};

export default Openai;
