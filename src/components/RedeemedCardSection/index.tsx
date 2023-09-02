import { useAccount, useContractRead } from "wagmi";
import RedeemedCard from "../RedeemedCard";
import { vincaskX } from "@/constants/contracts";
import { useEffect, useState } from "react";
import { alchemy } from "@/lib/alchemy";
import { NftData } from "@/types";
import { motion } from "framer-motion";
import { redeemNftCardListVariant } from "@/utils/motionVariants";
import useActiveChain from "@/hooks/useActiveChain";

interface Props {
  defaultImg: string;
}

const RedeemedCardSection = ({ defaultImg }: Props) => {
  const activeChain = useActiveChain();
  const { address } = useAccount();
  const { data: numNfts } = useContractRead({
    address: vincaskX.address[activeChain as keyof typeof vincaskX.address],
    abi: vincaskX.abi,
    functionName: "balanceOf",
    args: [address || "0x"],
    watch: true,
    select: (data) => Number(data),
  });

  const [cardArr, setCardArr] = useState<NftData[]>(
    new Array(numNfts).fill({ title: "", tokenId: "" }),
  );
  const [nftDataArr, setNftDataArr] = useState<NftData[]>();

  useEffect(() => {
    if (address && numNfts) {
      (async () => {
        const nfts = await alchemy[
          activeChain as keyof typeof alchemy
        ].nft.getNftsForOwner(address, {
          contractAddresses: [
            vincaskX.address[activeChain as keyof typeof vincaskX.address],
          ],
        });

        const newNftDataArr: NftData[] = nfts.ownedNfts.map((nft) => ({
          title: nft.title,
          tokenId: nft.tokenId,
        }));
        setNftDataArr(newNftDataArr);
      })();
    }

    setCardArr(new Array(numNfts).fill({ title: "", tokenId: "" }));
  }, [address, numNfts, activeChain]);

  return (
    <div className={`${!numNfts && "hidden"} contents`}>
      <h2 className="text-centerx font-header text-2xl md:text-5xl">
        Redeemed NFTs
      </h2>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={redeemNftCardListVariant}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
      >
        {cardArr.map((initData, id) => (
          <RedeemedCard
            key={id}
            defaultImg={defaultImg}
            nftData={nftDataArr ? nftDataArr[id] : initData}
          />
        ))}
      </motion.ul>
    </div>
  );
};
export default RedeemedCardSection;
