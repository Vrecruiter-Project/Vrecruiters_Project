import { useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query as firebaseQuery,
} from "firebase/firestore";

const useFetchDocuments = (collectionPath) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDocuments = async (queryConditions) => {
    setLoading(true);
    setError(null);

    try {
      const db = getFirestore();
      const collectionRef = collection(db, collectionPath);

      const q = firebaseQuery(collectionRef, ...queryConditions);
      const querySnapshot = await getDocs(q);

      const docs = querySnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      setDocuments(docs);
      setLoading(false);
    } catch (err) {
      setError(err.message ?? "Error fetching documents");
      setLoading(false);
    }
  };

  return { documents, fetchDocuments, loading, error };
};

export default useFetchDocuments;
