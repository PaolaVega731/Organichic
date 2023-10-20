import React from "react";
import Item from "./Item.jsx";

const ItemList = ({ product }) => {
  return (
    <div>
      {product.map((p) => {
        return (
          <>
            <Item
              Key={p.id}
              id={p.id}
              category={p.category}
              title={p.name}
              description={p.description}
              price={p.price}
              image={p.image}
            />
          </>
        );
      })}
    </div>
  );
};
export default ItemList;
