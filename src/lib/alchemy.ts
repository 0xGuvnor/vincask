import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.ALCHEMY_ID,
  network: Network.ETH_SEPOLIA,
};

export const alchemy = new Alchemy(config);
