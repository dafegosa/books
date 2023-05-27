import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <nav className="w-full">
      <h2 className="flex justify-center">Sign In page</h2>
      <ul className="flex flex-row justify-end">
        <li className="m-4">
          <Link to="/">Go Home after login</Link>
        </li>
        <li className="m-4">
          <Link to="sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};
export default SignIn;
