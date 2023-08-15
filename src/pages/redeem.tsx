import Container from "@/components/Container";
import Overlay from "@/components/Overlay";
import Head from "next/head";

const Redeem = () => {
  return (
    <div>
      <Head>
        <title>Vincask - Redeem</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Overlay />

      <Container classNames="italic">
        <div className="">redeem placeholder</div>
      </Container>
    </div>
  );
};
export default Redeem;
