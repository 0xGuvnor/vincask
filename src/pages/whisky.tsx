import Comparison from "@/components/Comparison";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MobileOverlay from "@/components/MobileOverlay";
import Steps from "@/components/Steps";
import WhiskyGrid from "@/components/WhiskyGrid";
import WhiskySpecs from "@/components/WhiskySpecs";
import getWhiskyPageProps from "@/utils/helpers/getWhiskyPageProps";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

const Whisky = ({ images }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Vincask - Whisky</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <Container>
        <Heading
          title="Sip. Savour. Indulge. Repeat."
          subtitle="Your journey to whisky excellence starts here."
        />

        <div className="space-y-32 md:space-y-36">
          <WhiskyGrid images={images} />
          <Comparison />

          {/* <Steps images={images} /> */}
          <WhiskySpecs />
        </div>
      </Container>
    </>
  );
};
export default Whisky;

export const getStaticProps: GetStaticProps = () => {
  const images = getWhiskyPageProps();

  return { props: { images } };
};
