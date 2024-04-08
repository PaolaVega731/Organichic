
import  { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useCollectionFilter } from "../Hooks/useCollectionFilter";

export const ItemListContainer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const product = useCollectionFilter("Ropa", "category");




  const containerStyle = {
    justifyContent: "center",
    background: "#F7F9F9",
    padding: windowWidth <= 600 ? "10px" : "50px",
  };

  return (
    <>
      <div className="row gap-4 w-100 p-2" style={containerStyle}>
        <ItemList product={product} />
      </div>
    </>
  );
};

export default ItemListContainer;
