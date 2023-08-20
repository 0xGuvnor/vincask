import { GetStaticProps, InferGetStaticPropsType } from "next";
import { RefObject, useEffect, useRef, useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { motion } from "framer-motion";
import axios from "axios";
import Head from "next/head";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Overlay from "@/components/Overlay";
import RedeemCard from "@/components/RedeemCard";
import { vincask } from "@/constants/contracts";
import useIsMounted from "@/hooks/useIsMounted";
import { redeemNftCardListVariant } from "@/utils/motionVariants";
import { alchemy } from "@/lib/alchemy";
import { NftData } from "@/types";
import Link from "next/link";
import { parseUnits } from "viem";
import { toast } from "react-hot-toast";
import ToastError from "@/components/toasts/ToastError";
import ToastLoading from "@/components/toasts/ToastLoading";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import RedeemedCardSection from "@/components/RedeemedCardSection";

const Redeem = ({
  defaultImg,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMounted = useIsMounted();
  const { address, isConnected } = useAccount();
  const expandRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [expand, setExpand] = useState(false);
  const [selectedNfts, setSelectedNfts] = useState<number[]>([]);
  const vincaskContract = {
    address: vincask.address.sepolia,
    abi: vincask.abi,
  };

  const { data: numNfts } = useContractRead({
    ...vincaskContract,
    functionName: "balanceOf",
    args: [address || "0x"],
    watch: true,
    select: (data) => Number(data),
  });
  const [nftDataArr, setNftDataArr] = useState<NftData[]>();
  const [toggleStates, setToggleStates] = useState<boolean[]>(
    new Array(numNfts).fill(false)
  );
  const allTogglesOn = toggleStates.every((state) => state);
  const toggleCount = toggleStates.reduce((accumulator, currentValue) => {
    const numericalValue = currentValue ? 1 : 0;

    return accumulator + numericalValue;
  }, 0);

  const handleToggleChange = (id: number, checked: boolean) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[id] = checked;
    setToggleStates(newToggleStates);
  };

  const handleToggleAll = () => {
    if (!allTogglesOn && nftDataArr) {
      setSelectedNfts(nftDataArr?.map((nftData) => Number(nftData.tokenId)));
    } else {
      setSelectedNfts([]);
    }

    const newToggleStates = toggleStates.map(() => !allTogglesOn);
    setToggleStates(newToggleStates);
  };

  const { data: isApproved } = useContractRead({
    ...vincaskContract,
    functionName: "isApprovedForAll",
    args: [address || "0x0", vincask.address.sepolia],
  });

  const { config: approveConfig } = usePrepareContractWrite({
    ...vincaskContract,
    functionName: "setApprovalForAll",
    args: [vincask.address.sepolia, true],
  });

  const {
    data: approveData,
    write: approve,
    error: approveError,
    isError: isApproveError,
  } = useContractWrite(approveConfig);

  const { data: approveTxReceipt, isLoading: approveIsLoading } =
    useWaitForTransaction({ hash: approveData?.hash });

  const {
    data: redeemData,
    write: redeem,
    error: redeemError,
    isError: isRedeemError,
  } = useContractWrite({
    ...vincaskContract,
    functionName: "multiRedeem",
    args: [selectedNfts.map((nft) => parseUnits(`${nft}`, 0))],
  });

  const { data: redeemTxReceipt, isLoading: redeemIsLoading } =
    useWaitForTransaction({ hash: redeemData?.hash });

  const handleRedeem = () => {
    setIsLoading(true);

    if (isApproved) {
      redeem();
    } else {
      approve?.();
    }
  };

  useEffect(() => {
    if (isApproveError) {
      setIsLoading(false);
      toast.error((t) => (
        <ToastError t={t} errorMessage={approveError?.name} />
      ));
    }

    if (isRedeemError) {
      setIsLoading(false);
      toast.error((t) => <ToastError t={t} errorMessage={redeemError?.name} />);
    }
  }, [isApproveError, isRedeemError]);

  useEffect(() => {
    let approveToast;
    if (approveIsLoading) {
      approveToast = toast.loading((t) => (
        <ToastLoading
          t={t}
          message={`Approving Vincask to transfer your NFT${
            numNfts ? "s" : ""
          }`}
          txHash={approveData?.hash}
        />
      ));
    }

    if (approveTxReceipt?.status === "success") {
      toast.dismiss(approveToast);
      redeem();
    }
  }, [approveIsLoading, approveTxReceipt?.status]);

  useEffect(() => {
    let redeemToast;
    if (redeemIsLoading) {
      redeemToast = toast.loading((t) => (
        <ToastLoading
          t={t}
          message={`Redeeming ${selectedNfts.length} NFT${
            selectedNfts.length > 1 ? "s" : ""
          }`}
          txHash={redeemData?.hash}
        />
      ));
    }

    if (redeemTxReceipt?.status === "success") {
      toast.dismiss(redeemToast);
      toast.success((t) => (
        <ToastSuccess
          t={t}
          message={`Successfully redeemed ${selectedNfts.length} NFT${
            selectedNfts.length > 1 ? "s" : ""
          }`}
          txHash={redeemTxReceipt.transactionHash}
        />
      ));
      setIsLoading(false);
    }
  }, [redeemIsLoading, redeemTxReceipt?.status]);

  useEffect(() => {
    const isComponentOnTop = (ref: RefObject<HTMLDivElement>) => {
      if (!ref.current) return false;

      const element = ref.current.getBoundingClientRect();

      return element.top === 80 || element.top === 56;
    };

    const checkPosition = () => {
      const result = isComponentOnTop(expandRef);
      setExpand(result);
    };

    window.addEventListener("scroll", checkPosition);
    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  useEffect(() => {
    if (address && numNfts) {
      (async () => {
        const nfts = await alchemy.nft.getNftsForOwner(address, {
          contractAddresses: [vincask.address.sepolia],
        });

        const newNftDataArr: NftData[] = nfts.ownedNfts.map((nft) => ({
          title: nft.title,
          tokenId: nft.tokenId,
        }));
        setNftDataArr(newNftDataArr);
      })();
    }

    setToggleStates(new Array(numNfts).fill(false));
  }, [address, numNfts]);

  if (!isMounted) return null;
  return (
    <>
      <Head>
        <title>Vincask - Redeem</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Overlay />

      <Container>
        <Heading
          title="Unlock the Legacy"
          subtitle="Swap your NFT to redeem our exclusive whisky on a one-to-one basis."
        />

        {isConnected ? (
          <>
            <motion.div
              ref={expandRef}
              initial={false}
              animate={expand ? "big" : "small"}
              variants={{
                big: { width: "100%" },
                small: { width: "auto" },
              }}
              transition={{ duration: 0.75 }}
              className={`sticky inset-x-0 top-14 md:top-20 flex flex-col md:flex-row items-center md:items-start justify-between self-center transition duration-300 ease-in-out z-30 max-w-xl md:min-w-[395px]`}
            >
              <motion.div
                className={`${
                  expand && "bg-base-100/75 backdrop-blur-sm shadow-2xl"
                } flex flex-col items-center justify-center w-[230px] md:w-[320px] rounded-b-lg bg-base-100 px-4 py-2 gap-1 md:gap-2`}
              >
                <span className="text-lg md:text-2xl h-12x">
                  Selected{" "}
                  <span className="font-mono">
                    {`[`}
                    <span className="text-primary">{toggleCount}</span>
                    <span>/{toggleStates.length}</span>
                    {`]`}
                  </span>{" "}
                  NFT{toggleCount > 1 || toggleCount === 0 ? "s" : ""}
                </span>

                <div className="flex items-center justify-center gap-3 px-3 py-2">
                  <label htmlFor="toggleAll" className="text-sm md:text-base">
                    Select All
                  </label>
                  <input
                    id="toggleAll"
                    type="checkbox"
                    checked={allTogglesOn}
                    onChange={handleToggleAll}
                    className={`${allTogglesOn && "toggle-success"} toggle`}
                  />
                </div>
              </motion.div>

              <button
                disabled={!numNfts || isLoading}
                onClick={handleRedeem}
                className="w-40 text-lg normal-case shadow-lg disabled:bg-base-100 disabled:ring-primary/25 disabled:ring-1 btn btn-primary shadow-primary/20"
              >
                {isLoading ? (
                  <div className="flex items-end">
                    <span>Redeeming</span>
                    <span className="loading loading-dots loading-xs"></span>
                  </div>
                ) : (
                  <span>Redeem</span>
                )}
              </button>
            </motion.div>

            {/* <ul className="flex flex-wrap items-center justify-center gap-2">
              {selectedNfts
                .sort((a, b) => a - b)
                .map((nft, id) => (
                  <div key={id} className="px-2 text-black bg-white">
                    {nft}
                  </div>
                ))}
            </ul> */}

            {numNfts || numNfts! >= 1 ? (
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={redeemNftCardListVariant}
                className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
              >
                {toggleStates.map((checked, id) => (
                  <RedeemCard
                    key={id}
                    id={id}
                    nftData={
                      nftDataArr ? nftDataArr[id] : { title: "", tokenId: "" }
                    }
                    defaultImg={defaultImg}
                    checked={checked}
                    isLoading={isLoading}
                    onChange={handleToggleChange}
                    setSelectedNfts={setSelectedNfts}
                  />
                ))}
              </motion.ul>
            ) : (
              <div className="text-lg text-center md:text-2xl text-primary">
                <Link
                  href="/nft"
                  className="underline transition duration-300 ease-in-out underline-offset-2 decoration-2 hover:text-primary-focus"
                >
                  Mint an NFT
                </Link>{" "}
                to view them here.
              </div>
            )}
          </>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="self-center text-lg md:text-2xl text-primary"
          >
            Please connect your wallet to view your NFTs
          </motion.h1>
        )}
      </Container>

      <Container>
        <RedeemedCardSection defaultImg={defaultImg} />
      </Container>
    </>
  );
};
export default Redeem;

export const getStaticProps: GetStaticProps = async () => {
  let res;

  try {
    res = await axios.get(`https://pokeapi.co/api/v2/pokemon/25`);
  } catch (error) {
    console.error(error);
  }

  if (!res) return { props: { defaultImg: "" } };
  return {
    props: {
      defaultImg: res.data.sprites.other["official-artwork"].front_default,
    },
  };
};
