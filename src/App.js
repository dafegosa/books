import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';
import { GlobalContextProvider } from './store/globalContext.jsx';
import { AuthProvider } from './store/authContext/authContext.jsx';
import { Menu } from './Menu';

import Home from './pages/Home';
import Landing from './pages/Landing';
import Account from './pages/Account';
import About from './pages/About/index.jsx';
import NotFound from './pages/NotFound';
import MyStates from './pages/testig-states.jsx';

function App() {
  const [state] = useState(true);
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Menu />
          <GlobalContextProvider>
            <Routes>
              <Route element={<ProtectedRoute canActivate={state} />}>
                <Route path="/home" element={<Home />} />
                <Route path="/add-books" element={<MyStates />} />
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
