import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';
import { GlobalContext } from '../../store/globalContext';
import { editQuote } from '../../store/apiCalls';
import LoadingLogin from '../../pages/Loading/LoadingLogin';

const EditFormBookQuote = ({ id_book }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { books } = state;

  const book = books.items.find((book) => book.id === id_book);
  console.log(book);
  const id_quote = Number(localStorage.getItem('id_quote'));
  const quote = book?.quotes.find((quote) => quote.id === id_quote);
  console.log(quote);

  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingLogin />;
  }

  return (
    <Formik
      initialValues={{
        id_book: id_book,
        id_quote: id_quote,
        content: quote?.content,
      }}
      validationSchema={Yup.object({
        id_book: Yup.string().required('Required'),
        id_quote: Yup.string().required('Required'),
        content: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((r) => setTimeout(r, 500));
        try {
          await editQuote(dispatch, values);
          setIsLoading(true);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <Form className="mt-4 space-y-6">
        <div className="col-span-full">
          <TextInput
            label="Quote"
            name="content"
            type="text"
            placeholder="Book title"
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
