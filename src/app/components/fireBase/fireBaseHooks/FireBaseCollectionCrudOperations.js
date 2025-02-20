import { useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFireBaseCollectionCrudOperations = (
  collectionPath = "",
  enabled = true
) => {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(undefined);
  const collectionRef = collection(getFirestore(), collectionPath);
  const queryClient = useQueryClient();

  const fetchCollection = async (condition) => {
    try {
      const querySnapshot = condition
        ? await getDocs(query(collectionRef, ...condition))
        : await getDocs(collectionRef);

      const data = querySnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));
      return data;
    } catch (error) {
      throw new Error(error.message ?? "Error fetching collection");
    }
  };

  const readQuery = useQuery({
    queryKey: [collectionPath],
    queryFn: () => fetchCollection(),
    enabled: true,
    onError: (err) => setError(err),
  });

  const mutation = (action, perform) => {
    return useMutation({
      mutationFn: (data) => {
        setLoading(action);
        setError(undefined);
        return perform(data);
      },

      onError: (err) => setError(err),
      onSettled: () => {
        setLoading(undefined);
        queryClient.invalidateQueries({ queryKey: [collectionPath] });
      },
    });
  };

  const createMutation = mutation(
    "create",
    async (AlternateCollectionPath, data) => {
      const collRef = collection(getFirestore(), AlternateCollectionPath);
      const docRef = await addDoc(collRef, data);
      data.uid = docRef.id;
      await setDoc(docRef, data);
      return docRef;
    }
  );

  const updateMutation = mutation("update", async (data) => {
    const docRef = doc(collectionRef, data.uid);
    await updateDoc(docRef, data);
  });

  const deleteMutation = mutation("delete", async (data) => {
    const docRef = doc(collectionRef, data.uid);
    await deleteDoc(docRef);
  });

  const fetchWithQuery = async (condition) => {
    return fetchCollection(condition);
  };

  return {
    readQuery,
    create: (AlternateCollectionPath, data) =>
      createMutation.mutateAsync(AlternateCollectionPath, data),
    update: (data) => updateMutation.mutateAsync(data),
    remove: (id) => deleteMutation.mutateAsync({ uid: id }),
    error,
    internalLoading: loading,
    isLoading: loading !== undefined || readQuery.isLoading,
    data: readQuery.data,
    fetchWithQuery,
  };
};
