import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <nav className="w-full">
        <h2 className="flex justify-center">Home ToDo Books page</h2>
        <ul className="flex flex-row justify-end">
          <li className="m-4">
            <Link to="#">other options</Link>
          </li>
          <li className="m-4">
            <Link to="landing">Logout</Link>
          </li>
        </ul>
      </nav>
      <section className="w-6/12 mx-auto">
        <h2>Wishlist books</h2>
      </section>
      <Footer />
    </>
  );
};
export default Home;
