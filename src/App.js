import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';
import { GlobalContextProvider } from './store/globalContext.jsx';
import { AuthProvider } from './store/authContext/authContext.jsx';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Account from './pages/Account';
import About from './pages/About/index.jsx';
import NotFound from './pages/NotFound';
import AddBooks from './pages/AddBooks';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <GlobalContextProvider>
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
          </GlobalContextProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
