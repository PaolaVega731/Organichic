import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const ItemDetail = ({ product }) => {
  const { id } = useParams();
  const filteredProduct = product.filter((product) => product.id == id);

  return (
    <>
      {filteredProduct.map((p) => {
        return (
          <>
           
            <Card style={{ width: "18rem" }} key={p.id} className="">
              <img src={p.image} alt="" />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <p>{p.description}</p>
                <p> $ {p.price}</p>
                <Button variant="primary">Contador</Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
};
export default ItemDetail;
