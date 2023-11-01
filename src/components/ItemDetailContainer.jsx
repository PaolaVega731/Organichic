import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import {collection, getDocs, getFirestore} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Ropa");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProduct(docs);
    });
  }, []);

  return (
    <>
      <center>
        <ItemDetail product={product} />
      </center>
    </>
  );
};

export default ItemDetailContainer;
