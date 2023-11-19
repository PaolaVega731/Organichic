import ItemDetail from "./ItemDetail";
import { useCollection } from "../Hooks/useCollection.jsx";

export const ItemDetailContainer = () => {
  const product = useCollection("Ropa");
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <ItemDetail product={product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
