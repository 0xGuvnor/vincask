import Container from "@/components/Container";
import MobileOverlay from "@/components/MobileOverlay";
import Head from "next/head";
import { useRouter } from "next/router";

const Unsubscribe = () => {
  const router = useRouter();
  const email = router.query.u;

  return (
    <>
      <Head>
        <title>Vincask - Unsubscribe successful</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileOverlay />

      <Container>
        <h1 className="mx-auto max-w-sm text-center text-xl md:max-w-3xl md:text-3xl">
          Successfully unsubscribed <br />
          <span className="italic">{email}</span> <br />
          from the VinCask Newsletter mailing list.
        </h1>
      </Container>
    </>
  );
};
export default Unsubscribe;
