import { useContext } from 'react';

import { GlobalContext } from '../../store/globalContext';

import Footer from '../../components/Footer';
import AppUI from './AppUI';

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <section className="w-6/12 mx-auto bg-slate-400">
        <h2 className="text-center text-lg md:text-4xl">Wishlist books</h2>
        <AppUI />
      </section>
      <Footer />
    </>
  );
};
export default Home;
