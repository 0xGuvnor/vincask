import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiOpensea } from "react-icons/si";
import Trait from "./Trait";
import { motion } from "framer-motion";
import { NftData } from "@/types";
import { useNetwork } from "wagmi";
import { vincask, vincaskX } from "@/constants/contracts";
import { openSeaUrl } from "@/constants/urls";
import { redeemNftCardVariants } from "@/utils/motionVariants";

interface Props {
  nftData: NftData;
  defaultImg: string;
}

const RedeemedCard = ({ nftData, defaultImg }: Props) => {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const { chain } = useNetwork();

  useEffect(() => {
    // Loads name and pic data on mount
    if (nftData?.tokenId) {
      (async () => {
        try {
          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${nftData.tokenId}`,
          );
          setName(res.data.name);
          setPic(res.data.sprites.other["official-artwork"].front_default);
        } catch (error) {
          console.error(`Redeem card - ${error}`);
        }
      })();
    }
  }, [nftData]);

  return (
    <motion.article
      variants={redeemNftCardVariants}
      className="group w-[250px] rounded-lg bg-gradient-to-b from-[#0070FF] from-30% to-[#15F4EE] to-90% p-2"
    >
      <div className="flex flex-col gap-3">
        <figure className="flex items-center justify-center overflow-hidden rounded-md bg-black/70 shadow-2xl">
          <Image
            src={pic || defaultImg}
            alt="NFT Picture"
            quality={100}
            width={200}
            height={200}
            className="p-6 transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </figure>

        <header className="flex items-center justify-between text-black">
          <h1 className="text-lg font-semibold capitalize">
            {name} #{nftData?.tokenId}
          </h1>
          {chain && (
            <a
              href={`${
                chain.testnet ? openSeaUrl.testnet : openSeaUrl.mainnet
              }assets/${chain?.network}/${
                vincaskX.address[chain.network as keyof typeof vincask.address]
              }/${nftData?.tokenId}`}
              rel="noreferrer"
              target="_blank"
              className="transition duration-300 ease-in-out hover:opacity-75"
            >
              <SiOpensea className="h-6 w-6" />
            </a>
          )}
        </header>

        <section className="grid grid-cols-2 gap-1">
          <Trait
            attribute="Taste"
            level={Math.floor(Math.random() * 30 + 70)}
          />
          <Trait
            attribute="Colour"
            level={Math.floor(Math.random() * 30 + 70)}
          />
          <Trait
            attribute="Smoothness"
            level={Math.floor(Math.random() * 30 + 70)}
          />
          <Trait
            attribute="Aroma"
            level={Math.floor(Math.random() * 30 + 70)}
          />
          <Trait
            attribute="Balance"
            level={Math.floor(Math.random() * 30 + 70)}
          />
        </section>
      </div>
    </motion.article>
  );
};
export default RedeemedCard;
