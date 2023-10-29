import React, { createContext, useState, useContext, setCart } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
        // El producto ya está en el carrito, actualiza la cantidad
        updatedCart[existingProductIndex].quantity += quantity;
      } else {
        // El producto no está en el carrito, agrégalo
        updatedCart.push({ ...product, quantity });
      }
    
      setCart(updatedCart);
    };
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
