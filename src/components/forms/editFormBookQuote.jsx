import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';

const EditFormBookQuote = ({ id_book, id_sentence = 2 }) => {
  // Todo: update books sentences update
  return (
    <Formik
      initialValues={{
        id_book: id_book,
        id_sentence: id_sentence,
        sentence: '',
        page: '',
      }}
      validationSchema={Yup.object({
        id_book: Yup.string().required('Required'),
        id_sentence: Yup.string().required('Required'),
        sentences: Yup.string().required('Required'),
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
            label="id_book: "
            name="id_book"
            type="number"
            value={id_book}
            // className="hidden"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="id_Sentence: "
            name="id_sentence"
            type="number"
            value={id_sentence}
            // className="hidden"
          />
        </div>
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

export default EditFormBookQuote;
