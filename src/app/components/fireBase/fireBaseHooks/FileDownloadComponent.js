import { useState } from "react";

const useFileDownloader = () => {
  const [fileContent, setFileContent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const downloadFile = async (url) => {
    setLoading(true);
    setError(null);
    setFileContent(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }

      const blob = await response.blob();
      const reader = new FileReader();

      reader.onload = () => {
        setFileContent(reader.result);
        setLoading(false);
      };

      reader.onerror = () => {
        setError(reader.error);
        setLoading(false);
      };

      reader.readAsDataURL(blob);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { fileContent, error, loading, downloadFile };
};

export default useFileDownloader;
