import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './stote/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

