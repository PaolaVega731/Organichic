import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBp3R5Lv8-WQj-OTkaP8nsdGgjCkd0NZAA",
  authDomain: "organichic-c3733.firebaseapp.com",
  projectId: "organichic-c3733",
  storageBucket: "organichic-c3733.appspot.com",
  messagingSenderId: "301496201563",
  appId: "1:301496201563:web:55b02e15c7f9f980c92a7e"
};


const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
