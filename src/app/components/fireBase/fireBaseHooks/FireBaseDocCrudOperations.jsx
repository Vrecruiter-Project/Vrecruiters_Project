import { useState } from "react";
import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useFireBaseDocCrudOperations = (
  docPath,
  enabled,
  reFetchAfter
) => {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(undefined);
  const qc = useQueryClient();
  const docRef = doc(getFirestore(), docPath);

  const fetchDoc = async () => {
    try {
      const dataSnap = await getDoc(docRef);
      if (dataSnap.exists()) {
        const data = dataSnap.data();
        return data;
      } else {
        return null; // Return null or handle the case where the document doesn't exist
      }
    } catch (error) {
      console.log(error?.message ?? "got some error ", error);
    }
  };

  const readQuery = useQuery({
    queryKey: [docPath],
    queryFn: fetchDoc,
    enabled: enabled === true,
  });

  const refetch = async () => {
    // Manually invalidate and refetch the query
    await qc.invalidateQueries({ queryKey: [docPath] });
    await readQuery.refetch();
  };

  const performAction = async (action, data, merge = false) => {
    setLoading(action);
    setError(undefined);

    try {
      if (action === "create") {
        const rData = await setDoc(docRef, data, { merge });
        reFetchAfter && refetch();
        return rData;
      } else if (action === "update") {
        const rData = await updateDoc(docRef, data);
        return rData;
      } else if (action === "delete") {
        const rData = await deleteDoc(docRef);
        return rData;
      }
      qc.invalidateQueries({ queryKey: [docPath] });
    } catch (e) {
      console.error(e);
      setError(new Error(`Error ${action}ing ${docPath}`));
    } finally {
      setLoading(undefined);
    }
  };

  return {
    readQuery,
    set: (data, merge) => performAction("create", data, merge),
    update: (data) => performAction("update", data),
    remove: () => performAction("delete", undefined),
    refetch,
    error,
    internalLoading: loading,
    isLoading: loading !== undefined || readQuery.isLoading,
    data: readQuery.data,
  };
};
