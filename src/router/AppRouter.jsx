import { Route, Routes } from 'react-router-dom';

import { isAuthenticate } from './utils/auth';
import ProtectedRoute from './utils/ProtectedRoute';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Account from './pages/Account';
import About from './pages/About/index.jsx';
import NotFound from './pages/NotFound';
import AddBooks from './pages/AddBooks';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/add-books" element={<AddBooks />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="account" element={<Account />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
