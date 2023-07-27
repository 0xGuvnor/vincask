import Container from "@/components/Container";
import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import Head from "next/head";

const NFT = () => {
  const { show } = useMobileMenuContext();

  return (
    <div>
      <Head>
        <title>Vincask - Redeem</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {show && <Overlay />}
      <Container classNames="italic">nft placeholder</Container>
    </div>
  );
};
export default NFT;
