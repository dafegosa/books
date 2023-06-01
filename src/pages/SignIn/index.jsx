import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
          <form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-gray-600"
                  name="email"
                >
                  Email
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="email@example.com"
                  autocomplete="off"
                  type="email"
                />
              </div>
              <div className="col-span-full">
                <label
                  className="block mb-3 text-sm font-medium text-gray-600"
                  name="company"
                >
                  Password
                </label>
                <input
                  className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Password"
                  type="password"
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
            </div>
          </form>
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
