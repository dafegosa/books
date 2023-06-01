import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [desktopMenu, setDesktopMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Link
            className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
            to="/"
          >
            <span className="lg:text-lg uppercase focus:ring-0">
              <ion-icon name="book"></ion-icon>
            </span>
          </Link>
          {/* Button mobile */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="inline-flex"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                className="hidden"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute ${
              mobileMenu ? 'flex' : 'hidden'
            } flex-col justify-end right-0 z-10 w-48 py-1 mt-[19rem] origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:hidden`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            <Link
              className="block px-4 py-2 text-sm text-gray-500 text-center"
              to="#"
            >
              My Wishlist
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-gray-500 text-center"
              to="#"
            >
              Add books
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-gray-500 text-center"
              to="#"
            >
              Contact us
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-500 text-center"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-0"
            >
              Your Profile
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-500 text-center"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-1"
            >
              Settings
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-500 text-center"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-2"
            >
              Sign out
            </Link>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
          <Link
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto"
            to="#"
          >
            My Wishlist
          </Link>
          <Link
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
            to="#"
          >
            Add books
          </Link>
          <Link
            className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600"
            to="#"
          >
            Contact us
          </Link>

          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            <div className="relative flex-shrink-0 ml-5">
              <div>
                <button
                  type="button"
                  onClick={() => setDesktopMenu(!desktopMenu)}
                  className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  id="user-menu-button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                className={`absolute ${
                  desktopMenu ? 'block' : 'hidden'
                } right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-500"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-500"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-500"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
