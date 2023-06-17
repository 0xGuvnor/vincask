import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Overlay from "@/components/Overlay";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import Head from "next/head";

export default function Home() {
  const { show } = useMobileMenuContext();

  return (
    <>
      <Head>
        <title>Vincask</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && <Overlay />}

      <div className="flex flex-col">
        <Hero />
        <Testimonials />
        <Team />
        <FAQ />
      </div>
    </>
  );
}
