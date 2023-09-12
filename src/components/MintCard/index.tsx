import { useEffect, useState } from "react";
import {
  useAccount,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { usdc, vincask } from "@/constants/contracts";
import { formatUnits, parseUnits } from "viem";
import useIsMounted from "@/hooks/useIsMounted";
import { AnimatePresence, motion } from "framer-motion";
import TabButton from "./TabButton";
import { toast } from "react-hot-toast";
import ToastSuccess from "../toasts/ToastSuccess";
import ToastError from "../toasts/ToastError";
import ToastLoading from "../toasts/ToastLoading";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import Logo from "./Logo";
import MintedStatus from "./MintedStatus";
import TotalPrice from "./TotalPrice";
import QuantitySelection from "./QuantitySelection";
import useActiveChain from "@/hooks/useActiveChain";
import usePublicMintData from "@/hooks/usePublicMintData";
import useCountdownDifference from "@/hooks/useCountdownDifference";
import Countdown from "../Countdown";
import { useGlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/router";

const MintCard = () => {
  const isMounted = useIsMounted();
  const router = useRouter();
  const query = router.query;
  const activeChain = useActiveChain();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { address, isConnected } = useAccount();
  const { publicNumMinted, publicPrice, publicStableCoin, publicTotalSupply } =
    usePublicMintData();
  const vincaskContract = {
    address: vincask.address[activeChain as keyof typeof vincask.address],
    abi: vincask.abi,
  };
  const usdcContract = {
    address: usdc.address[activeChain as keyof typeof vincask.address],
    abi: usdc.abi,
  };
  const { mintCountdownTimer: countdownTimer } = useGlobalContext();
  const timeDifference = useCountdownDifference(countdownTimer);

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
      { ...usdcContract, functionName: "name" },
      {
        ...usdcContract,
        functionName: "allowance",
        args: [
          address ? address : "0x0",
          vincask.address[activeChain as keyof typeof vincask.address],
        ],
      },
      { ...usdcContract, functionName: "decimals" },
    ],
    watch: true,
  });

  const { config: approveConfig } = usePrepareContractWrite({
    ...usdcContract,
    functionName: "approve",
    args: [
      vincask.address[activeChain as keyof typeof vincask.address],
      parseUnits(
        `${
          (readData
            ? Number(
                formatUnits(
                  (readData[2].result || 0) as bigint, // Mint price
                  Number(readData[5].result), // Decimals
                ),
              )
            : 20000) /* Default price is 20,000 */ * quantity
        }`,
        Number(readData && readData[5].result), // Decimals
      ),
    ],
  });

  const {
    data: approveData,
    write: approve,
    error: approveError,
    isError: isApproveError,
  } = useContractWrite(approveConfig);

  const { data: approveTxReceipt, isLoading: approveIsLoading } =
    useWaitForTransaction({
      hash: approveData?.hash,
    });

  const {
    data: mintData,
    write: mint,
    error: mintError,
    isError: isMintError,
  } = useContractWrite({
    ...vincaskContract,
    functionName: "safeMultiMintWithStableCoin",
    args: [parseUnits(`${quantity}`, 0)],
  });

  const { data: mintTxReceipt, isLoading: mintIsLoading } =
    useWaitForTransaction({
      hash: mintData?.hash,
    });

  const handleDecrement = () => {
    if (!isLoading) {
      setQuantity((prev) => {
        // Can't go below 1
        if (prev === 1) {
          return prev;
        } else {
          return prev - 1;
        }
      });
    }
  };

  const handleIncrement = () => {
    let maxValue = 99,
      currentValue = 0;

    if (isConnected) {
      if (readData) {
        // Override values if wallet is connected
        maxValue = Number(readData[1].result?.toString());
        currentValue = Number(readData[0].result?.toString());
      }
    } else {
      if (publicNumMinted && publicTotalSupply) {
        maxValue = publicTotalSupply;
        currentValue = publicNumMinted;
      }
    }

    if (!isLoading) {
      if (publicNumMinted && publicTotalSupply) {
        if (publicNumMinted === publicTotalSupply) {
          return;
        }
      }

      if (readData && readData[0].result && readData[1].result) {
        if (readData[0].result.toString() === readData[1].result.toString()) {
          return;
        }
      }

      setQuantity((prev) => {
        if (prev === maxValue - currentValue) {
          return prev;
        } else {
          return prev + 1;
        }
      });
    }
  };

  const handleMint = async () => {
    if (readData && approve) {
      setIsLoading(true);

      if (
        // Checking if USDC's spending allowance is less than the total price to mint
        Number(formatUnits(readData[4].result as bigint, Number(readData[5]))) < // USDC's spending allowance
        Number(formatUnits(readData[2].result as bigint, Number(readData[5]))) *
          quantity // Total price
      ) {
        approve();
      } else {
        mint();
      }
    }
  };

  useEffect(() => {
    // Error handling Toasts
    if (isMintError) {
      setIsLoading(false);
      toast.error((t) => <ToastError t={t} errorMessage={mintError?.name} />);
      // console.log(mintError);
    }

    if (isApproveError) {
      setIsLoading(false);
      toast.error((t) => (
        <ToastError t={t} errorMessage={approveError?.name} />
      ));
      // console.log(approveError);
    }
  }, [isMintError, mintError?.name, isApproveError, approveError?.name]);

  useEffect(() => {
    let approveToast;
    if (approveIsLoading) {
      approveToast = toast.loading((t) => (
        <ToastLoading
          t={t}
          message={`Approving Vincask to spend your ${
            readData && readData[3].result?.toString()
          }...`}
          txHash={approveData?.hash}
        />
      ));
    }

    if (approveTxReceipt?.status === "success") {
      toast.dismiss(approveToast);
      mint();
    }
  }, [approveIsLoading, approveTxReceipt?.status]);

  useEffect(() => {
    // We use a new useEffect so that approveIsLoading and approveTxReceipt will not keep retriggering
    // when mintIsLoading and mintTxReceipt are updated
    let mintToast;
    if (mintIsLoading) {
      mintToast = toast.loading((t) => (
        <ToastLoading
          t={t}
          message={`Minting ${quantity} NFT${quantity > 1 ? "s" : ""}...`}
          txHash={mintData?.hash}
        />
      ));
    }

    if (mintTxReceipt?.status === "success") {
      toast.dismiss(mintToast);
      toast.success((t) => (
        <ToastSuccess
          t={t}
          message={`NFT${quantity > 1 ? "s" : ""} successfully minted`}
          txHash={mintTxReceipt.transactionHash}
        />
      ));
      setIsLoading(false);
      setQuantity(1);
    }
  }, [mintIsLoading, mintTxReceipt?.status]);

  if (!isMounted) return null;
  return (
    <AnimatePresence initial={false}>
      <motion.div
        layout="size"
        transition={{
          duration: 0.25,
        }}
        style={{
          boxShadow: "0px 25px 50px -12px rgba(250, 200, 21, 0.26)",
        }}
        className="relative flex w-[320px] flex-col items-center justify-center self-center rounded-xl bg-[#1B1B1B] md:sticky md:top-24 md:w-96 md:self-start"
      >
        <AnimatePresence initial={false}>
          {timeDifference > 0 && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-30 flex select-none flex-col items-center justify-center rounded-xl bg-transparent/60 backdrop-blur-sm"
            >
              <Countdown {...countdownTimer} title="Mint begins in..." />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.ul
          layout
          className="z-10 flex w-full items-center justify-center rounded-t-xl bg-[#1B1B1B]"
        >
          <TabButton
            tab={query.method || "crypto"}
            tabValue="crypto"
            title="Buy with crypto"
          />
          <TabButton
            tab={query.method}
            tabValue="cc"
            title="Buy with credit card"
          />
        </motion.ul>

        <motion.div
          layout="position"
          className="flex w-[250px] flex-col items-center justify-center gap-6 py-9 md:gap-7 md:py-10"
        >
          <Logo />
          <MintedStatus
            numMinted={
              isConnected
                ? readData
                  ? readData[0].result?.toString()
                  : "..."
                : publicNumMinted
                ? publicNumMinted.toString()
                : "..."
            }
            totalMinted={
              isConnected
                ? readData
                  ? `${readData[1].result}`
                  : "..."
                : publicTotalSupply
                ? `${publicTotalSupply}`
                : "..."
            }
          />

          {(query.method === "crypto" || query.method === undefined) && (
            <motion.div layout="size" className="contents">
              <TotalPrice
                dataLoaded={!!readData || (!!publicStableCoin && !!publicPrice)}
                price={
                  isConnected
                    ? readData && readData[2].result
                      ? (
                          Number(
                            formatUnits(
                              readData[2].result as bigint,
                              Number(readData[5].result),
                            ),
                          ) * quantity
                        ).toLocaleString()
                      : ""
                    : publicPrice
                    ? publicPrice
                    : ""
                }
                currency={
                  isConnected
                    ? readData
                      ? readData[3].result?.toString()
                      : ""
                    : publicStableCoin
                    ? publicStableCoin
                    : ""
                }
              />

              {isConnected ? (
                <div className="contents">
                  <QuantitySelection
                    isLoading={isLoading}
                    decrement={handleDecrement}
                    increment={handleIncrement}
                    quantity={quantity}
                  />

                  <motion.button
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    disabled={
                      isLoading ||
                      (readData &&
                        readData[0].result?.toString() ===
                          readData[1].result?.toString())
                    }
                    onClick={handleMint}
                    className="btn-sm btn !h-[52px] w-44 rounded border-none bg-primary !text-lg normal-case text-primary-content shadow-lg shadow-primary/20 transition duration-300 ease-in-out md:btn-md hover:bg-primary-focus disabled:ring-1 disabled:ring-primary/25 md:w-60"
                  >
                    {isLoading ? (
                      <div className="flex items-end">
                        <span>Minting</span>
                        <span className="loading loading-dots loading-xs"></span>
                      </div>
                    ) : (
                      <span>Mint</span>
                    )}
                  </motion.button>
                </div>
              ) : (
                <>
                  <motion.p
                    layout="size"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center text-sm font-semibold text-primary md:text-lg"
                  >
                    Please connect your wallet <br />
                    to mint
                  </motion.p>
                </>
              )}
            </motion.div>
          )}

          {query.method === "cc" && (
            <motion.div layout="size" className="contents">
              <TotalPrice
                dataLoaded={!!readData || (!!publicStableCoin && !!publicPrice)}
                // Hardcoded price, remember to update!!
                price={`${(10 * quantity).toLocaleString()}`}
                currency={"USD"}
              />
              <QuantitySelection
                isLoading={isLoading}
                decrement={handleDecrement}
                increment={handleIncrement}
                quantity={quantity}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative h-[52px] w-[222.32px]"
              >
                <CrossmintPayButton
                  collectionId="ce0ca86f-0e40-4e96-bdd7-1efbf5ca0cf0"
                  projectId="011b8900-8f68-4e25-b9f6-b1a6c84af69f"
                  mintConfig={{
                    type: "erc-721",
                    totalPrice: (quantity * 10).toString(),
                    _quantity: quantity,
                    quantity: quantity,
                  }}
                  environment="staging"
                  // mintTo="0x000000000000000000000000000000000000dEaD"
                  className="absolute inset-0"
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default MintCard;
