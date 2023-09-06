import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Props {
  id: number;
  selected: boolean[];
  onClick: (id: number) => void;
  icon: IconType;
  step: string;
  description: string;
  isLast?: boolean;
}

const Step = ({
  id,
  selected,
  onClick,
  icon: Icon,
  step,
  description,
  isLast,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`${
        selected[id] ? "bg-gray-800" : "hover:bg-gray-700"
      } relative cursor-pointer rounded-lg p-4 transition duration-500 ease-in-out`}
    >
      {selected[id] && (
        <motion.div
          layoutId="selection"
          className="absolute -inset-0 -z-10 rounded-lg bg-gray-800"
        ></motion.div>
      )}

      <div className="relative flex items-start justify-start gap-3 md:gap-4">
        {!isLast && (
          <div className="absolute -bottom-[4.5rem] left-5 z-10 h-[calc(100%+2rem)] w-1 -translate-x-[0.125rem] bg-primary shadow-2xl md:-bottom-20 md:left-6"></div>
        )}

        <Icon className="z-20 h-10 w-10 shrink-0 rounded-md bg-primary p-1.5 text-primary-content shadow-2xl md:h-12 md:w-12 md:p-2" />

        <div className="select-none">
          <h2 className="text-lg text-white md:text-xl">{step}</h2>
          <p className="md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Step;
