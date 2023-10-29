import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import { CartProvider } from './context/CartContext.jsx'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
//ReactDOM.render(
// <CartProvider>
//    <App />
//  </CartProvider>,
 // document.getElementById('root')
//);