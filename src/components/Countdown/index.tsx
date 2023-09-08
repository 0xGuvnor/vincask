import { useEffect, useState } from "react";
import TimerUnit from "./TimerUnit";

interface Props {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  title?: string;
}

type CountdownTimer = {
  weeks?: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown = ({ year, month, date, hour, minute, title }: Props) => {
  const [timer, setTimer] = useState<CountdownTimer>();

  // Specify the date and time in UTC+8 (Singapore Standard Time)
  const singaporeTimeZoneOffset = 8 * 60; // 8 hours * 60 minutes
  const endTime = new Date(
    Date.UTC(year, month, date, hour, minute) + singaporeTimeZoneOffset,
  );

  // Calculate the time difference in seconds, minutes, hours, days, and weeks
  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  const daysInWeek = 7;

  useEffect(() => {
    const handleTimeDifference = () => {
      const currentTime = new Date();
      const currentSgTime = new Date(
        currentTime.getTime() + singaporeTimeZoneOffset * 60000, // Convert minutes to milliseconds
      );
      const timeDifference = endTime.getTime() - currentSgTime.getTime();

      const secondsDifference = Math.floor(
        timeDifference / millisecondsInSecond,
      );
      const minutesDifference = Math.floor(secondsDifference / secondsInMinute);
      const hoursDifference = Math.floor(minutesDifference / minutesInHour);
      const daysDifference = Math.floor(hoursDifference / hoursInDay);
      const weeksDifference = Math.floor(daysDifference / daysInWeek);

      // Calculate the remaining time
      const remainingSeconds = secondsDifference % secondsInMinute;
      const remainingMinutes = minutesDifference % minutesInHour;
      const remainingHours = hoursDifference % hoursInDay;
      const remainingDays = daysDifference % daysInWeek;

      if (weeksDifference < 14) {
        setTimer({
          days: daysDifference,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        });
      } else {
        setTimer({
          weeks: weeksDifference,
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        });
      }
    };

    handleTimeDifference();

    const intervalId = setInterval(handleTimeDifference, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative grid auto-cols-max grid-flow-col gap-1 rounded-md bg-accent p-1.5 text-center md:gap-2 md:p-2">
      <h3 className="absolute -top-6 left-0 text-base md:-top-7 md:text-xl">
        {title}
      </h3>

      <TimerUnit
        unit={timer?.weeks! === 1 ? "week" : "weeks"}
        value={timer?.weeks}
      />
      <TimerUnit
        unit={timer?.days! === 1 ? "day" : "days"}
        value={timer?.days}
      />
      <TimerUnit
        unit={timer?.hours! === 1 ? "hour" : "hours"}
        value={timer?.hours}
      />
      <TimerUnit
        unit={timer?.minutes! === 1 ? "minute" : "minutes"}
        value={timer?.minutes}
      />
      <TimerUnit
        unit={timer?.seconds! === 1 ? "second" : "seconds"}
        value={timer?.seconds}
      />
    </section>
  );
};
export default Countdown;
