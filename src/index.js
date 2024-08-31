import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const MODE = process.env.NODE_ENV;

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <App mode={MODE}/>
);