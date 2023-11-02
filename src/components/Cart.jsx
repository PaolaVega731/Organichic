import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
 

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

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <div>No hay productos en el carrito :(.</div>;
  }
  const cartStyle = {
    backgroundColor: '#FFE5B4',
    padding: '100px', 
  };
  

  return (
    <div className="text-center" style={cartStyle}>
      <h2>Carrito</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${totalPrice}</h2>
      <CheckoutButton />

    </div>
  );
};

export default Cart;