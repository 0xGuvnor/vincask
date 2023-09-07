import { usdc, vincask } from "@/constants/contracts";
import { useEffect, useState } from "react";
import { formatUnits, fromHex } from "viem";
import { useWebSocketPublicClient } from "wagmi";

const usePublicMintData = () => {
  const publicClient = useWebSocketPublicClient();
  const [chainId, setChainId] = useState<number>();
  const [publicNumMinted, setPublicNumMinted] = useState<number>();
  const [publicTotalSupply, setPublicTotalSupply] = useState<number>();
  const [publicPrice, setPublicPrice] = useState<string>();
  const [publicStableCoin, setPublicStableCoin] = useState<string>();

  useEffect(() => {
    (async () => {
      setChainId(await publicClient?.getChainId());
    })();

    const vincaskAddress =
      chainId === 5 ? vincask.address.goerli : vincask.address.sepolia;

    const stableCoinAddress =
      chainId === 5 ? usdc.address.goerli : usdc.address.sepolia;

    (async () => {
      const numMinted = await publicClient?.call({
        data: "0x25d112a9",
        to: vincaskAddress,
      });

      if (numMinted?.data) {
        setPublicNumMinted(fromHex(numMinted.data, "number"));
      }
    })();

    (async () => {
      const totalSupply = await publicClient?.call({
        data: "0xc4e41b22",
        to: vincaskAddress,
      });

      if (totalSupply?.data) {
        setPublicTotalSupply(fromHex(totalSupply.data, "number"));
      }
    })();

    (async () => {
      const price = await publicClient?.call({
        data: "0xa7f93ebd",
        to: vincaskAddress,
      });

      if (price?.data) {
        setPublicPrice(
          Number(
            formatUnits(fromHex(price.data, "bigint"), 6),
          ).toLocaleString(),
        );
      }
    })();

    (async () => {
      const stableCoin = await publicClient?.call({
        data: "0x06fdde03",
        to: stableCoinAddress,
      });

      if (stableCoin?.data) {
        setPublicStableCoin(fromHex(stableCoin.data, "string"));
      }
    })();
  }, [chainId, publicClient]);

  return {
    chainId,
    publicNumMinted,
    publicTotalSupply,
    publicPrice,
    publicStableCoin,
  };
};
export default usePublicMintData;
