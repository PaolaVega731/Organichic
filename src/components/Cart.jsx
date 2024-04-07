import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "firebase/firestore";
import FormCart from "./Form";

const CheckoutButton = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="d-flex justify-content-center">
      {showForm ? (
        <div className="d-flex gap-4  w-100">
          <FormCart />
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
    return (
      <div
        className="text-center  d-flex flex-column pt-4 align-items-center"
        style={{ height: "100vh" }}
      >
        <h3>No hay productos en el carrito.</h3>
        <p>
          Puedes comprar nuestros productos <a href="/">aquí</a>
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        className="d-flex flex-column   justify-content-center align-items-center "
        style={{ height: "100vh", background: "#F7F9F9" }}
      >
        <h2>Carrito</h2>
        <div className="d-flex gap-2 flex-wrap">
          <div
            className="d-flex flex-column flex-md-row bg-warned  "
            style={{ height: "600px" }}
          >
            <div className="w-100 h-100 flex-wrap">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex gap-md-4"
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
                        <button className="btn btn-success">X</button>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" d-flex flex-column   ">
              <div className="w-100 d-flex justify-content-center">
                <CheckoutButton />
              </div>
              <div>
                <h2>Total: ${totalPrice}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
