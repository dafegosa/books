import { Navigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import TextInput from '../inputFields/TextInput';
import * as Yup from 'yup';

import { login } from '../../store/authContext/apiAuthCalls';
import { useAuth } from '../../store/authContext/authContext';
import { actions } from '../../store/actions';

const SignInForm = () => {
  const { dispatch } = useAuth();
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
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
        console.log('values', values);

        login(dispatch, values)
          .then((doLogin) => {
            if (doLogin) {
              // return <Navigate to="/home" />;
              return true;
            }
          })
          .catch((error) => {
            console.error(`Error logging in: , ${error}`);
            return <Navigate to="/home" />;
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
