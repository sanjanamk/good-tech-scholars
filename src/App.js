import React from 'react';
import Store from './store/store';
import Routes from './routes';
import { ISLGTS } from './translation/translation';
import localeContext from './context/localeContext';
import './App.scss';

function App() {
  return (
    <React.StrictMode>
      <localeContext.Provider value={ISLGTS}>
        <Store>
          <Routes />
        </Store>
      </localeContext.Provider>
    </React.StrictMode>
  );
}

export default App;
