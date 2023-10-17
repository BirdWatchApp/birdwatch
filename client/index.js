/**
 * ************************************
 *
 * @module  index.js
 * @author  LT & MK
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { ReactDOM } from 'react';
// import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store= {store}>
    <App />
  </Provider>,
);
// const root = createRoot(document.getElementById('contents'));
// root.render(
//   // wrap the App in the Provider Component and pass in the store

//   <Provider store= {store}>
//     <App />
//   </Provider>,

// );