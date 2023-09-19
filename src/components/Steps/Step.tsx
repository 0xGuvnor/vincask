import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useMediaQuery } from "react-responsive";
import useIsMounted from "@/hooks/useIsMounted";

interface Props {
  id: number;
  selected: boolean[];
  onClick: (id: number) => void;
  icon: IconType;
  title: string;
  description: string | ReactNode;
  isLast?: boolean;
}

const Step = ({
  id,
  selected,
  onClick,
  icon: Icon,
  title,
  description,
  isLast,
}: Props) => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <div
      onClick={() => onClick(id)}
      className={`${
        selected[id] ? "bg-gray-800" : "hover:bg-gray-700"
      } relative cursor-pointer rounded-md p-4 transition duration-500 ease-in-out lg:rounded-lg`}
    >
      {selected[id] && (
        <motion.div
          layoutId="selection"
          className="absolute -inset-0 -z-10 rounded-md bg-gray-800 lg:rounded-lg"
        ></motion.div>
      )}

      <div className="relative flex items-start justify-start gap-3 md:gap-4">
        {!isLast && (
          <div className="absolute -bottom-[4.5rem] left-5 z-10 h-[calc(100%+2rem)] w-1 -translate-x-[0.125rem] bg-primary shadow-2xl md:-bottom-20 md:left-6"></div>
        )}

        <Icon className="z-20 h-10 w-10 shrink-0 rounded bg-primary p-1.5 text-primary-content shadow-2xl md:h-12 md:w-12 md:p-2 lg:rounded-md" />

        <div className="flex-1 select-none">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white md:text-xl">{title}</h2>

            <div
              className={`${
                selected[id] ? "visible" : "invisible"
              } text-xs md:text-base`}
            >
              <CountdownCircleTimer
                duration={8}
                size={isMobileOrTablet ? 28 : 38}
                strokeWidth={isMobileOrTablet ? 2 : 3}
                trailStrokeWidth={isMobileOrTablet ? 0.5 : 1}
                isPlaying
                colors={["#FACA16", "#FF5800", "#A30000", "#A30000"]}
                colorsTime={[6, 4, 2, 0]}
                onComplete={() => ({ shouldRepeat: true })}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </div>
          </div>

          <p className="md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Step;
