import { usdc, vincask } from "@/constants/contracts";
import { useEffect, useState } from "react";
import { formatUnits, fromHex } from "viem";
import { useWebSocketPublicClient } from "wagmi";

const usePublicMintData = () => {
  const publicClient = useWebSocketPublicClient();
  const [publicNumMinted, setPublicNumMinted] = useState<number>();
  const [publicTotalSupply, setPublicTotalSupply] = useState<number>();
  const [publicPrice, setPublicPrice] = useState<string>();
  const [publicStableCoin, setPublicStableCoin] = useState<string>();

  useEffect(() => {
    let chainId: number | undefined;
    (async () => {
      chainId = await publicClient?.getChainId();
    })();

    (async () => {
      const numMinted = await publicClient?.call({
        data: "0x25d112a9",
        to: chainId === 5 ? vincask.address.goerli : vincask.address.sepolia,
      });

      if (numMinted?.data) {
        setPublicNumMinted(fromHex(numMinted.data, "number"));
      }
    })();

    (async () => {
      const totalSupply = await publicClient?.call({
        data: "0xc4e41b22",
        to: chainId === 5 ? vincask.address.goerli : vincask.address.sepolia,
      });

      if (totalSupply?.data) {
        setPublicTotalSupply(fromHex(totalSupply.data, "number"));
      }
    })();

    (async () => {
      const price = await publicClient?.call({
        data: "0xa7f93ebd",
        to: chainId === 5 ? vincask.address.goerli : vincask.address.sepolia,
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
        to: chainId === 5 ? usdc.address.goerli : usdc.address.sepolia,
      });

      if (stableCoin?.data) {
        setPublicStableCoin(fromHex(stableCoin.data, "string"));
      }
    })();
  }, []);

  return { publicNumMinted, publicTotalSupply, publicPrice, publicStableCoin };
};
export default usePublicMintData;
