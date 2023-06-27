import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, setInitialValues } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';
import { updatePageNumber } from '../../store/apiCalls';

const UpdateFormPage = () => {
  return (
    <Formik
      initialValues={{
        pageNumber: '',
      }}
      validationSchema={Yup.object({
        pageNumber: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        updatePageNumber(values);
      }}
    >
      <Form className="mt-4 space-y-6">
        <div className="col-span-full">
          <TextInput
            label="Page number"
            name="pageNumber"
            type="number"
            placeholder="Page number"
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

export default UpdateFormPage;
