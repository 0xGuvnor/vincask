import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Marcellus, Outfit } from "next/font/google";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, mainnet, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
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
  weight: ["300", "700", "800", "900"],
  subsets: ["latin"],
});

const { chains, publicClient } = configureChains(
  [
    // mainnet,
    sepolia,
  ],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID!,
    }),
    publicProvider(),
  ]
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
          <MobileMenuProvider>
            <LayoutGroup>
              <main
                className={`${outfit.className} ${marcellus.variable} flex flex-col justify-between min-h-screen`}
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
          </MobileMenuProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </AnimatePresence>
  );
}
