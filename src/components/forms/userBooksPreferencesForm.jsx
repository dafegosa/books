import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';

import TextInput from '../inputFields/TextInput';
import { handleCallOpenai } from '../../store/apiCalls';
import { GlobalContext } from '../../store/globalContext';
import LoadingLogin from '../../pages/Loading/LoadingLogin';
import { actions } from '../../store/actions';
import { scrollToPageBottom } from '../../utils/scrollToPageBottom';

const UserBooksPreferencesForm = () => {
  const { dispatch } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        favoriteAuthor: '',
        preferredGenre: '',
        favoriteBook: '',
        bookLength: null,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setIsLoading(true);
        try {
          dispatch({
            type: actions.CLEAN_OPENAI_RESPONSE,
          });
          await handleCallOpenai(dispatch, values);
        } catch (error) {
          alert('An error occurred adding book.');
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <Form className="mt-4 space-y-6">
        <div className="col-span-full">
          <TextInput
            label="Favorite Author"
            name="favoriteAuthor"
            type="text"
            placeholder="Your Favorite author"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Preferred Genre"
            name="preferredGenre"
            type="text"
            placeholder="Your preferred genre"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Your favorite book"
            name="favoriteBook"
            type="text"
            placeholder="Book author"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Book Length"
            name="bookLength"
            type="number"
            placeholder="Book length (Pages)"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="col-span-full">
          {isLoading ? (
            <LoadingLogin noFullScreen />
          ) : (
            <button
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
              type="submit"
              href="#response"
              onClick={scrollToPageBottom}
            >
              Recommend me a book
            </button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default UserBooksPreferencesForm;
