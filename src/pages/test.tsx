import { usdc, vincask } from "@/constants/contracts";
import usePublicMintData from "@/hooks/usePublicMintData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { formatUnits, fromHex } from "viem";
import { useNetwork, useWebSocketPublicClient } from "wagmi";

const Test = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { chain } = useNetwork();
  const { chainId, publicNumMinted, publicTotalSupply } = usePublicMintData();

  // console.log(chain?.name);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div>chain: {chainId}</div>
      <div className="flex gap-2">
        <div>{publicNumMinted}</div>/ <div>{publicTotalSupply}</div>
      </div>
    </div>
  );
};
export default Test;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
