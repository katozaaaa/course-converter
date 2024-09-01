import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const DEV_MODE = process.env.NODE_ENV === 'development';
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <App devMode={DEV_MODE}/>
);