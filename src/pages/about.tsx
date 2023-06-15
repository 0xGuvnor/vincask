import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import Head from "next/head";

const About = () => {
  const { show } = useMobileMenuContext();

  return (
    <>
      <Head>
        <title>Vincask - About</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && <Overlay />}

      <Container classNames="flex-1">
        <div className="flex flex-col justify-start items-center md:justify-center h-[90vh] md:flex-row space-y-8 md:space-y-0">
          <div className="flex flex-col max-w-xl mt-6 space-y-2 text-center md:space-y-4 md:text-left md:mt-0">
            <h1 className="text-2xl font-black md:text-5xl">
              Our mission is to redefine the world of whisky and art.
            </h1>
            <h3 className="text-sm md:text-lg">
              We believe in pushing boundaries, intertwining the realms of
              craftsmanship, innovation, and collectibles. Our passion for
              creating exceptional experiences is at the heart of everything we
              do
            </h3>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum
            perferendis, molestiae enim reprehenderit repellat neque ea ipsum
            ducimus eligendi expedita nobis doloribus. Quisquam distinctio iusto
            recusandae sed sunt consequuntur.
          </div>
        </div>
      </Container>
    </>
  );
};
export default About;
