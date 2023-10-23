import { useContractRead } from "wagmi";
import { PiWarningCircle } from "react-icons/pi";
import { GrStatusGoodSmall } from "react-icons/gr";
import { vincask } from "@/constants/contracts";
import useActiveChain from "@/hooks/useActiveChain";

interface Props {}

const RedemptionStatus = ({}: Props) => {
  const activeChain = useActiveChain();
  const vincaskContract = {
    address: vincask.address[activeChain as keyof typeof vincask.address],
    abi: vincask.abi,
  };

  const {
    data: redemptionIsOpen,
    isError,
    isLoading,
  } = useContractRead({
    ...vincaskContract,
    functionName: "isRedemptionOpen",
    watch: true,
  });

  return (
    <section className="flex select-none items-center justify-center gap-1.5 rounded-full border border-gray-700 bg-base-100/80 px-3 py-1 text-xs">
      {isError ? (
        <>
          <PiWarningCircle className="h-3 w-3 text-red-400" />
          <span className="text-gray-500">Failed to get redemption status</span>
        </>
      ) : isLoading ? (
        <span className="animate-pulse text-gray-500">
          Loading redemption status...
        </span>
      ) : (
        <>
          <GrStatusGoodSmall
            className={`${
              redemptionIsOpen ? "text-green-400" : "text-red-400"
            } h-2 w-2 animate-pulse`}
          />
          <span className="text-gray-500">
            {redemptionIsOpen ? "Redemption is live" : "Redemption is closed"}
          </span>
        </>
      )}
    </section>
  );
};
export default RedemptionStatus;
