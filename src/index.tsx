import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './features/util/locale/i18n.ts';
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const refreshAuthLogic = async (f: any) => {
    window.location.reload();
};

createAuthRefreshInterceptor(axios, refreshAuthLogic);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
