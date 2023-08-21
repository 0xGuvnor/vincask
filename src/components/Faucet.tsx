import { usdc } from "@/constants/contracts";
import useActiveChain from "@/hooks/useActiveChain";
import useIsMounted from "@/hooks/useIsMounted";
import { parseUnits } from "viem";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

const Faucet = () => {
  const isMounted = useIsMounted();
  const activeChain = useActiveChain();
  const { address, isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: usdc.address[activeChain as keyof typeof usdc.address],
    abi: usdc.abi,
    functionName: "mint",
    args: [address ? address : "0x0", parseUnits(`${1_000_000}`, 6)],
  });

  const { write } = useContractWrite(config);

  if (!isMounted) return null;
  return (
    <div
      className={`${
        isConnected ? "flex" : "hidden"
      } fixed right-5 md:right-10 items-center justify-center bottom-10 md:bottom-20 z-50`}
    >
      <button
        type="button"
        onClick={() => write?.()}
        className="flex items-center self-center justify-center gap-1 px-4 py-2 font-semibold text-black transition duration-300 ease-in-out rounded-full shadow-2xl shadow-white/10 bg-emerald-500 hover:bg-emerald-600"
      >
        <span className="text-xl">🤑</span>
        Mint 1 million USD Coin
      </button>
    </div>
  );
};
export default Faucet;
