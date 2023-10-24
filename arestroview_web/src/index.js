import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import { CityProvider } from './CityContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
  <CityProvider>
  <ToastContainer /> 
    <App />
    </CityProvider>
  {/* </React.StrictMode> */}
  </Provider>
);