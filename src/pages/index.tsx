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
  teamImages,
  carouselImages,
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
        <Testimonials carouselImages={carouselImages} />
        <Team teamImages={teamImages} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const {
    data: { publicUrl: heroImage },
  } = supabase.storage.from("images").getPublicUrl("heroAlt.jpg");

  const {
    data: { publicUrl: founder1 },
  } = supabase.storage.from("images").getPublicUrl("team/founder1.jpg");

  const {
    data: { publicUrl: founder2 },
  } = supabase.storage.from("images").getPublicUrl("team/founder2.jpeg");

  const {
    data: { publicUrl: promo0 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo0.jpeg");

  const {
    data: { publicUrl: promo1 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo1.jpg");

  const {
    data: { publicUrl: promo2 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo2.jpg");

  const {
    data: { publicUrl: promo3 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo3.jpg");

  const {
    data: { publicUrl: promo4 },
  } = supabase.storage.from("images").getPublicUrl("carousel/promo4.jpg");

  return {
    props: {
      heroImage,
      teamImages: [founder1, founder2],
      carouselImages: [promo0, promo1, promo2, promo3, promo4],
    },
  };
};
