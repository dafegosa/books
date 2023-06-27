import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyStates from './pages/testig-states';
import About from './pages/About';
import Landing from './pages/Landing';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import { GlobalContext } from './store/globalContext';
import Loading from './pages/Loading';
import AddBooks from './pages/AddBooks';
import Readings from './pages/Readings';
import BookSentences from './pages/Readings/BookSentences';
import FinishedBooks from './pages/Readings/FinishedBooks';

const PrivateRoute = ({ component: Component, isAuthenticated }) =>
  isAuthenticated ? <Component /> : <Account />;

const Router = () => {
  const {
    state: {
      user: { authenticated },
    },
  } = useContext(GlobalContext);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="account" element={authenticated ? <Home /> : <Account />} />
      <Route
        path="/home"
        element={
          <PrivateRoute isAuthenticated={authenticated} component={Home} />
        }
      />
      <Route
        path="/add-books"
        element={
          <PrivateRoute isAuthenticated={authenticated} component={AddBooks} />
        }
      />
      <Route
        path="/readings"
        element={
          <PrivateRoute isAuthenticated={authenticated} component={Readings} />
        }
      />
      <Route
        path="/finished-books"
        element={
          <PrivateRoute
            isAuthenticated={authenticated}
            component={FinishedBooks}
          />
        }
      />
      <Route
        path="/readings/:id"
        element={
          <PrivateRoute
            isAuthenticated={authenticated}
            component={BookSentences}
          />
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
