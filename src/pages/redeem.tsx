import Container from "@/components/Container";
import Overlay from "@/components/Overlay";
import { useMobileMenuContext } from "@/context/MobileMenuContext";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const Redeem = () => {
  const { show } = useMobileMenuContext();

  return (
    <div>
      <Head>
        <title>Vincask - Redeem</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>{show && <Overlay />}</AnimatePresence>

      <Container classNames="italic">
        <div className="">redeem placeholder</div>
      </Container>
    </div>
  );
};
export default Redeem;
