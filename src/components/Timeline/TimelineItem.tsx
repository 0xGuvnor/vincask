import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

interface Props {
  date: string;
  title: string;
  description: string;
}

const TimelineItem = ({ date, title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ type: "spring", duration: 1.5, bounce: 0.2 }}
      className="flex flex-col space-y-4 md:max-w-[285px] md:space-y-6"
    >
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 -left-5 flex w-4 items-center justify-center md:hidden">
          <div className="h-[0.5px] w-full bg-gray-500"></div>
        </div>
        <GoDotFill className="mr-2 text-primary" />
        <p className="text-primary md:text-lg">{date}</p>
        <div className="ml-6 hidden h-[0.5px] flex-1 bg-gray-500 md:block"></div>
      </div>

      <div className="space-y-2 md:max-w-[275px] md:space-y-3">
        <h3 className="font-header text-lg font-black text-white md:text-2xl">
          {title}
        </h3>
        <p className="md:text-lg">{description}</p>
      </div>
    </motion.div>
  );
};
export default TimelineItem;
