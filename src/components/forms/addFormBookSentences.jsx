import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';

const AddFormBookSentences = () => {
  const id_book = localStorage.getItem('bookSentencesId');
  return (
    <Formik
      initialValues={{
        id_book: id_book,
        sentence: '',
        page: '',
      }}
      validationSchema={Yup.object({
        id_book: Yup.string().required('Required'),
        sentence: Yup.string().required('Required'),
        page: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      <Form className="mt-4 space-y-6">
        <div className="col-span-full">
          <TextInput
            label="Sentence"
            name="sentence"
            type="text"
            placeholder="Book title"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Page"
            name="page"
            type="number"
            placeholder="Page sentence"
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

export default AddFormBookSentences;
