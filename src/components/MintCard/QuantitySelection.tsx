import { HiMinus, HiPlus } from "react-icons/hi";
import AmountButton from "./AmountButton";
import { motion } from "framer-motion";
import { useAccount } from "wagmi";

interface Props {
  isLoading: boolean;
  decrement: () => void;
  increment: () => void;
  quantity: number;
}

const QuantitySelection = ({
  isLoading,
  decrement,
  increment,
  quantity,
}: Props) => {
  const { isConnected } = useAccount();

  return (
    <motion.div
      initial={{ opacity: isConnected ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`${
        isLoading ? "text-primary/25" : "text-primary"
      } flex w-28 items-center justify-between md:w-36`}
    >
      <AmountButton onClick={decrement} icon={HiMinus} isLoading={isLoading} />
      <span className="text-2xl md:text-4xl">{quantity}</span>
      <AmountButton onClick={increment} icon={HiPlus} isLoading={isLoading} />
    </motion.div>
  );
};
export default QuantitySelection;
