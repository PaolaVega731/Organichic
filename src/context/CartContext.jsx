import  { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';


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
      <CheckoutButton />
    </CartContext.Provider>
  );
};

export default CartProvider;

const CheckoutButton = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });

  const handleCheckout = async () => {
    try {
      const db = firebase.firestore();

      // Crear un nuevo documento en Firestore para la orden de compra
      const orderRef = await db.collection('orders').add({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        items: cart, // Agrega los productos del carrito a la orden
      });

      // Limpia el carrito
      clearCart();
      setShowForm(false);
      alert('Gracias por su compra. Número de orden: ' + orderRef.id);
    } catch (error) {
      console.error('Error al procesar la compra:', error);
      //  mostrar un mensaje de error al usuario.
    }
  };

  return (
    <div>
      {showForm ? (
        <div>
          <h3>Complete los datos:</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <button onClick={handleCheckout}>Realizar compra</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Comprar</button>
      )}
    </div>
  );
};