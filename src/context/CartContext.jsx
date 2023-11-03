import  { createContext, useEffect, useState } from 'react';


export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Intenta obtener el carrito del localStorage al iniciar
    const localCart = window.localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  // Guarda el carrito en localStorage cada vez que cambia
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const mostrarProduct = [];

  const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId);
  }

  const addItem = (item, quantity) => {
    const existingItemIndex = cart.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      // El producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
     
 
    } else {
      // El producto no está en el carrito, agrégalo
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };
  
  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, mostrarProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

