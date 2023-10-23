import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const { id } = useParams();
  const filteredProduct = product.filter((product) => product.id == id);

  const[ count, setCount]= useState(0);
  const increment = ()=> {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count -1);
  }

  return (
    <>
      {filteredProduct.map((p) => {
        return (
            
            <Card style={{ width: "18rem" }} key={p.id} className="">
              <img src={p.image} alt="" />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <p>{p.description}</p>
                <p> $ {p.price}</p>
                <div className="ItemDetail">
                <h3>Contador</h3>
                <Button variant="primary" onClick={increment}>+</Button>
                <Button variant="primary" onClick={decrement}>-</Button>
                <p>Valor actual: {count}</p>
                </div>             
              </Card.Body>
            </Card>
      
        );
      })}
    </>
  );
};
export default ItemDetail;
