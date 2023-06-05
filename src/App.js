import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Landing from './pages/Landing';
import Account from './pages/Account';
import NotFound from './pages/NotFound';

function App() {
  const [state] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute canActivate={state} />}>
            <Route path="/" element={<Landing />} />
          </Route>
          <Route path="account" element={<Account />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
