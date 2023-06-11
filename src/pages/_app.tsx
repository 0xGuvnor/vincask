import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Antic_Didone, Open_Sans } from "next/font/google";

const anticDidone = Antic_Didone({
  weight: ["400"],
  subsets: ["latin"],
});
const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={anticDidone.className}>
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </main>
  );
}
