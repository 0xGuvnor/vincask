import { useEffect, useState } from "react";

interface Props {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
}

const useCountdownDifference = ({ year, month, date, hour, minute }: Props) => {
  const [timeDifference, setTimeDifference] = useState(0);

  // Specify the date and time in UTC+8 (Singapore Standard Time)
  const singaporeTimeZoneOffset = 8 * 60; // 8 hours * 60 minutes
  const endTime = new Date(
    Date.UTC(year, month, date, hour, minute) + singaporeTimeZoneOffset,
  );

  useEffect(() => {
    const handleTimeDifference = () => {
      const currentTime = new Date();
      const currentSgTime = new Date(
        currentTime.getTime() + singaporeTimeZoneOffset * 60000, // Convert minutes to milliseconds
      );

      setTimeDifference(endTime.getTime() - currentSgTime.getTime());
    };

    handleTimeDifference();

    const intervalId = setInterval(handleTimeDifference, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return timeDifference;
};
export default useCountdownDifference;
