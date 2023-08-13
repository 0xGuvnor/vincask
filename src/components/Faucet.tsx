import { paymentToken } from "@/constants/contracts";
import useIsMounted from "@/hooks/useIsMounted";
import { parseEther } from "viem";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";

const Faucet = () => {
  const isMounted = useIsMounted();
  const { address, isConnected } = useAccount();

  const { config } = usePrepareContractWrite({
    address: paymentToken.address.sepolia,
    abi: paymentToken.abi,
    functionName: "mint",
    args: [address ? address : "0x0", parseEther(`${1_000_000}`)],
  });

  const { write } = useContractWrite(config);

  if (!isMounted) return null;
  return (
    <div
      className={`${
        isConnected ? "flex" : "hidden"
      } fixed right-10 items-center justify-center bottom-10 z-[100]`}
    >
      <button
        type="button"
        onClick={() => write?.()}
        className="flex items-center self-center justify-center gap-1 px-4 py-2 font-semibold text-black transition duration-300 ease-in-out rounded-full bg-emerald-500 hover:bg-emerald-600"
      >
        <span className="text-xl">🤑</span>
        Mint 1 million ERC20Mock
      </button>
    </div>
  );
};
export default Faucet;
