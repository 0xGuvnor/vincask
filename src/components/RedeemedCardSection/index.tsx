import { useAccount, useContractRead } from "wagmi";
import RedeemedCard from "../RedeemedCard";
import { vincaskX } from "@/constants/contracts";
import { useEffect, useState } from "react";
import { alchemy } from "@/lib/alchemy";
import { NftData } from "@/types";
import { motion } from "framer-motion";
import { redeemNftCardListVariant } from "@/utils/motionVariants";

interface Props {
  defaultImg: string;
}

const RedeemedCardSection = ({ defaultImg }: Props) => {
  const { address } = useAccount();
  const { data: numNfts } = useContractRead({
    address: vincaskX.address.sepolia,
    abi: vincaskX.abi,
    functionName: "balanceOf",
    args: [address || "0x"],
    watch: true,
    select: (data) => Number(data),
  });

  const [cardArr, setCardArr] = useState(
    new Array(numNfts).fill({ title: "", tokenId: "" })
  );
  const [nftDataArr, setNftDataArr] = useState<NftData[]>();

  useEffect(() => {
    if (address && numNfts) {
      (async () => {
        const nfts = await alchemy.nft.getNftsForOwner(address, {
          contractAddresses: [vincaskX.address.sepolia],
        });

        const newNftDataArr: NftData[] = nfts.ownedNfts.map((nft) => ({
          title: nft.title,
          tokenId: nft.tokenId,
        }));
        setNftDataArr(newNftDataArr);
      })();
    }
  }, [address, numNfts]);

  return (
    <>
      <h2 className="text-2xl text-centerx md:text-5xl font-header">
        Redeemed NFTs
      </h2>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={redeemNftCardListVariant}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
      >
        {/* {nftDataArr.map((nftData) => (
          <RedeemedCard
            key={nftData.tokenId}
            defaultImg={defaultImg}
            nftData={nftData}
          />
        ))} */}
        {cardArr.map((x, id) => (
          <RedeemedCard
            key={id}
            defaultImg={defaultImg}
            nftData={nftDataArr ? nftDataArr[id] : { title: "", tokenId: "" }}
          />
        ))}
      </motion.ul>
    </>
  );
};
export default RedeemedCardSection;
