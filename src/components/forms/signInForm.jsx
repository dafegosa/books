import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';

import { useAuth } from '../../Context/authContext';

const SignInForm = () => {
  const { login } = useAuth();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email addresss`')
          .required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={async (values) => {
        login(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            htmlFor="full_name"
            className="block mb-3 text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <TextInput
            name="email"
            type="email"
            placeholder="your.email.address@mail.com"
            className="px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
          <label
            htmlFor="full_name"
            className="block mb-3 text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <TextInput
            name="password"
            type="password"
            placeholder="********"
            className="px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
          <button
            type="submit"
            className="items-center justify-center w-full mt-7 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            Create account
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
