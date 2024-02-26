import AboutPortEllen from "@/components/AboutPortEllen";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero 2";
import MobileOverlay from "@/components/MobileOverlay";
import NftConcept from "@/components/NftConcept";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import getHomePageProps from "@/utils/helpers/getHomePageProps";
import getWhiskyPageProps from "@/utils/helpers/getWhiskyPageProps";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export default function Home({
  heroImage,
  // teamImages,
  carouselImages,
  certImages,
  stepsMedia,
  parallexImages,
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
        <AboutPortEllen parallexImages={parallexImages} />
        <Testimonials carouselImages={carouselImages} certImages={certImages} />
        <NftConcept stepsMedia={stepsMedia} />
        {/* <Team teamImages={teamImages} /> */}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const { heroImage, teamImages, carouselImages, certImages, parallexImages } =
    getHomePageProps();

  const stepsMedia = getWhiskyPageProps();

  return {
    props: {
      heroImage,
      teamImages,
      carouselImages,
      certImages,
      stepsMedia,
      parallexImages,
    },
  };
};
