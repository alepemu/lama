import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import { CookiesProvider } from "react-cookie";

const BASE_URL = process.env.REACT_APP_NETLIFY ? 'https://lama.fly.dev' : 'http://localhost:3100';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

export default BASE_URL;