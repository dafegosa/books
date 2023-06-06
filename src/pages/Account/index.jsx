import { useState } from 'react';

import Footer from '../../components/Footer';
import SignUpForm from '../../components/forms/signUpForm';
import SignInForm from '../../components/forms/formSignIn';

const Account = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:m-16 md:m-0">
        <div className="w-full max-w-md mx-auto md:mt-28">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black text-center">
                Let's get started!
              </h2>
            </div>
          </div>
          {hasAccount ? <SignInForm /> : <SignUpForm />}
        </div>
        <div className="w-full max-w-md mx-auto">
          <button
            className="w-full"
            type="button"
            onClick={() => setHasAccount(!hasAccount)}
          >
            <label
              className="block mt-8 text-center text-sm font-medium text-blue-500 cursor-pointer"
              name="email"
            >
              {hasAccount
                ? "Don't have account yet?"
                : 'I already have an account'}
            </label>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Account;
