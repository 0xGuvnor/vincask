import { useEffect, useState } from "react";

const useWarnRefresh = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (showWarning) {
        event.preventDefault();
        event.returnValue = ""; // Required for some browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [showWarning]);

  return { showWarning, setShowWarning };
};
export default useWarnRefresh;
