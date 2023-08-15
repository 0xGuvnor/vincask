import { HiMinus, HiPlus } from "react-icons/hi";
import AmountButton from "./AmountButton";

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
  return (
    <div
      className={`${
        isLoading ? "text-primary/25" : "text-primary"
      } flex items-center justify-between w-28 md:w-36`}
    >
      <AmountButton onClick={decrement} icon={HiMinus} isLoading={isLoading} />
      <span className="text-2xl md:text-4xl">{quantity}</span>
      <AmountButton onClick={increment} icon={HiPlus} isLoading={isLoading} />
    </div>
  );
};
export default QuantitySelection;
