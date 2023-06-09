import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';
import landingImage from '../../assets/landingImage.jpeg';
const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-200">
      <div className="flex h-auto bg-white">
        <div className="flex flex-col justify-center h-screen flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
          <div className="w-full mx-auto lg:max-w-6xl">
            <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
              <div className="overflow-y-auto">
                <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                  Reading Wishlist
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Discover a world and keep track of your reading journey with
                  Wishlist app. Whether you're an avid reader or just starting
                  your literary adventure, Wishlist offers you the perfect
                  platform to explore, organize, and plan your reading list like
                  never before.
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Embrace the convenience of Wishlist app and embark on a
                  literary journey that opens up endless possibilities. Start
                  exploring today and let Wishlist be your companion in the
                  world of books.
                </p>
                <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                  Thanks for visiting our website!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center max-w-lg gap-3 mx-auto mt-10 lg:flex-row lg:justify-start">
                <Link
                  to="/account"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 hidden w-0 lg:block">
          <div>
            <img
              className="absolute inset-0 object-cover w-full h-full bg-gray-200 lg:border-l"
              src={landingImage}
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
