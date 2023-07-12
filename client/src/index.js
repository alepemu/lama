import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

const BASE_URL = process.env.isdeployed ? 'https://lama.fly.dev' : 'http://localhost:3100';
console.log(BASE_URL);
    
console.log(`isdeployed value is ${process.env.isdeployed}`);
console.log(`NETLIFY value is ${process.env.NETLIFY}`);
console.log(`NODE_ENV value is ${process.env.NODE_ENV}`);
console.log(`CUSTOM_ENV_VAR value is ${process.env.CUSTOM_ENV_VAR}`);
console.log(`REACT_APP_CUSTOM_ENV_VAR value is ${process.env.REACT_APP_CUSTOM_ENV_VAR}`);
console.log(`TOML_ENV_VAR value is ${process.env.TOML_ENV_VAR}`);
console.log(`REACT_APP_TOML_ENV_VAR value is ${process.env.REACT_APP_TOML_ENV_VAR}`);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export default BASE_URL;