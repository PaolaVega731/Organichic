import { useState, useEffect } from "react";
import Item from "./Item.jsx";
import Loader from "./Loader.jsx";
import PropTypes from 'prop-types';


const ItemList = ({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="d-flex flex-column justify-content-center align-items-center "
          style={{ height: "90vh" }}
        >
          <Loader />
        </div>
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

ItemList.propTypes = {
  product: PropTypes.array.isRequired,
};


export default ItemList;
