import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';
import { GlobalContext } from '../../store/globalContext';
import { addQuotesBook } from '../../store/apiCalls';
import LoadingLogin from '../../pages/Loading/LoadingLogin';

const AddFormBookQuote = () => {
  const { dispatch } = useContext(GlobalContext);
  const id_book = localStorage.getItem('bookSentencesId');
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingLogin />;
  }

  return (
    <Formik
      initialValues={{
        id_book: id_book,
        quote: '',
      }}
      validationSchema={Yup.object({
        id_book: Yup.string().required('Required'),
        quote: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setIsLoading(true);
        try {
          await addQuotesBook(dispatch, values);
        } catch (error) {
          alert(`"An·error·occurred·adding·book·quote."`);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <Form className="mt-4 space-y-6">
        <div className="col-span-full">
          <TextInput
            label="Quote"
            name="quote"
            type="text"
            placeholder="Quote sentence"
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

export default AddFormBookQuote;
