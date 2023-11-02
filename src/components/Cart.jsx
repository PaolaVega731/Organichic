import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <div>No hay productos en el carrito :(.</div>;
  }

  return (
    <div className="text-center">
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
    </div>
  );
};

export default Cart;