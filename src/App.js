import { BrowserRouter } from 'react-router-dom';

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
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
