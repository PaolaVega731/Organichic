import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ title, image, id }) => {
  return (
    <Card style={{ width: "18rem"}}>
      <img src={image} alt="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`product/${id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
