import { useState, useEffect } from "react";

function useIsResizing() {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      setIsResizing(true);

      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        setIsResizing(false);
      }, 300);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return isResizing;
}

export default useIsResizing;
