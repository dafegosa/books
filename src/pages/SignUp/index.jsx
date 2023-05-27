import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <nav className="w-full">
      <h2 className="flex justify-center">Sign In page</h2>
      <ul className="flex flex-row justify-end">
        <li className="m-4">
          <Link to="/">Go Home after Create Account</Link>
        </li>
      </ul>
    </nav>
  );
};
export default SignUp;
