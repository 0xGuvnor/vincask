import { Alchemy, AlchemySettings, Network } from "alchemy-sdk";

const sepConfig: AlchemySettings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  network: Network.ETH_SEPOLIA,
};

const gorConfig: AlchemySettings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  network: Network.ETH_GOERLI,
};

export const alchemy = {
  sepolia: new Alchemy(sepConfig),
  goerli: new Alchemy(gorConfig),
};
