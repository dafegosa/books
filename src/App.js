import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalContextProvider } from './store/globalContext.jsx';
import { Menu } from './Menu';

import Router from './Router.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider>
          <Menu />
          <Router />
          <ToastContainer />
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
