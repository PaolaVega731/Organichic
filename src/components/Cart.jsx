import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "firebase/firestore";


const CheckoutButton = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleCheckout = async () => {
    try {
      const db = firebase.firestore();

      // Crear un nuevo documento en Firestore para la orden de compra
      const orderRef = await db.collection("orders").add({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        items: cart, // Agrega los productos del carrito a la orden
      });

      // Limpia el carrito
      clearCart();
      setShowForm(false);
      alert("Gracias por su compra. Número de orden: " + orderRef.id);
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      //  mostrar un mensaje de error al usuario.
    }
  };

  return (
    <div>
      {showForm ? (
        <div className="d-flex flex-column gap-4"> 
          <h3>Complete los datos:</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <button className="btn btn-success" onClick={handleCheckout}>Realizar compra</button>
        </div>
      ) : (
        <button className="btn btn-success" onClick={() => setShowForm(true)}>
          Comprar
        </button>
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
    return <div className="text-center">No hay productos en el carrito :(.</div>;
  }

  return (
    <>
      <h2>Carrito</h2>
      <div className="d-flex gap-2 flex-wrap">
        <div className="d-flex bg-warned w-75" style={{ height: "600px" }}>
          <div className="w-75 h-75">
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex gap-4"
                style={{ height: "100px" }}
              >
                <div>
                  <img
                    src={item.image}
                    className="img-thumbnail h-100  "
                    alt=""
                  />
                </div>
                <div className="d-flex gap-2 ">
                  <div>
                    <span>{item.name}</span>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                  </div>
                  <div>
                    <span
                      className="text-danger btn"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
          <div className=" d-flex  flex-column  ">
            <div>
              <h2>Total: ${totalPrice}</h2>
            </div>
            <div className="w-100 d-flex align-content-center">
              <CheckoutButton />
            </div>
          </div>
      </div>
    </>
  );
};

export default Cart;