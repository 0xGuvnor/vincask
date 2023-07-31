import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Marcellus, Outfit } from "next/font/google";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrumGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import { MobileMenuProvider } from "@/context/MobileMenuContext";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-body",
});

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
        <MobileMenuProvider>
          <main
            className={`${marcellus.className} ${outfit.variable} flex flex-col justify-between min-h-screen`}
          >
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </main>
        </MobileMenuProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
