import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrumGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Antic_Didone, Open_Sans } from "next/font/google";

const anticDidone = Antic_Didone({
  weight: ["400"],
  subsets: ["latin"],
});
const openSans = Open_Sans({ subsets: ["latin"] });

const { chains, publicClient } = configureChains(
  [arbitrumGoerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID! }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Vincask NFT",
  // projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} coolMode>
        <main className={anticDidone.className}>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
