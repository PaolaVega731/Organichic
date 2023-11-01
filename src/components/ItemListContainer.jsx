import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore } from 'firebase/firestore';


export const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore()
    const ItemsCollection = collection(db, "ropa")
    getDocs(ItemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProduct(docs)

    })
      
  }
,[])
    return (
    <>
      <center className="row" style={{ width:"18 rem", display:'flex'}}>
        <ItemList product={product} />
      </center>
    </>
  );
};

export default ItemListContainer;
