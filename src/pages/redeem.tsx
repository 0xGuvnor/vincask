import { GetStaticProps, InferGetStaticPropsType } from "next";
import { RefObject, useEffect, useRef, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
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

const Redeem = ({
  defaultImg,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isMounted = useIsMounted();
  const { address, isConnected } = useAccount();
  const expandRef = useRef(null);
  const [expand, setExpand] = useState(false);
  const { data: numNfts } = useContractRead({
    address: vincask.address.sepolia,
    abi: vincask.abi,
    functionName: "balanceOf",
    args: [address || "0x"],
    watch: true,
    select: (data) => Number(data),
  });
  const [nftDataArr, setNftDataArr] = useState<NftData[]>();
  const [toggleStates, setToggleStates] = useState(
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
    const newToggleStates = toggleStates.map(() => !allTogglesOn);
    setToggleStates(newToggleStates);
  };

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
    if (address) {
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
  }, [address, vincask]);

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
              className={`sticky inset-x-0 top-14 md:top-20 flex flex-col md:flex-row items-center md:items-start justify-between self-center gap-4 transition duration-300 ease-in-out z-30 max-w-xl md:min-w-[350px]`}
            >
              <motion.div
                className={`${
                  expand &&
                  "bg-base-100/75 backdrop-blur-sm shadow-2xl w-[195px] md:w-[245px]"
                } flex flex-col items-center justify-center rounded-b-lg bg-base-100 px-4 py-2 gap-1`}
              >
                <span className="text-lg md:text-2xl h-12x">
                  Selected{" "}
                  <span className="font-mono">
                    {`[`}
                    <span className="text-primary">{toggleCount}</span>
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

              <button className="normal-case btn btn-primary">Redeem</button>
            </motion.div>

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
                  onChange={handleToggleChange}
                />
              ))}
            </motion.ul>
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
