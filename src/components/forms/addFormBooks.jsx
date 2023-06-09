import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInput from '../inputFields/TextInput';
import { createBook } from '../../store/apiCalls';
import { GlobalContext } from '../../store/globalContext';
import LoadingLogin from '../../pages/Loading/LoadingLogin';

const AddFormBooks = () => {
  const { dispatch } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingLogin />;
  }

  return (
    <Formik
      initialValues={{
        genre: '',
        title: '',
        author: '',
        cost: '',
        observations: '',
      }}
      validationSchema={Yup.object({
        genre: Yup.string().required('Required'),
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        cost: Yup.number().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setIsLoading(true);
        try {
          await createBook(dispatch, values);
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
            label="genre"
            name="genre"
            type="genre"
            placeholder="gender"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Title"
            name="title"
            type="text"
            placeholder="Book title"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Author"
            name="author"
            type="text"
            placeholder="Book author"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Cost"
            name="cost"
            type="text"
            placeholder="Cost"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Observations"
            name="observations"
            type="text"
            placeholder="Book observations"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="col-span-full">
          <button
            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddFormBooks;
