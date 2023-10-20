import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

export const ItemDetailContainer = () => {
  const getProducts = async () => {
    const response = await fetch("/Datos.json");
    const data = await response.json();
    return data;
  };
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((p) => setProduct(p));
  }, []);

  return (
    <>
      <center p="0.5 rem">
        <ItemDetail product={product} />
      </center>
    </>
  );
};

export default ItemDetailContainer;
