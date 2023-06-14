import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Vincask - About</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container classNames="flex-1">
        <Heading title="About" />

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum
          perferendis, molestiae enim reprehenderit repellat neque ea ipsum
          ducimus eligendi expedita nobis doloribus. Quisquam distinctio iusto
          recusandae sed sunt consequuntur.
        </div>
      </Container>
    </>
  );
};
export default About;
