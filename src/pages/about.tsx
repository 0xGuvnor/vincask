import AffiliatedCompanies from "@/components/AffiliatedCompanies";
import Collage from "@/components/Collage";
import Container from "@/components/Container";
import MobileOverlay from "@/components/MobileOverlay";
import Timeline from "@/components/Timeline";
import { baseUrl } from "@/constants/urls";
import { fetchAboutPageProps } from "@/utils/fetchAboutPageProps";
import axios from "axios";
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
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2A3439]/40 from-0% -z-10"></div>

      <Container classNames="flex-1 overflow-x-hidden xl:overflow-x-visible relative">
        <div className="flex flex-col justify-start items-center md:justify-center min-h-[75vh] md:flex-row space-y-8 md:space-y-0 md:space-x-4x">
          <div className="flex flex-col md:min-w-[670px] mt-6 space-y-2 text-center md:max-w-3xl md:space-y-4 md:text-left md:mt-0">
            <h1 className="text-3xl font-black text-white font-header md:text-5xl">
              Our mission is to redefine the world of whisky and art.
            </h1>
            <h3 className="text-lg md:text-xl md:max-w-xl">
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
  // const {
  //   data: { collageImages },
  // } = await axios.get(`${baseUrl}/api/getCollageImages`);

  // const {
  //   data: { timelineItems },
  // } = await axios.get(`${baseUrl}/api/getTimelineItems`);

  // const {
  //   data: { companyInfos },
  // } = await axios.get(`${baseUrl}/api/getCompanyInfo`);
  try {
    const { collageImages, timelineItems, companyInfos } =
      await fetchAboutPageProps();

    return { props: { collageImages, timelineItems, companyInfos } };
  } catch (error) {
    return {
      props: { collageImages: null, timelineItems: null, companyInfos: null },
    };
  }
};
