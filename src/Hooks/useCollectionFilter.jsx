import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { getFirestore } from "firebase/firestore";

export const useCollectionFilter = (collectionName, filterField) => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, collectionName);
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      if (category !== undefined) {
        const filterDocs = docs.filter((item) => item[filterField] === category);

        setData(filterDocs);
      } else {
        setData(docs);
      }
    });
  }, [collectionName, filterField, category]);

  return data;
};
