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
      className="relative w-1/2 py-3 text-center transition duration-300 ease-in-out cursor-pointer md:py-4 hover:bg-slate-700 first:rounded-tl-xl last:rounded-tr-xl"
    >
      <p className="text-xs md:text-base">{title}</p>
      <div className="absolute inset-x-0 bottom-0 w-full h-[2px] bg-slate-700 z-0"></div>
      {tab === tabValue && (
        <motion.div
          layoutId="tabUnderline"
          className="absolute inset-x-0 bottom-0 w-full h-[2px] bg-primary z-50"
        ></motion.div>
      )}
    </li>
  );
};
export default TabButton;
