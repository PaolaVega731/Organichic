
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useButtonLogic } from "./ItemCount";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { addItem } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const { count, increment, decrement } = useButtonLogic();
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

  const AgregarCarrito = () => {
    addItem(p, count);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "Ropa", id);

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct({ id: snapshot.id, ...docs });
      }
    });
  }, [id]);

  const p = product;
  const containerStyle = {
    maxWidth: windowWidth <= 600 ? "400px" : "800px",
    maxHeight: windowWidth <= 600 ? "400px" : "600px",
  };

  return (
    <>
      <div className="card mb-3" style={containerStyle}>
        <div className="row g-0">
          <div className="col-md-4 d-flex">
            <img src={p.image} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">{p.description}</p>
              <p className="card-text">
                <p className="h4"> $ {p.price}</p>
                <div className="ItemDetail ">
                  <div className="d-flex gap-2">
                    <Button
                      variant="primary"
                      onClick={increment}
                      style={{ width: "40px" }}
                    >
                      +
                    </Button>
                    <Button
                      variant="primary"
                      onClick={decrement}
                      style={{ width: "40px" }}
                    >
                      -
                    </Button>
                  </div>
                  <p> Cantidad: {count}</p>
                  <Button variant="primary" onClick={() => AgregarCarrito()}>
                    Agregar al carrito
                  </Button>
                  <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <div className="modal-dialog modal-sm">
                      Se ha agregado al carrito <strong>{count} </strong>
                      <mark>{p.name} </mark> 🛒
                    </div>
                  </Modal>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
