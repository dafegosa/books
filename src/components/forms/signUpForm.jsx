import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';

import { useAuth } from '../../store/authContext/authContext';
import { signup } from '../../store/authContext/apiAuthCalls';

const SignUpForm = () => {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email addresss`')
          .required('Required'),
        name: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        password_confirmation: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
        console.log('values', values);
        signup(dispatch, values)
          .then(() => {
            console.log('Account created successfully');
            navigate('/account');
          })
          .catch((error) => {
            console.error(`Error creating account: , ${error}`);
            navigate('/account');
          });
      }}
    >
      <Form className="mt-4 space-y-6">
        <div className="col-span-full">
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="your.email.address@mail.com"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="your name"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <TextInput
            label="Password Confirmation"
            name="password_confirmation"
            type="password"
            placeholder="********"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div className="col-span-full">
          <button
            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
