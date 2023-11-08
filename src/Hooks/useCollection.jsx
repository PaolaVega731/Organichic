import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, collectionName);
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setData(docs);
    });
  }, [collectionName]);

  return data;
};
