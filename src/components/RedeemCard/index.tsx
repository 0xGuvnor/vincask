import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SiOpensea } from "react-icons/si";
import { ImFire } from "react-icons/im";
import Trait from "./Trait";
import { motion } from "framer-motion";
import { redeemNftCardVariant } from "@/utils/motionVariants";
import { NftData } from "@/types";
import { useNetwork } from "wagmi";
import { vincask } from "@/constants/contracts";
import { openSeaUrl } from "@/constants/urls";

interface Props {
  id: number;
  nftData: NftData;
  defaultImg: string;
  checked: boolean;
  isLoading: boolean;
  onChange: (id: number, checked: boolean) => void;
  setSelectedNfts: Dispatch<SetStateAction<number[]>>;
}

const RedeemCard = ({
  id,
  nftData,
  defaultImg,
  checked,
  isLoading,
  onChange,
  setSelectedNfts,
}: Props) => {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const { chain } = useNetwork();

  useEffect(() => {
    // Loads name and pic data on mount
    if (nftData.tokenId) {
      (async () => {
        try {
          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${nftData.tokenId}`
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
      variants={redeemNftCardVariant}
      className="p-2 group bg-gradient-to-b from-[#ff930f] from-30% to-[#fff95b] to-90% rounded-lg w-[250px]"
    >
      <div className="flex flex-col gap-3">
        <figure className="flex items-center justify-center overflow-hidden rounded-md shadow-2xl bg-black/70">
          <Image
            alt="NFT Picture"
            src={pic || defaultImg}
            width={200}
            height={200}
            className="p-6 transition-all duration-300 ease-in-out group-hover:scale-110"
          />
        </figure>

        <header className="flex items-center justify-between text-black">
          <h1 className="text-lg font-semibold capitalize">
            {name} #{nftData.tokenId}
          </h1>
          {chain && (
            <a
              href={`${
                chain.testnet ? openSeaUrl.testnet : openSeaUrl.mainnet
              }assets/${chain?.network}/${
                vincask.address[chain.network as keyof typeof vincask.address]
              }/${nftData.tokenId}`}
              rel="noreferrer"
              target="_blank"
              className="transition duration-300 ease-in-out hover:opacity-75"
            >
              <SiOpensea className="w-6 h-6" />
            </a>
          )}
        </header>

        <div className="flex items-center justify-between h-7">
          <div className="flex items-center justify-center gap-1">
            <ImFire
              className={`${
                checked && "text-red-400"
              } w-6 h-6 p-1 rounded-md bg-black transition duration-300 ease-in-out`}
            />
            <label htmlFor={`redeemToggle-${id}`} className="text-black">
              Redeem
            </label>
          </div>

          <input
            id={`redeemToggle-${id}`}
            type="checkbox"
            disabled={isLoading}
            checked={checked}
            onChange={(e) => {
              if (!checked) {
                setSelectedNfts((prev) => [...prev, Number(nftData.tokenId)]);
              } else {
                setSelectedNfts((prev) =>
                  prev.filter((nft) => nft !== Number(nftData.tokenId))
                );
              }

              onChange(id, e.target.checked);
            }}
            className={`${checked && "toggle-success"} toggle`}
          />
        </div>

        <section className="flex flex-wrap justify-between gap-1">
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
export default RedeemCard;
