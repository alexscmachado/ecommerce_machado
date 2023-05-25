import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAleD35dWJ_2g0B9Q9TkiBvUyxm2vKz94A",
  authDomain: "ecommerce-maquiagem.firebaseapp.com",
  projectId: "ecommerce-maquiagem",
  storageBucket: "ecommerce-maquiagem.appspot.com",
  messagingSenderId: "499970063390",
  appId: "1:499970063390:web:ae7ee00741eb514229c20f"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
