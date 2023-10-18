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
import { createRoot } from 'react-dom/client';
import App from './App.jsx';


const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);
