import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

interface Props {
  item: string;
  price: string;
  priceShort: string;
  length: string;
  primary?: boolean;
}

const BarItem = ({ item, price, priceShort, length, primary }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <motion.div
      initial={{ width: "0%" }}
      whileInView={{ width: `${length}%` }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay: 0.5, duration: 1 }}
      //   style={{ width: `${length}%` }}
      className={`${
        primary ? "bg-primary" : "bg-neutral"
      } relative flex h-10 items-center justify-start rounded`}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 1.75, ease: "easeInOut" }}
        className={`${primary && "text-primary-content"} pl-2 lg:pl-4`}
      >
        {item}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 1.75, ease: "easeInOut" }}
        className="absolute inset-y-0 -right-10 flex items-center md:-right-12 lg:-right-16"
      >
        {isMobile ? priceShort : price}
      </motion.p>
    </motion.div>
  );
};
export default BarItem;
