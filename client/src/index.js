import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const BASE_URL = process.env.isdeployed ? 'https://lama.fly.dev' : 'http://localhost:3100';
console.log(BASE_URL);
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export default BASE_URL;