import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ItemsCollection = collection(db, "Ropa");
   
    getDocs(ItemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) =>  ({ id: doc.id, ...doc.data() }));
      if (category != undefined) {
        const filterDocs = docs.filter((cate) => cate.category == category);
        setProduct(filterDocs);
      }else{
        setProduct(docs)
      }
    });
  }, [category]);
 
  return (
    <>
      <div className="row  gap-4 w-100 p-2" style={{justifyContent: 'center', background:'#F7F9F9'}}>
        <ItemList product={product}/>
      </div>
    </>
  );
};

export default ItemListContainer;