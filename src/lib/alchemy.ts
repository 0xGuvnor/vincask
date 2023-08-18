import { Alchemy, AlchemySettings, Network } from "alchemy-sdk";

const config: AlchemySettings = {
  apiKey: process.env.ALCHEMY_ID,
  network: Network.ETH_SEPOLIA,
};

export const alchemy = new Alchemy(config);
