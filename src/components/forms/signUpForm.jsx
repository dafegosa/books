import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        full_name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={Yup.object({
        full_name: Yup.string().required('Required'),
        email: Yup.string()
          .email('Invalid email addresss`')
          .required('Required'),
        password: Yup.string().required('Required'),
        passwordConfirm: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((r) => setTimeout(r, 500));
        setSubmitting(false);
      }}
    >
      <Form className="flex flex-col">
        <label
          htmlFor="full_name"
          className="block mb-3 text-sm font-medium text-gray-600"
        >
          Full name
        </label>
        <TextInput
          name="full_name"
          type="full_name"
          placeholder="Your name here"
          className="px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        />
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
        <label
          htmlFor="full_name"
          className="block mb-3 text-sm font-medium text-gray-600"
        >
          Password confirmation
        </label>
        <TextInput
          name="passwordConfirm"
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
    </Formik>
  );
};

export default SignUpForm;
