import { GetStaticProps, InferGetStaticPropsType } from "next";
import { RefObject, useEffect, useRef, useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useWalletClient,
} from "wagmi";
import { motion } from "framer-motion";
import axios from "axios";
import Head from "next/head";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MobileOverlay from "@/components/MobileOverlay";
import RedeemCard from "@/components/RedeemCard";
import { vincask } from "@/constants/contracts";
import useIsMounted from "@/hooks/useIsMounted";
import { alchemy } from "@/lib/alchemy";
import { NftData } from "@/types";
import Link from "next/link";
import { parseUnits } from "viem";
import { toast } from "react-hot-toast";
import ToastError from "@/components/toasts/ToastError";
import ToastLoading from "@/components/toasts/ToastLoading";
import ToastSuccess from "@/components/toasts/ToastSuccess";
import RedeemedCardSection from "@/components/RedeemedCardSection";
import useActiveChain from "@/hooks/useActiveChain";
import RedeemDialog from "@/components/RedeemDialog";
import { supabase } from "@/lib/supabase";
import { useGlobalContext } from "@/context/GlobalContext";
import useWarnRefresh from "@/hooks/useWarnRefresh";
import { redeemNftCardListVariants } from "@/utils/motionVariants";
import useCountdownDifference from "@/hooks/useCountdownDifference";
import Countdown from "@/components/Countdown";

const Redeem = ({
  defaultImg,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMounted = useIsMounted();
  const activeChain = useActiveChain();
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const expandRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [expand, setExpand] = useState(false);
  const [selectedNfts, setSelectedNfts] = useState<number[]>([]);
  const { cachedSigHash } = useGlobalContext();
  const { setShowWarning } = useWarnRefresh();
  const vincaskContract = {
    address: vincask.address[activeChain as keyof typeof vincask.address],
    abi: vincask.abi,
  };
  const countdownTimer = {
    year: 2023,
    month: 11,
    date: 25,
    hour: 0,
    minute: 0,
  };
  const timeDifference = useCountdownDifference(countdownTimer);

  const { data: numNfts } = useContractRead({
    ...vincaskContract,
    functionName: "balanceOf",
    args: [address || "0x"],
    account: walletClient?.account,
    watch: true,
    select: (data) => Number(data),
  });
  const [nftDataArr, setNftDataArr] = useState<NftData[]>();
  const [toggleStates, setToggleStates] = useState<boolean[]>(
    new Array(numNfts).fill(false),
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
    account: walletClient?.account,
  });

  const { config: approveConfig } = usePrepareContractWrite({
    ...vincaskContract,
    functionName: "multiApprove",
    args: [selectedNfts.map((nft) => parseUnits(`${nft}`, 0))],
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
      setShowWarning(true);

      approveToast = toast.loading((t) => (
        <ToastLoading
          t={t}
          message={`Approving Vincask to transfer your NFT${
            selectedNfts.length > 1 ? "s" : ""
          }...
          
          Do not refresh the page.`}
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
          }...

          Do not refresh the page.`}
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

      (async () => {
        const { data: txPassedData, error: txPassedError } = await supabase
          .from("customers")
          .update({ redeem_tx_passed: true })
          .eq("message_hash", cachedSigHash)
          .select();
      })();

      (async () => {
        const { data: nftData, error: nftError } = await supabase
          .from("customers")
          .update({ selected_nfts: selectedNfts })
          .eq("message_hash", cachedSigHash)
          .select();
      })();

      setIsLoading(false);
      setSelectedNfts([]);
      setShowWarning(false);
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
        const nfts = await alchemy[
          activeChain as keyof typeof alchemy
        ].nft.getNftsForOwner(address, {
          contractAddresses: [
            vincask.address[activeChain as keyof typeof vincask.address],
          ],
        });

        const newNftDataArr: NftData[] = nfts.ownedNfts.map((nft) => ({
          title: nft.title,
          tokenId: nft.tokenId,
        }));
        setNftDataArr(newNftDataArr);
      })();
    }

    setToggleStates(new Array(numNfts).fill(false));
  }, [address, numNfts, activeChain]);

  if (!isMounted) return null;
  return (
    <>
      <Head>
        <title>Vincask - Redeem</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <Container>
        <Heading
          title="Unlock the Legacy"
          subtitle="Swap your NFT to redeem our exclusive whisky on a one-to-one basis."
        />

        {timeDifference > 0 ? (
          <div className="self-center">
            <h3 className="text-xl md:text-3xl">Redemption opens in</h3>
            <Countdown {...countdownTimer} />
          </div>
        ) : isConnected ? (
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
              className={`sticky inset-x-0 top-14 z-30 flex max-w-xl flex-col items-center justify-between self-center transition duration-300 ease-in-out md:top-20 md:min-w-[395px] md:flex-row md:items-start`}
            >
              <motion.div
                className={`${
                  expand && "bg-base-100/75 shadow-2xl backdrop-blur-sm"
                } flex w-[230px] flex-col items-center justify-center gap-1 rounded-b-lg bg-base-100 px-4 py-2 md:w-[320px] md:gap-2`}
              >
                <span className="h-12x text-lg md:text-2xl">
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

              <RedeemDialog
                numNfts={numNfts}
                selectedNfts={selectedNfts.length}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                isApproved={isApproved}
                redeem={redeem}
                approve={approve}
              />
            </motion.div>

            {numNfts || numNfts! >= 1 ? (
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={redeemNftCardListVariants}
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
              <div className="text-center text-lg text-primary md:text-2xl">
                <Link
                  href="/nft"
                  className="underline decoration-2 underline-offset-2 transition duration-300 ease-in-out hover:text-primary-focus"
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
            className="self-center text-lg text-primary md:text-2xl"
          >
            Please connect your wallet to view your NFTs
          </motion.h1>
        )}
      </Container>

      {timeDifference <= 0 && isConnected && (
        <Container>
          <RedeemedCardSection defaultImg={defaultImg} />
        </Container>
      )}
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
