import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Landing from './pages/Landing';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import { GlobalContextProvider } from './store/globalContext.jsx';
import MyStates from './pages/testig-states.jsx';
import { Menu } from './Menu';
import Home from './pages/Home';

function App() {
  const [state] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Menu />
        <GlobalContextProvider>
          <Routes>
            <Route element={<ProtectedRoute canActivate={state} />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="account" element={<Account />} />
            <Route path="landing" element={<Landing />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/test-states" element={<MyStates />} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
