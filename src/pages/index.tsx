import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero 2";
import Overlay from "@/components/Overlay";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vincask</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Overlay />

      <div className="flex flex-col">
        {/* <Hero /> */}
        <Hero2 />
        <Testimonials />
        <Team />
      </div>
    </>
  );
}
