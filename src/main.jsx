import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp3R5Lv8-WQj-OTkaP8nsdGgjCkd0NZAA",
  authDomain: "organichic-c3733.firebaseapp.com",
  projectId: "organichic-c3733",
  storageBucket: "organichic-c3733.appspot.com",
  messagingSenderId: "301496201563",
  appId: "1:301496201563:web:55b02e15c7f9f980c92a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
