import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalContextProvider } from './store/globalContext.jsx';
import { AuthProvider } from './store/authContext/authContext.jsx';

import MyStates from './pages/testig-states.jsx';
import ProtectedRoute from './utils/ProtectedRoute';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import { Menu } from './Menu';

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
                <Route path="/" element={<Home />} />
                <Route path="/add-books" element={<MyStates />} />
              </Route>
              <Route path="landing" element={<Landing />} />
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
