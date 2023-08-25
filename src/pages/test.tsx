import { useEffect, useState } from "react";

const test = () => {
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>React Beforeunload Warning Example</h1>
      <p>This page has unsaved changes.</p>
      <button onClick={() => setShowWarning(true)}>Show Warning</button>
    </div>
  );
};
export default test;
