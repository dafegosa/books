import { useContext, useState } from 'react';
import { Form, Formik } from 'formik';

import TextInput from '../inputFields/TextInput';
import * as Yup from 'yup';
import { signIn } from '../../store/apiCalls';
import { GlobalContext } from '../../store/globalContext';
import LoadingLogin from '../../pages/Loading/LoadingLogin';

const SignInForm = () => {
  const { dispatch } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <LoadingLogin />;
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email addresss`')
          .required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={async (values) => {
        setIsLoading(true);
        try {
          await signIn(values, dispatch);
        } catch (error) {
          alert('An error occurred during sign in.');
        } finally {
          setIsLoading(false);
        }
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
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            labelStyles="block mb-3 text-sm font-medium text-gray-600"
            inputStyles="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="col-span-full">
          <button
            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            type="submit"
          >
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignInForm;
