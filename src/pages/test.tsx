import { useEffect, useState } from "react";

const initialTime = 60;

const Test = () => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const calculateProgress = () => {
    return (1 - timeLeft / initialTime) * 100;
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="countdown-timer">
        {timeLeft > 0 ? (
          <div className="timer-wrapper">
            <div
              className="timer-circle"
              style={{ "--progress": calculateProgress() }}
            ></div>
          </div>
        ) : (
          <div className="timer-done">Time&apos;s up!</div>
        )}
      </div>
    </div>
  );
};
export default Test;
