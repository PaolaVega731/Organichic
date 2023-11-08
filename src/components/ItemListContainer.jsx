import ItemList from "./ItemList";
import { useCollectionFilter } from "../Hooks/useCollectionFilter";

export const ItemListContainer = () => {
  const product = useCollectionFilter("Ropa", "category");

  return (
    <>
      <div
        className="row  gap-4 w-100 p-2"
        style={{ justifyContent: "center", background: "#F7F9F9" }}
      >
        <ItemList product={product} />
      </div>
    </>
  );
};

export default ItemListContainer;
