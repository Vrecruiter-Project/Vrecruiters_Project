import { useState, useEffect } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useFireBaseStorageCrudOperations = (storagePath, enabled) => {
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const qc = useQueryClient();
  const firebaseStorageInstance = getStorage();
  const [downloadURL, setDownloadURL] = useState();

  let storageRef = ref(firebaseStorageInstance, storagePath);

  const fetchDownloadURL = async () => {
    try {
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error(error.message ?? "Got some error", error);
      return null;
    }
  };

  const readQuery = useQuery({
    queryKey: [storagePath],
    queryFn: fetchDownloadURL,
    enabled: enabled === true,
  });

  const performAction = async (action, path = "", file) => {
    setLoading(action);
    setError(undefined);
    if (path.length > 0) {
      storageRef = ref(firebaseStorageInstance, path);
    }

    try {
      if (action === "upload" && file) {
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress ? progress : 0);
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
            });
            setUploadProgress(100);
          }
        );

        qc.invalidateQueries({ queryKey: [storagePath] });
      } else if (action === "delete") {
        await deleteObject(storageRef);
        qc.invalidateQueries({ queryKey: [storagePath] });
      }
    } catch (e) {
      setError(new Error(`Error ${action}ing ${storagePath}`));
    } finally {
      setLoading(undefined);
      setUploadProgress(undefined);
    }
  };

  return {
    readQuery,
    upload: (path, file) => performAction("upload", path, file),
    remove: () => performAction("delete", undefined),
    error,
    internalLoading: loading,
    isLoading: loading !== undefined || readQuery.isLoading,
    downloadURL: readQuery.data,
    uploadProgress,
  };
};
