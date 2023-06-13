import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyStates from './pages/testig-states';
import About from './pages/About';
import Landing from './pages/Landing';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import { GlobalContext } from './store/globalContext';

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
          <PrivateRoute isAuthenticated={authenticated} component={MyStates} />
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
