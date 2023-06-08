import { useContext } from 'react';

import { GlobalContext } from '../../store/globalContext';

import Footer from '../../components/Footer';
import AppUI from './AppUI';

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
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
