import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useWarnRefresh = () => {
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (showWarning) {
        event.preventDefault();
        event.returnValue = ""; // Required for some browsers
      }
    };

    const handleNextNavigation = () => {
      if (showWarning) {
        if (
          !window.confirm("Navigate away? Changes you made may not be saved.")
        ) {
          router.events.emit("routeChangeError");
          throw "Abort route change by user's confirmation";
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    router.events.on("beforeHistoryChange", handleNextNavigation);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      router.events.off("beforeHistoryChange", handleNextNavigation);
    };
  }, [showWarning]);

  return { showWarning, setShowWarning };
};
export default useWarnRefresh;
