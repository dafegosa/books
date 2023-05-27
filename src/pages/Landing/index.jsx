import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <div className="w-full h-screen">
      <nav className="w-full">
        <h2 className="flex justify-center">Landing page</h2>
        <ul className="flex flex-row justify-end">
          <li className="m-4">
            <Link to="/sign-in">Sign in</Link>
          </li>
          <li className="m-4">
            <Link to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};
export default Landing;
