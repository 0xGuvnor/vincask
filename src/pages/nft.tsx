import Head from "next/head";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import MintCard from "@/components/MintCard";
import NftCollectionButton from "@/components/buttons/NftCollectionButton";
import Faucet from "@/components/Faucet";
import Overlay from "@/components/Overlay";
import { looksRareUrl, openSeaUrl } from "@/constants/urls";
import { useNetwork } from "wagmi";
import useIsMounted from "@/hooks/useIsMounted";
import { LayoutGroup, motion } from "framer-motion";

const NFT = () => {
  const { chain } = useNetwork();
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <div>
      <Head>
        <title>Vincask - NFT</title>
        <meta name="description" content="Vincask Pte Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Overlay />

      <LayoutGroup>
        <Container classNames="md:!flex-row flex-col-reverse">
          <motion.div
            layout="position"
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-12 md:gap-16 md:basis-2/3"
          >
            <div className="md:max-w-3xl">
              <Heading
                title="Crafting Masterpieces, Unlocking Experiences"
                subtitle="Mint a Vincask NFT to secure your claim to a bottle of our premium whisky."
              />
            </div>

            <p className="md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias dolor libero aliquid dolorem sequi, ab veritatis dolores
              placeat consequatur quo quod quaerat, tempore repellat magnam
              cupiditate suscipit tenetur qui assumenda obcaecati temporibus
              veniam iusto. Incidunt id, quidem, omnis consectetur illo natus
              sed fuga maiores quaerat iste tempore ea exercitationem, non
              voluptatum. Mollitia possimus esse natus, dolor ad dicta
              praesentium sapiente atque eum quisquam nihil quis vero, nisi
              necessitatibus iusto fugiat. Veritatis libero, temporibus impedit
              culpa sed commodi dolorum doloribus similique, voluptatem sapiente
              aspernatur vitae id incidunt eligendi quasi consequatur! Cumque,
              dicta maxime voluptas amet provident molestias ex minima atque
              quidem!
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <NftCollectionButton
                name="OpenSea"
                url={`${
                  chain?.testnet ? openSeaUrl.testnet : openSeaUrl.mainnet
                }collection/vincask-1`}
              />
              {/* <NftCollectionButton name="LooksRare" url={looksRareUrl} /> */}
            </div>
          </motion.div>

          <motion.div
            layout="position"
            className="flex items-center justify-center"
          >
            <MintCard />
          </motion.div>
        </Container>
      </LayoutGroup>

      <Faucet />
    </div>
  );
};
export default NFT;
