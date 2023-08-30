import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero 2";
import MobileOverlay from "@/components/MobileOverlay";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { supabase } from "@/lib/supabase";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export default function Home({
  heroImage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Vincask</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <div className="flex flex-col">
        {/* <Hero /> */}
        <Hero2 heroImage={heroImage} />
        <Testimonials />
        <Team />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ heroImage: string }> = () => {
  const {
    data: { publicUrl: heroImage },
  } = supabase.storage.from("images").getPublicUrl("heroAlt.jpg");

  return { props: { heroImage } };
};
