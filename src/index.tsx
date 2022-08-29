import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { persistor } from './store/store';
import store from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

