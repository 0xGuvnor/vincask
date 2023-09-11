import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  tab: string | string[] | undefined;
  tabValue: "crypto" | "cc";
  title: string;
}

const TabButton = ({ tab, tabValue, title }: Props) => {
  const router = useRouter();

  return (
    <li
      onClick={() => router.replace(`?method=${tabValue}`)}
      className="relative w-1/2 cursor-pointer select-none py-3 text-center transition duration-300 ease-in-out first:rounded-tl-xl last:rounded-tr-xl hover:bg-zinc-800 md:py-4"
    >
      <p className="text-sm md:text-base">{title}</p>
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
