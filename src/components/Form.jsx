import React, { useState, useContext, useEffect } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { Modal } from "react-bootstrap";

const FormCart = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { clearCart } = useContext(CartContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const db = getFirestore();
  const ordersCollection = collection(db, "MiOrden");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        clearCart();
      }, 3000);
    });
  };

  const order = {
    Nombre,
    Apellido,
    Email,
  };

  const formStyle = {
    maxWidth: windowWidth <= 600 ? "150px" : "300px",
  };
  const titleStyle = {
    fontSize: windowWidth <= 600 ? "20px" : "25px",
  };
  const titleStyle1 = {
    fontSize: windowWidth <= 600 ? "15px" : "25px",
  };

  return (
    <div className="d-flex flex-column gap-4 ">
      <h1 style={titleStyle}>Formulario de compra</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-4"
        style={formStyle}
      >
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">
          Comprar
        </button>
      </form>
      <p style={titleStyle1}>Número de orden: {orderId}</p>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <div className="modal-dialog modal-sm">Gracias por su compra! 😄</div>
      </Modal>
    </div>
  );
};

export default FormCart;
