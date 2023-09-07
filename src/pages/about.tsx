import AffiliatedCompanies from "@/components/AffiliatedCompanies";
import Collage from "@/components/Collage";
import Container from "@/components/Container";
import MobileOverlay from "@/components/MobileOverlay";
import Timeline from "@/components/Timeline";
import { getAboutPageProps } from "@/utils/helpers/getAboutPageProps";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

const About = ({
  companyInfos,
  timelineItems,
  collageImages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="relative">
      <Head>
        <title>Vincask - About</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#2A3439]/40 from-0%"></div>

      <Container classNames="flex-1 overflow-x-hidden xl:overflow-x-visible relative">
        <div className="flex min-h-[105vh] flex-col items-center justify-start space-y-8 md:min-h-[75vh] md:flex-row md:justify-center md:space-x-8 md:space-y-0">
          <div className="mt-6 flex flex-col space-y-2 text-center md:mt-0 md:min-w-[40rem] md:max-w-3xl md:space-y-4 md:text-left">
            <h1 className="font-header text-3xl font-black md:text-5xl">
              Our Mission Is to Redefine the World of Whisky and Art
            </h1>
            <h3 className="text-lg md:max-w-xl md:text-xl">
              We believe in pushing boundaries, intertwining the realms of
              craftsmanship, innovation, and collectibles. Our passion for
              creating exceptional experiences is at the heart of everything we
              do.
            </h3>
          </div>

          <Collage collageImages={collageImages} />
        </div>

        <Timeline timelineItems={timelineItems} />
      </Container>

      <AffiliatedCompanies companyInfos={companyInfos} />
    </div>
  );
};
export default About;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { collageImages, timelineItems, companyInfos } =
      await getAboutPageProps();

    return { props: { collageImages, timelineItems, companyInfos } };
  } catch (error) {
    console.error(error);

    return {
      props: { collageImages: null, timelineItems: null, companyInfos: null },
    };
  }
};
