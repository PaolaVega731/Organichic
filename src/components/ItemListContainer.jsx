import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const getProducts = async () => {
    const response = await fetch("/Datos.json");
    const data = await response.json();
    return data;
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((p) => setProduct(p));
  }, []);


  const ItemListContainer = ({ product }) => {
    const { category } = useParams();
    const filteredProduct = product.filter((product) => product.category == category);
  
    return (

 
    <>
      <center>
        <ItemList product={product} />
      </center>
    </>
  );
}};

export default ItemListContainer;
