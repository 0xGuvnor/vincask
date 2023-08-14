import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import AmountButton from "./AmountButton";
import Image from "next/image";
import {
  useAccount,
  useContractEvent,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { paymentToken, vincask } from "@/constants/contracts";
import { formatEther, parseEther, parseUnits } from "viem";
import useIsMounted from "@/hooks/useIsMounted";
import { motion } from "framer-motion";
import TabButton from "./TabButton";
import { toast } from "react-hot-toast";
import ToastSuccess from "../toasts/ToastSuccess";
import ToastError from "../toasts/ToastError";
import ToastLoading from "../toasts/ToastLoading";

const MintCard = () => {
  const isMounted = useIsMounted();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState<"crypto" | "cc">("crypto");
  const { address, isConnected } = useAccount();
  const vincaskContract = {
    address: vincask.address.sepolia,
    abi: vincask.abi,
  };
  const paymentTokenContract = {
    address: paymentToken.address.sepolia,
    abi: paymentToken.abi,
  };

  const { data: readData } = useContractReads({
    contracts: [
      {
        ...vincaskContract,
        functionName: "getLatestTokenId",
      },
      {
        ...vincaskContract,
        functionName: "getTotalSupply",
      },
      {
        ...vincaskContract,
        functionName: "getMintPrice",
      },
      { ...paymentTokenContract, functionName: "name" },
      {
        ...paymentTokenContract,
        functionName: "allowance",
        args: [address ? address : "0x0", vincask.address.sepolia],
      },
    ],
    watch: true,
  });

  const { config: paymentTokenConfig } = usePrepareContractWrite({
    ...paymentTokenContract,
    functionName: "approve",
    args: [
      vincask.address.sepolia,
      parseEther(
        `${
          (readData
            ? Number(formatEther(readData[2].result as bigint))
            : 20000) /* Default price is 20,000 */ * quantity
        }`
      ),
    ],
  });

  const {
    data: approveData,
    write: approve,
    error: approveError,
    isError: isApproveError,
  } = useContractWrite(paymentTokenConfig);

  const { data: approveTxReceipt, isLoading: approveIsLoading } =
    useWaitForTransaction({
      hash: approveData?.hash,
    });

  const { config: mintConfig } = usePrepareContractWrite({
    ...vincaskContract,
    functionName: "safeMultiMintWithUsdc",
    args: [parseUnits(`${quantity}`, 0)],
  });

  const {
    write: mint,
    error: mintError,
    isError: isMintError,
  } = useContractWrite(mintConfig);

  // Listen for the ERC721 Transfer event to be emitted
  // which indicates a successful mint
  useContractEvent({
    ...vincaskContract,
    eventName: "Transfer",
    listener(log) {
      setIsLoading(false);
      setQuantity(1);
      toast.success((t) => (
        <ToastSuccess t={t} txHash={log[0].transactionHash} />
      ));
    },
  });

  const decrement = () => {
    if (!isLoading) {
      setQuantity((prev) => {
        if (prev === 1) {
          return prev;
        } else {
          return prev - 1;
        }
      });
    }
  };

  const increment = () => {
    let maxValue = 99,
      currentValue = 0;

    if (readData) {
      maxValue = Number(readData[1].result?.toString());
      currentValue = Number(readData[0].result?.toString());
    }

    if (!isLoading) {
      setQuantity((prev) => {
        if (prev === maxValue - currentValue) {
          return prev;
        } else {
          return prev + 1;
        }
      });
    }
  };

  const mintNft = async () => {
    setIsLoading(true);

    if (readData) {
      if (
        // Checking if paymentToken's spending allowance is less than the total price to mint
        Number(formatEther(readData[4].result as bigint)) < // paymentToken's spending allowance
        Number(formatEther(readData[2].result! as bigint)) * quantity // Total price
      ) {
        approve?.();
      } else {
        mint?.();
      }
    }
  };

  useEffect(() => {
    if (isMintError) {
      setIsLoading(false);
      toast.error((t) => <ToastError t={t} errorMessage={mintError?.name} />);
    }

    if (isApproveError) {
      setIsLoading(false);
      toast.error((t) => (
        <ToastError t={t} errorMessage={approveError?.name} />
      ));
    }

    let approveToast;
    if (approveIsLoading) {
      approveToast = toast.loading((t) => (
        <ToastLoading t={t} txHash={approveData?.hash} />
      ));
    }

    if (approveTxReceipt?.status === "success") {
      toast.dismiss(approveToast);
      mint?.();
    }
  }, [
    mintError,
    isMintError,
    isApproveError,
    approveError,
    approveIsLoading,
    approveTxReceipt,
  ]);

  if (!isMounted) return null;
  return (
    <div className="flex flex-col items-center self-center justify-center md:self-start md:sticky md:top-20">
      <ul className="flex items-center justify-center w-full pb-2 bg-[#1B1B1B] rounded-t-xl z-10 translate-y-1 md:translate-y-4">
        <TabButton
          tab={tab}
          setTab={setTab}
          tabValue="crypto"
          title="Buy with crypto"
        />
        <TabButton
          tab={tab}
          setTab={setTab}
          tabValue="cc"
          title="Buy with credit card"
        />
      </ul>

      <motion.div
        key="mintCard"
        layout="size"
        transition={{
          duration: 0.25,
        }}
        style={{
          boxShadow: "0 25px 50px -12px #27272a",
        }}
        className="flex flex-col items-center justify-center rounded-b-xl w-[300px] md:w-96 pb-10 md:pb-12 bg-[#1B1B1B] z-0"
      >
        {tab === "crypto" && (
          <motion.div
            key="crypto"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              layout
              className="relative w-44 h-44 ml-[2.51995555px] md:w-60 md:h-60 md:ml-0"
            >
              <Image
                alt="Vincask logo"
                src="/logo2.png"
                fill
                className="object-contain"
              />
            </motion.div>

            {isConnected ? (
              <motion.div
                layout="size"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-4 md:w-auto w-60 md:gap-6"
              >
                <div className="text-lg font-bold text-white font-body md:text-2xl">
                  <span>
                    {readData ? readData[0].result?.toString() : "..."}
                  </span>{" "}
                  /{" "}
                  <span>
                    {readData ? readData[1].result?.toString() : "..."}
                  </span>{" "}
                  <span>minted</span>
                </div>

                <span className="text-sm font-body md:text-base">
                  Price:{" "}
                  {readData ? (
                    <span>
                      {(
                        Number(formatEther(readData[2].result as bigint)) *
                        quantity
                      ).toLocaleString()}{" "}
                      {readData[3].result?.toString()}
                    </span>
                  ) : (
                    "..."
                  )}
                </span>

                <div
                  className={`${
                    isLoading ? "text-primary/25" : "text-primary"
                  } flex items-center justify-between w-28 md:w-36 font-body`}
                >
                  <AmountButton
                    onClick={decrement}
                    icon={HiMinus}
                    isLoading={isLoading}
                  />
                  <span className="text-2xl md:text-4xl">{quantity}</span>
                  <AmountButton
                    onClick={increment}
                    icon={HiPlus}
                    isLoading={isLoading}
                  />
                </div>

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={mintNft}
                  className="h-10 normal-case transition duration-300 ease-in-out border-none rounded w-44 disabled:ring-primary/25 disabled:ring-1 text-primary-content md:text-lg md:w-60 md:btn-md btn-sm hover:bg-primary-focus btn bg-primary"
                >
                  {isLoading ? (
                    <div className="flex items-end">
                      <span>Minting</span>
                      <span className="loading loading-dots loading-xs"></span>
                    </div>
                  ) : (
                    <span>Mint</span>
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.p
                layout="size"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-sm md:text-base font-body"
              >
                Please connect your wallet to mint
              </motion.p>
            )}
          </motion.div>
        )}

        {tab === "cc" && (
          <motion.div
            key="cc"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4"
          >
            placeholder
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
export default MintCard;
