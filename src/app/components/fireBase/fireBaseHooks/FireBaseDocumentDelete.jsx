import { useState } from "react";
import { getDatabase, ref, remove } from "firebase/database";

const useFireBaseDocumentDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteRecord = async (recordPath) => {
    setIsDeleting(true);
    setError(null);

    try {
      const db = getDatabase();
      const recordRef = ref(db, recordPath);

      await remove(recordRef);
      setIsDeleting(false);
    } catch (err) {
      setError(err.message);
      setIsDeleting(false);
    }
  };

  return { deleteRecord, isDeleting, error };
};

export default useFireBaseDocumentDelete;
