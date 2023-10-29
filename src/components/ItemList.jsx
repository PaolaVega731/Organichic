import React from "react";
import Item from "./Item.jsx";
import Loader from "./Loader.jsx";

const ItemList = ({ product }) => {
  return (
   <>
      {
     // product.length <= 0 ? <Loader/> :
     // <div className="card-grid"> 
      
      product.map((p) => {
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
   //</>// </div>
   // </>
  );
};
export default React.memo(ItemList);
