import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';
import Home from './pages/Home';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import { Menu } from './Menu';
import { AuthProvider } from './Context/authContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route index element={<Home />} />
            </Route>

            {/* <Route
              index
              element={<Home />}
              caseSensitive
              children={<ProtectedHome />}
            /> */}

            <Route path="landing" element={<Landing />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
