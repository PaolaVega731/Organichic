import React, { useState, useEffect } from "react";
import Item from "./Item.jsx";
import Loader from "./Loader.jsx";

const ItemList = ({ product }) => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Simula una carga de datos, podrías llamar a una API aquí
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []);

  return (
    <>
      {loading ? ( // Muestra el loader si el estado de carga es verdadero
        <Loader />
      ) : (
        product.map((p) => {
          return (
            <Item
              key={p.id} 
              id={p.id}
              category={p.category}
              title={p.name}
              description={p.description}
              price={p.price}
              image={p.image}
            />
          );
        })
      )}
    </>
  );
};

export default ItemList;
