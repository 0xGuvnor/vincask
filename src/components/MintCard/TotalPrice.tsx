import { motion } from "framer-motion";

interface Props {
  dataLoaded: boolean;
  price: string | undefined;
  currency: string | undefined;
}

const TotalPrice = ({ dataLoaded, price, currency }: Props) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-sm font-body md:text-base"
    >
      Price:{" "}
      {dataLoaded ? (
        <span>
          {price} {currency}
        </span>
      ) : (
        "..."
      )}
    </motion.span>
  );
};
export default TotalPrice;
