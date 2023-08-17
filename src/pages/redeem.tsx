import { GetServerSideProps, InferGetServerSidePropsType } from "next";
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

const Redeem = ({
  defaultImg,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isMounted = useIsMounted();
  const { address } = useAccount();
  const [count, setCount] = useState(0);
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

  function isComponentOnTop(ref: RefObject<HTMLDivElement>) {
    if (!ref.current) return false;

    const element = ref.current.getBoundingClientRect();

    return element.top === 80 || element.top === 56;
  }

  useEffect(() => {
    const checkPosition = () => {
      const result = isComponentOnTop(expandRef);
      setExpand(result);
    };

    window.addEventListener("scroll", checkPosition);
    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

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

      <Container classNames="">
        <Heading
          title="Unlock the Legacy"
          subtitle="Burn your NFT to redeem our exclusive whisky."
        />

        <motion.div
          ref={expandRef}
          initial={false}
          animate={expand ? "big" : "small"}
          variants={{
            big: { width: "100%" },
            small: { width: "auto" },
          }}
          transition={{ duration: 1 }}
          className={`sticky inset-x-0 top-14 md:top-20 flex flex-col md:flex-row items-center justify-between self-center gap-4 transition duration-300 ease-in-out z-40 max-w-xl`}
        >
          <span
            className={`${
              expand && "bg-base-100/75 backdrop-blur-sm shadow-xl rounded-b-lg"
            } text-lg md:text-2xl h-12 px-4 py-2`}
          >
            Selected{" "}
            <span className="font-mono">
              {`[`}
              <span className="text-primary">{count}</span>
              {`]`}
            </span>{" "}
            NFT{count > 1 || count === 0 ? "s" : ""}
          </span>

          <button className="btn btn-primary">Burn & Redeem</button>
        </motion.div>

        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <RedeemCard defaultImg={defaultImg} id={1} setCount={setCount} />
          <RedeemCard defaultImg={defaultImg} id={2} setCount={setCount} />
          <RedeemCard defaultImg={defaultImg} id={3} setCount={setCount} />
          <RedeemCard defaultImg={defaultImg} id={4} setCount={setCount} />
          <RedeemCard defaultImg={defaultImg} id={5} setCount={setCount} />
          <RedeemCard defaultImg={defaultImg} id={6} setCount={setCount} />
        </ul>
      </Container>
    </>
  );
};
export default Redeem;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/25`);

  return {
    props: {
      defaultImg: res.data.sprites.other["official-artwork"].front_default,
    },
  };
};
