import AffiliatedCompanies from "@/components/AffiliatedCompanies";
import Collage from "@/components/Collage";
import Container from "@/components/Container";
import Overlay from "@/components/Overlay";
import Timeline from "@/components/Timeline";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import Head from "next/head";

const About = () => {
  const { show } = useMobileMenuContext();

  return (
    <div className="relative">
      <Head>
        <title>Vincask - About</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && <Overlay />}
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black/40 from-0% -z-10"></div>

      <Container classNames="flex-1 overflow-x-hidden xl:overflow-x-visible relative">
        <div className="flex flex-col justify-start items-center md:justify-center min-h-[75vh] md:flex-row space-y-8 md:space-y-0 md:space-x-4x">
          <div className="flex flex-col md:min-w-[670px] mt-6 space-y-2 text-center md:max-w-3xl md:space-y-4 md:text-left md:mt-0">
            <h1 className="text-2xl font-black text-white md:text-5xl">
              Our mission is to redefine the world of whisky and art.
            </h1>
            <h3 className="text-sm md:text-lg md:max-w-xl">
              We believe in pushing boundaries, intertwining the realms of
              craftsmanship, innovation, and collectibles. Our passion for
              creating exceptional experiences is at the heart of everything we
              do.
            </h3>
          </div>

          <Collage />
        </div>

        <Timeline />
      </Container>

      <AffiliatedCompanies />
    </div>
  );
};
export default About;
