import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './utils/ProtectedRoute';
import Home from './pages/Home';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

function App() {
  const [state, setState] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute canActivate={state} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="landing" element={<Landing />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
