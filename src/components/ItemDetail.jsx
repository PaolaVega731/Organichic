import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
 

const ItemDetail = () => {
  const { id } = useParams()
  const [product, setProduct]= useState([])
  const {addItem} = useContext(CartContext)
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
  

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1 ) {
      setCount(count - 1);
    } 
  };
  const p = product
    return (
      <Card style={{ width: "18rem" }} key={p.id} className="">
         <img src={p.image} alt="" />
         <Card.Body>
         <Card.Title>{p.name}</Card.Title>
         <p>{p.description}</p>
         <p> $ {p.price}</p>
         <div className="ItemDetail">
           <Button variant="primary" onClick={increment}>+</Button>
            <Button variant="primary" onClick={decrement}>-</Button>
            <p> Cantidad: {count}</p>
            <Button variant="primary" onClick={() => addItem(p, count)}>
             Agregar al carrito
            </Button>
             </div>
          </Card.Body>
          </Card>
        );
      }
    
export default ItemDetail;