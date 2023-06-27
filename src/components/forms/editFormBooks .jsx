import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';
import { GlobalContext } from '../../store/globalContext';
import { editBook } from '../../store/apiCalls';

const EditFormBooks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { books } = state;
  const bookToEdit = Number(localStorage.getItem('bookIdToEdit'));
  const toEdit = books.items.find((book) => book.id === bookToEdit);
  return (
    <Formik
      initialValues={{
        gender: toEdit?.gender || '',
        title: toEdit?.title || '',
        author: toEdit?.author || '',
        cost: toEdit?.cost || '',
        observations: toEdit?.observations || '',
      }}
      validationSchema={Yup.object({
        gender: Yup.string().required('Required'),
        title: Yup.string().required('Required'),
        author: Yup.string().required('Required'),
        cost: Yup.number().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((r) => setTimeout(r, 500));
        editBook(dispatch, values);
      }}
    >
      <Form className="mt-4 space-y-6">
        <div className="col-span-full">
          <TextInput
            label="gender"
            name="gender"
            type="gender"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Title"
            name="title"
            type="text"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Author"
            name="author"
            type="text"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Cost"
            name="cost"
            type="text"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Observations"
            name="observations"
            type="text"
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

export default EditFormBooks;
