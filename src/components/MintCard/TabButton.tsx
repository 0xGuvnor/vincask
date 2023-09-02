import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface Props {
  tab: "crypto" | "cc";
  setTab: Dispatch<SetStateAction<"crypto" | "cc">>;
  tabValue: "crypto" | "cc";
  title: string;
}

const TabButton = ({ tab, setTab, tabValue, title }: Props) => {
  return (
    <li
      onClick={() => setTab(tabValue)}
      className="relative w-1/2 cursor-pointer select-none py-3 text-center transition duration-300 ease-in-out first:rounded-tl-xl last:rounded-tr-xl hover:bg-zinc-800 md:py-4"
    >
      <p className="text-xs md:text-base">{title}</p>
      <div className="absolute inset-x-0 bottom-0 z-0 h-[2px] w-full bg-zinc-800"></div>
      {tab === tabValue && (
        <motion.div
          layoutId="tabUnderline"
          className="absolute inset-x-0 bottom-0 z-50 h-[2px] w-full bg-primary"
        ></motion.div>
      )}
    </li>
  );
};
export default TabButton;
