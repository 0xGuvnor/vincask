import { collectionStatVariants } from "@/utils/motionVariants";
import { motion } from "framer-motion";

interface Props {
  label: string;
  value: string;
  isLoading: boolean;
}

const CollectionStat = ({ label, value, isLoading }: Props) => {
  return (
    <motion.li
      id="collectionStat"
      variants={collectionStatVariants}
      className="flex flex-col items-start justify-center"
    >
      <span className="text-xs text-base-content/60 md:text-sm">{label}</span>
      {isLoading ? (
        <span className="animate-pulse">...</span>
      ) : (
        <span className="font-bold md:text-xl">{value}</span>
      )}
    </motion.li>
  );
};
export default CollectionStat;
