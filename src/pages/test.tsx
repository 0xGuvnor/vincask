import Countdown from "@/components/Countdown";
import { usdc, vincask } from "@/constants/contracts";
import usePublicMintData from "@/hooks/usePublicMintData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { formatUnits, fromHex } from "viem";
import { useNetwork, useWebSocketPublicClient } from "wagmi";

const Test = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Countdown year={2023} month={11} date={25} hour={0} minute={0} />
    </div>
  );
};
export default Test;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
