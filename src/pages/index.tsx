import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero 2";
import MobileOverlay from "@/components/MobileOverlay";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import useIsMounted from "@/hooks/useIsMounted";
import getHomePageProps from "@/utils/helpers/getHomePageProps";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export default function Home({
  heroImage,
  teamImages,
  carouselImages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const isMounted = useIsMounted();

  return (
    <>
      <Head>
        <title>Vincask</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      {/* {isMounted && ( */}
      <div className="flex flex-col">
        {/* <Hero /> */}
        <Hero2 heroImage={heroImage} />
        <Testimonials carouselImages={carouselImages} />
        <Team teamImages={teamImages} />
      </div>
      {/* )} */}
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const { heroImage, teamImages, carouselImages } = getHomePageProps();

  return {
    props: {
      heroImage,
      teamImages,
      carouselImages,
    },
  };
};
