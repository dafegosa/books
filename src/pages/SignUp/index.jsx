import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SignUpForm from '../../components/forms/signUpForm';

const SignUp = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:m-16 md:m-0">
        <div className="w-full max-w-md mx-auto md:mt-12">
          <div className="flex flex-col">
            <div>
              <h2 className="text-lg md:text-4xl text-black text-center">
                Create your account
              </h2>
            </div>
          </div>
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignUp;
