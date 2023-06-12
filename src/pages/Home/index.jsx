import AppUI from './AppUI';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="w-6/12 mx-auto">
        <h2 className="text-2xl font-medium tracking-tight text-black sm:text-4xl text-center mb-8">
          Wishlist books
        </h2>
        <AppUI />
      </section>
    </>
  );
};
export default Home;
