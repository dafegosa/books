import { NavLink } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SignInForm from '../../components/forms/signInForm';

const SignIn = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col sm:m-16 md:m-0">
        <div className="w-full max-w-md mx-auto md:mt-28">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black text-center">
                Let's get started!
              </h2>
            </div>
          </div>
          <SignInForm />
        </div>
        <div className="col-span-full">
          <NavLink to="/sign-up">
            <label
              className="block mt-8 text-center text-sm font-medium text-blue-500"
              name="email"
            >
              Don't have account yet?
            </label>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignIn;
