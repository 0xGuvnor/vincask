import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Marcellus, Outfit, Space_Mono } from "next/font/google";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  configureChains,
  createConfig,
  mainnet,
  sepolia,
  WagmiConfig,
} from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, LayoutGroup } from "framer-motion";

// Header font
const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-header",
});
// Body font
const outfit = Outfit({
  weight: ["300", "600", "700", "800", "900"],
  subsets: ["latin"],
});
// Mono font
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  preload: true,
});

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    goerli,
    sepolia,
  ],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID!,
    }),
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID! }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "VinCask",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  return (
    <AnimatePresence mode="wait">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          chains={chains}
          coolMode
          theme={darkTheme({
            accentColor: "#FACA16",
            accentColorForeground: "black",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <GlobalProvider>
            <LayoutGroup>
              <main
                className={`${outfit.className} ${marcellus.variable} ${
                  spaceMono.variable
                } ${
                  environment === "development" && "debug-screens"
                } flex min-h-screen flex-col justify-between `}
              >
                <Toaster
                  toastOptions={{
                    success: {
                      duration: 8000,
                      style: {
                        background: "#004225",
                        color: "#fff",
                        borderRadius: "10px",
                      },
                      iconTheme: { primary: "#00FF7F", secondary: "#000000" },
                    },
                    error: {
                      duration: 8000,
                      style: {
                        background: "#58111A",
                        color: "#fff",
                        borderRadius: "10px",
                      },
                    },
                    loading: {
                      style: {
                        background: "#F4C431",
                        color: "#000000",
                        borderRadius: "10px",
                      },
                      icon: (
                        <span className="loading loading-spinner loading-md"></span>
                      ),
                    },
                  }}
                />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </main>
            </LayoutGroup>
          </GlobalProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </AnimatePresence>
  );
}
