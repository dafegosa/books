import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../inputFields/TextInput';

const SignUpForm = () => {
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
        passwordConfirm: Yup.string().required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        await new Promise((r) => setTimeout(r, 500));
        setSubmitting(false);
      }}
    >
      <Form className="flex flex-col">
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="your.email.address@mail.com"
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="********"
        />
        <TextInput
          label="Password Confirmation"
          name="passwordConfirm"
          type="password"
          placeholder="********"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
