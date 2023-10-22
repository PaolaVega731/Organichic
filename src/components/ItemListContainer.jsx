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
  const {category} = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      if(category !==undefined){
        const filteredProducts = data.filter((product)=> product.category === category);
        setProduct(filteredProducts);
      }else {
        setProduct(data);
      }
    });  
  },[category]); 
     
    return (
    <>
      <center>
        <ItemList product={product} />
      </center>
    </>
  );
};

export default ItemListContainer;
