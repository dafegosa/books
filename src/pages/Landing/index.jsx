import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-200">
      <Navbar />
      <div className="flex h-auto bg-white">
        <div className="flex flex-col justify-center h-[74vh] flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
          <div className="w-full mx-auto lg:max-w-6xl">
            <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
              <div>
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  Reading Wishlist
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Use this paragraph to share information about your company or
                  products. Make it engaging and interesting, and showcase your
                  brand's personality. Thanks for visiting our website!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center max-w-lg gap-3 mx-auto mt-10 lg:flex-row lg:justify-start">
                <Link
                  to="/sign-in"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Get started
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                >
                  Learn more
                  <span aria-hidden="true"> → </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 lg:block">
          <div>
            <img
              className="absolute inset-0 object-cover w-full h-full bg-gray-200 lg:border-l"
              src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Landing;
