import { vincask } from "@/constants/contracts";
import useActiveChain from "@/hooks/useActiveChain";
import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useContractReads } from "wagmi";
import Tooltip from "./InfoTooltip";

interface Props {
  publicCirculatingSupply: number | undefined;
  publicMaxCirculatingSupply: number | undefined;
}

const AvailableToMint = ({
  publicCirculatingSupply,
  publicMaxCirculatingSupply,
}: Props) => {
  const [mintAvail, setMintAvail] = useState("...");
  const activeChain = useActiveChain();
  const vincaskContract = {
    address: vincask.address[activeChain as keyof typeof vincask.address],
    abi: vincask.abi,
  };

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      { ...vincaskContract, functionName: "getMaxCirculatingSupply" },
      { ...vincaskContract, functionName: "getCirculatingSupply" },
    ],
    watch: true,
  });

  useEffect(() => {
    if (data?.[0].status === "success" && data?.[1].status === "success") {
      setMintAvail((data?.[0].result - data?.[1].result).toString());
    } else {
      if (
        publicCirculatingSupply !== undefined &&
        publicMaxCirculatingSupply !== undefined
      ) {
        setMintAvail(
          (publicMaxCirculatingSupply - publicCirculatingSupply).toString(),
        );
      }
    }
  }, [data, publicCirculatingSupply, publicMaxCirculatingSupply]);

  return isError ? (
    <div className="text-red-400">Error retrieving data...</div>
  ) : isLoading ? (
    <div className="animate-spin">
      <VscLoading className="h-6 w-6" />
    </div>
  ) : (
    <div className="flex items-center justify-center gap-1 text-base md:text-lg">
      <span>
        <span>{mintAvail}</span> NFT
        {mintAvail !== undefined && parseInt(mintAvail) !== 1 ? "s" : ""}{" "}
        available to mint
      </span>

      <Tooltip />
    </div>
  );
};
export default AvailableToMint;
