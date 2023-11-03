import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export const CarritoDeCompras = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mx-2 relative">
      <Button variant="primary" onClick={handleShow}>
        <FaShoppingCart size={24} />
        <span className="text-black px-1">
          {cart ? (cart.length <= 9 ? cart.length : "9+") : 0}
        </span>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tu Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {cart.length > 0 ? (
            <div
              className="d-flex flex-column align-items-center"
              style={{ width: "100%" }}
            >
              {cart.slice(0, 4).map((item) => {
                return (
                  <div
                    className="card mb-1 p-1 d-flex justify-content-center align-items-center m-2"
                    style={{ height: "100px", width: "90%" }}
                    key={item.id}
                  >
                    <div className="row g-0 h-100">
                      <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img
                          src={item.image}
                          className="img-fluid rounded-start"
                          style={{ height: "80px", width: "100px" }}
                          alt={item.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="row h-75 p-2">
                          <div
                            className="col d-flex flex-column justify-content-between pe-5"
                            style={{ fontSize: "14px" }}
                          >
                            <h5
                              style={{
                                fontSize: "14px",
                                minWidth: "180px",
                                maxWidth: "180px",
                              }}
                            >
                              {item.name.split(" ").slice(0, 3).join(" ") +
                                "..."}
                            </h5>
                            <div className="d-flex justify-content-between align-items-center">
                              <span>
                                ${item.price}{" "}
                                {item.quantity > 1 ? `x ${item.quantity}` : ""}
                              </span>
                              <Button
                                onClick={() => removeItem(item.id)}
                                className="btn btn-success text-white"
                              >
                                X
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
              }}
            >
            <h3 className="mx-5">No hay productos en el carrito.</h3>
            </div>
          )}
          <div
            className="mb-4"
            style={{
              display: "flex",
              width: "full",
              justifyContent: "center",
              alignItems: "center",
              height: "50px",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {cart.length > 4 ? <div>y {cart.length - 4} más...</div> : ""}
            {cart.length > 0 ? (
              <Link to={"/cart"} onClick={() => setShow(false)}>
                <Button>Ir al carrito</Button>
              </Link>
            ) : (
              <Link to={"/"} onClick={() => setShow(false)}>
                <Button>Ir a Categorias</Button>
              </Link>
            )}
          </div>
        </div>
      </Offcanvas>
    </div>
  );
};