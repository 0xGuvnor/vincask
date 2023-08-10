import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import AmountButton from "./AmountButton";
import Image from "next/image";

const MintCard = () => {
  const [amount, setAmount] = useState(1);

  const decrement = () => {
    setAmount((prev) => {
      if (prev === 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const increment = () => {
    setAmount((prev) => {
      if (prev === 99) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-md md:rounded-xl w-72 md:w-96 md:self-start self-center px-8 pb-10 md:pb-12 bg-[#1B1B1B] shadow-2xl shadow-zinc-800 md:sticky md:top-24">
      <div className="relative w-40 h-40 md:w-60 md:h-60">
        <Image
          alt="Vincask logo"
          src="/logo2.png"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="text-lg font-bold text-white font-body md:text-2xl">
          <span>0</span> / <span>124</span>
        </div>

        <div className="flex items-center justify-between w-28 md:w-36 font-body text-primary">
          <AmountButton onClick={decrement} icon={HiMinus} />
          <span className="text-2xl md:text-4xl">{amount}</span>
          <AmountButton onClick={increment} icon={HiPlus} />
        </div>

        <button
          type="button"
          className="w-40 h-10 normal-case border-none rounded text-primary-content md:text-lg md:w-60 md:btn-md btn-sm hover:bg-primary-focus btn bg-primary"
        >
          Mint
        </button>
      </div>
    </div>
  );
};
export default MintCard;
